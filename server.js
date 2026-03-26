import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// 数据库文件路径
const DB_FILE = path.resolve('./users.json');
const FILES_DB = path.resolve('./encrypted_files.json');

app.use(cors());
app.use(express.json());

// 确保数据库文件存在
if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
if (!fs.existsSync(FILES_DB)) fs.writeFileSync(FILES_DB, JSON.stringify([], null, 2));

// 读写辅助函数
const readDB = (file) => JSON.parse(fs.readFileSync(file, 'utf8') || '[]');
const writeDB = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

// --- 1. 用户注册 ---
app.post('/api/register', (req, res) => {
    const { email, password, firstName, lastName, attributes } = req.body;
    const users = readDB(DB_FILE);

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "User already exists!" });
    }

    users.push({ email, password, firstName, lastName, attributes });
    writeDB(DB_FILE, users);
    res.status(200).json({ message: "Registration saved!" });
});

// --- 2. 用户登录 ---
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const users = readDB(DB_FILE);
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const token = `token_${Date.now()}_${email}`;
        res.status(200).json({ token, user });
    } else {
        res.status(401).json({ message: "Invalid credentials!" });
    }
});

// --- 3. 获取当前用户信息 ---
app.get('/api/user/me', (req, res) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "No token" });
    
    const email = token.split('_')[2];
    const users = readDB(DB_FILE);
    const user = users.find(u => u.email === email);
    
    if (user) res.json(user);
    else res.status(404).json({ message: "User not found" });
});

// --- 4. ABE 加密文件上传 ---
app.post('/api/upload', (req, res) => {
    const { fileName, ciphertext, policy, ownerEmail } = req.body;
    const allFiles = readDB(FILES_DB);

    allFiles.push({
        fileId: `file_${Date.now()}`,
        fileName,
        ciphertext,
        policy,
        owner: ownerEmail,
        uploadDate: new Date().toLocaleString()
    });

    writeDB(FILES_DB, allFiles);
    res.status(200).json({ message: "Encrypted file stored successfully!" });
});

// --- 5. 获取所有加密文件列表 ---
app.get('/api/files', (req, res) => {
    res.json(readDB(FILES_DB));
});

app.listen(PORT, () => {
    console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
# ABE Secure Storage

A secure file-sharing system leveraging **Attribute-Based Encryption (ABE)** to provide fine-grained access control and high-level data privacy.

## 🌟 Overview

**ABE Secure Storage** is a modern web application designed for secure data management. By utilizing Attribute-Based Encryption, the system ensures that only users who possess the required set of attributes can decrypt and access specific files. This project provides a complete dashboard for uploading, managing, and analyzing secured files.

## 🚀 Tech Stack

- **Frontend Build Tool**: [Vite](https://vitejs.dev/)
- **Reactive Logic**: [Alpine.js](https://alpinejs.dev/) (Lightweight state management)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) (Utility-first CSS)
- **Backend Environment**: [Node.js](https://nodejs.org/) (Express.js)
- **Key Dependencies**:
  - `express`: Minimalist web framework for the API layer.
  - `cors`: Middleware to enable Cross-Origin Resource Sharing.

## 📂 Project Structure

```text
├── admin.html          # Administrative control panel
├── analytica.html       # Data analytics and visualization
├── explorer.html        # Secure file browser
├── index.html           # Main user dashboard
├── layout.html          # Base layout template
├── signin.html          # User authentication (Login)
├── signup.html          # User registration
├── welcome.html         # Landing / Introduction page
├── src/
│   ├── main.js          # Core frontend application logic
│   ├── style.css        # Global styles and Tailwind imports
│   └── counter.js       # Component logic examples
├── image/               # Static visual assets
└── public/              # Public static assets (Icons, Favicon)
```

## ✨ Key Features

- **Attribute-Based Encryption**: Secure files with complex access policies based on user attributes.
- **Fine-Grained Access Control**: Define who can see what using flexible attribute logic.
- **Modern Dashboard**: A clean, responsive UI for managing file uploads and downloads.
- **User Authentication**: Secure session management using tokens and localStorage.
- **Analytics**: Built-in views for monitoring storage usage and data patterns.

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Development Notes

- **API Configuration**: The frontend expects a backend service running at `http://localhost:8080/abe/`.
- **State Management**: Reactive components are handled via Alpine.js (e.g., `uploadPanel()`, `userAttributes`).
- **Styling**: TailwindCSS is used for all UI components. Modifications should be made via utility classes or `src/style.css`.

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

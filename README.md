File Sharing (Frontend)

Description

This project is the frontend part of a simple file sharing system.

It allows users to upload and access files with basic access control based on user attributes.

Users can register, log in, upload files, and download files if they have permission.

There is also an admin page to manage users and assign attributes.

Note: This repository only contains the frontend. A backend server is required.


Features

User registration and login

Upload files with access policies

Download shared files

Admin page for managing users and attributes

Simple analytics page


Tech Stack

HTML, CSS, JavaScript

Vite

Express (for development)


Project Structure

File-sharing/

│── index.html

│── signin.html

│── signup.html

│── admin.html

│── analytica.html

│── package.json

│── vite.config.js


How to Run

 Clone the repo
 
 Install dependencies
 
 Start the project


Backend Requirement

This frontend connects to a backend service running at:
 http://localhost:8080/abe
Make sure the backend is running before using the system.

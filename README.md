# CipherToken

CipherToken is a simple web tool that decodes JSON Web Tokens (JWT) and displays the token's header and payload in a readable format.  
The project was built to better understand how JWT works internally and how client–server communication happens in a full-stack application.

The application consists of a small Express API that handles decoding and a lightweight frontend interface where users can paste a token and view the decoded result.

---

## Features

- Decode JWT tokens and inspect their **header** and **payload**
- Clean and minimal interface for entering tokens
- Formatted JSON output for better readability
- Handles invalid or malformed tokens gracefully
- Simple REST API for token decoding

---

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript
- Axios

Backend:
- Node.js
- Express.js
- jsonwebtoken

---

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/ciphertoken.git
cd ciphertoken

npm install

node server.js
 
The application will run on: http://localhost:3000
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portfolio_db"
});

const createProjectsTable = `
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    tech JSON,
    demo_url VARCHAR(500),
    github_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createContactsTable = `
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

db.connect((err) => {
    if (err) {
        console.log("Database connection error:", err);
    } else {
        console.log("Database berhasil terhubung");
        db.query(createProjectsTable, (err1) => {
            if (err1) console.log("Error creating projects table:", err1);
        });
        db.query(createContactsTable, (err2) => {
            if (err2) console.log("Error creating contacts table:", err2);
        });
    }
});

module.exports = db;


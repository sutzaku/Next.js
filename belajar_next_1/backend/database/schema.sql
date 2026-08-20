-- SQL Script untuk Database Portfolio RPL (Pertemuan 5 & 6)

CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Tabel Projects
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

-- Tabel Contacts (Messages)
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Data Sampel Awal Projects
INSERT INTO projects (title, category, description, tech, demo_url, github_url) VALUES 
('E-Commerce Web Application', 'Web Dev', 'Platform e-commerce lengkap dengan Next.js, Express, dan MySQL.', '["Next.js", "React", "Tailwind CSS", "Express.js", "MySQL"]', '#', '#');

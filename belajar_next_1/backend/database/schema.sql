-- SQL Script untuk Database Portfolio RPL (Pertemuan 5, 6, & 7)

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

-- Tabel Skill Groups
CREATE TABLE IF NOT EXISTS skill_groups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    icon VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Skills
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    skill_group_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    level VARCHAR(50) NOT NULL,
    percentage INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (skill_group_id) REFERENCES skill_groups(id) ON DELETE CASCADE
);

-- Tabel Certificates
CREATE TABLE IF NOT EXISTS certificates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    issuer VARCHAR(255) NOT NULL,
    issue_date VARCHAR(100) NOT NULL,
    credential_url VARCHAR(500),
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    content TEXT NOT NULL,
    avatar VARCHAR(500),
    rating INT DEFAULT 5,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Data Sampel Projects
INSERT INTO projects (title, category, description, tech, demo_url, github_url) VALUES 
('E-Commerce Web Application', 'Web Dev', 'Platform e-commerce lengkap dengan Next.js, Express, dan MySQL.', '["Next.js", "React", "Tailwind CSS", "Express.js", "MySQL"]', '#', '#');

-- Data Sampel Skill Groups
INSERT INTO skill_groups (id, title, icon) VALUES
(1, 'Frontend Development', 'Code'),
(2, 'Backend Development', 'Server'),
(3, 'Tools & Others', 'Wrench');

-- Data Sampel Skills
INSERT INTO skills (skill_group_id, name, level, percentage) VALUES
(1, 'React / Next.js', 'Advanced', 90),
(1, 'TypeScript', 'Intermediate', 80),
(1, 'Tailwind CSS', 'Advanced', 88),
(2, 'Node.js / Express', 'Advanced', 85),
(2, 'MySQL / Relational DB', 'Intermediate', 78),
(3, 'Git / GitHub', 'Advanced', 90),
(3, 'Docker', 'Basic', 60);

-- Data Sampel Certificates
INSERT INTO certificates (title, issuer, issue_date, credential_url, image) VALUES
('Fullstack Web Developer', 'Dicoding Indonesia', '2024', 'https://example.com/cert/1', '/certificates/fullstack.jpg'),
('Responsive Web Design', 'freeCodeCamp', '2023', 'https://example.com/cert/2', '/certificates/responsive.jpg');

-- Data Sampel Testimonials
INSERT INTO testimonials (name, role, company, content, avatar, rating) VALUES
('Budi Santoso', 'Project Manager', 'TechCorp', 'Kerja sama yang luar biasa! Hasil pengembangan sangat rapi dan sesuai deadline.', '/avatars/budi.jpg', 5),
('Siti Rahma', 'Lead Designer', 'Creative Studio', 'Sangat komunikatif dan dapat mengimplementasikan desain UI/UX dengan presisi tinggi.', '/avatars/siti.jpg', 5);

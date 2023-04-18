DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
    dept_name VARCHAR(30) NOT NULL,
    id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    job_title VARCHAR(30),
    id INT NOT NULL,
    dept_id INT NOT NULL,
    salary DECIMAL(5,2) NOT NULL,
    PRIMARY KEY(id) 
);

CREATE TABLE employees (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    -- dept_id INT NOT NULL,
    -- salary DECIMAL(7,2) NOT NULL,
    managers_id INT,
    PRIMARY KEY(id)
);

-- seeds
INSERT INTO departments (dept_name, id)
VALUES ('Marketing', 001),
       ('Human Resources', 002),
       ('Development', 003);

INSERT INTO roles (job_title, id, dept_id, salary)
VALUES ('Front Desk', 001, 002, 45000),
       ('Software Engineer', 002, 003, 80000);

INSERT INTO employees (id, first_name, last_name, role_id, managers_id)
VALUES (001, 'Jackson', 'Rose', 003, 101);
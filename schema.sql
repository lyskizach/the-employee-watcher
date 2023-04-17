DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

-- must include department names and department ids
CREATE TABLE departments (
    dept_name VARCHAR(30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id)
);

-- must include job title, role id, the department that role belongs to, and the salary for that role
CREATE TABLE roles (
    job_title VARCHAR(30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    dept_id INT NOT NULL,
    salary INT NOT NULL,
    PRIMARY KEY(id) 
);

-- must include employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    dept_id INT NOT NULL,
    salary INT NOT NULL,
    managers_id INT NOT NULL,
    PRIMARY KEY(id)
);
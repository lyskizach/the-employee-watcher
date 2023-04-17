INSERT INTO departments (dept_name, id)
VALUES ('Marketing', 001),
       ('Human Resources', 002),
       ('Development', 003);

INSERT INTO roles (job_title, id, dept_id, salary)
VALUES ('Front Desk', 001, 002, 45000),
       ('Software Engineer', 002, 003, 80000);

INSERT INTO employees (id, first_name, last_name, role_id, managers_id)
VALUES (001, 'Jackson', 'Rose', 003, 101);
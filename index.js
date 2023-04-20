const inquirer = require('inquirer');
const mysql = require('mysql2');
const res = require('express/lib/response');

// MAKE SURE PASSWORD ISNT HERE BEFORE PUSHING
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'company_db'
    },
    console.log('Connected to the company_db database')
);

db.connect((err) => {
    if(err) {
        console.log(err);
    };
});

function prompt() {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ]
    })
    .then(function(response) {
        switch(response.action) {
            case 'View all departments':
                viewDept();
                break;
            case 'View all roles':
                viewRole();
                break;
            case 'View all employees':
                viewEmp();
                break;
            case 'Add a department':
                addDept();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmp();
                break;
            case 'Update an employee role':
                updateEmp();
                break;
        }
    })
};

prompt();

// function to view all departments
function viewDept() {
    db.query('SELECT * FROM company_db.departments', (err, res) => {
        if(err) {
            console.log(err);
            prompt();
        } else {
            console.table(res);
            prompt();
        }
    });
};

// function to display all roles
function viewRole() {
    db.query('SELECT * FROM company_db.roles', (err, res) => {
        if(err) {
            console.log(err);
            prompt();
        } else {
            console.table(res);
            prompt();
        }
    });
};

// function to view all employees
function viewEmp() {
    db.query('SELECT * FROM company_db.employees', (err, res) => {
        if(err) {
            console.log(err);
            prompt();
        } else {
            console.table(res);
            prompt();
        }
    });
};

// function to add department
function addDept() {
    inquirer
    .prompt([
        {
        name: 'new_dept',
        type: 'input',
        message: 'What is the name of the department?'
    }, {
        name: 'new_dept_id',
        type: 'input',
        message: 'What is the ID of the new department?'
    }
    ])
    .then(function(response) {
        db.query(`INSERT INTO departments(dept_name, id) VALUE(?, ?)`, [response.new_dept, response.new_dept_id], (err, res) => {
            if(err) {
                console.log(err);
                prompt();
            }
            else {
                // console.log("Successfully added new department!")
                console.table(res);
                prompt();
            };
        });
    });
};

// function to add role
function addRole() {
    inquirer
    .prompt([
        {
        name: 'new_job_title',
        type: 'input',
        message: 'What is the name of the new job?'
    }, {
        name: 'new_job_id',
        type: 'input',
        message: 'What is the ID for this job?'
    }, {
        name: 'exisitng_dept_id',
        type: 'input',
        message: 'What is the ID of the department this job belongs to?'
    }, {
        name: 'new_salary',
        type: 'input',
        message: 'What is the salary for this job?'
    }
    ])
    .then(function(response) {
        db.query(`INSERT INTO roles(job_title, id, dept_id, salary) VALUE(?, ?, ?, ?)`, [response.new_job_title, response.new_job_id, response.existing_dept_id, response.new_salary], (err, res) => {
            if(err) {
                console.log(err);
                prompt();
            }
            else {
                console.table(res);
                prompt();
            };
        });
    });
};

// function to add employee
function addEmp() {
    inquirer
    .prompt([
        {
        name: 'id',
        type: 'input',
        message: 'What is the new ID for this employee?'
    }, {
        name: 'first_name',
        type: 'input',
        message: 'What is the employees first name?'
    }, {
        name: 'last_name',
        type: 'input',
        message: 'What is the employees last name?'
    }, {
        name: 'job_title',
        type: 'input',
        message: 'What is the employees role ID?'
    }, {
        name: 'managers_id',
        type: 'input',
        message: 'What is the ID of the employees referring manager?'
    }
    ])
    .then(function(response) {
        db.query(`INSERT INTO employees(id, first_name, last_name, role_id, managers_id) VALUES(?, ?, ?, ?, ?)`, [response.id, response.first_name, response.last_name, response.job_title, response.managers_id], (err, res) => {
            if(err) {
                console.log(err);
                prompt();
            }
            else {
                console.table(res);
                prompt();
            };
        });
    });
};

// function to update/change employee role
function updateEmp() {
    inquirer
    .prompt([
    {
        name: 'chosen_emp',
        type: 'input',
        message: 'Whats the employees ID that you would like to update?'
    }, {
        name: 'new_job',
        type: 'input',
        message: 'What is the new role ID of this employee?'
    }
    ])
    .then(function(response) {
        db.query(`UPDATE employees SET role_id = ? WHERE id = ?`, [response.new_job, response.chosen_emp], (err, res) => {
            if(err) {
                console.log(err);
                prompt();
            }
            else {
                console.table(res);
                prompt();
            };
        });
    });
};

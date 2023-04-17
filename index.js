const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        // use .env to login
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
            'Update an employees role'
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
function viewDept();

// function to display all roles
function viewRole();

// function to view all employees
function viewEmp();

// function to add department
function addDept();

// functiom to add role
function addRole();

// function to add employee
function addEmp();

// function to update/change employee role
function updateEmp();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
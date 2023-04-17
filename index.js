const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');

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
                updateEmpt();
                break;
        }
    })
};

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
const requirer = require("inquirer");

function getUserInput() {
inquirer.prompt([
    {
        type: 'input',
        name: '',
        message: ' Please input your GitHub username:',
    },
    {
        type: 'list',
        name: '',
        message: 'Please choose your favorite color',
        choices: [
            {
                name: 'Red',
                value: 'red'
            },
            {
                name: 'Blue',
                value: 'blue'
            }
        ]
    }



])
}
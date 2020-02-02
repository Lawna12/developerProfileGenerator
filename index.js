const requirer = require("inquirer");

function getUserInput() {
inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: ' Please input your GitHub username:',
    },
    {
        type: 'list',
        name: 'color',
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

async function main() {
    const response = await getUserInput();
    console.log(response)
}
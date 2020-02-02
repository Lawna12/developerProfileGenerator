const inquirer = require("inquirer");

const { easy } = require('./generateHTML')

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
    const { username, color } = await getUserInput();
    easy(username, color)
}

main()
const inquirer = require("inquirer");

inquirer.prompt([
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'username'
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
},
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'project'
},
{
    type: 'input',
    message: 'Please give a brief description of your project',
    name: 'description'
},
{
    type: 'input',
    message: 'What kind of license should your project have?',
    name: 'license'
},
{
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'commandinstall'
},
{
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'commandtest'
},
{
    type: 'input',
    message: 'What does the user need to know about using the repo',
    name: 'info'
}
]).then(response => {
    const content = `
# ${response.project}

## Description

${response.description}

## Table of Content

* [Installation] (#installation)

* [Usage] (#usage)

* [Contributing] (#contributing)

* [Tests] (#tests)

* [Questions] (#questions)

## Installation

To install necessary dependencies, run the following command:

```
`${commandinstall}`
```

## Usage

Before you use this repo

## License

This project is licensed under the ${response.license} license.

## Contributing

Please read the

## Tests

To run test, run the following command:

```
`${response.commandtest}`
```

## Questions

If you have any questins about the repo, you can contact me directly at ${response.email}. You can find more of my work at [${response.username}] (http://github.com/${response.username}/).
    `;

    fs.writeFile("README.md", content, err => {
        if(err) console.log(err);
        else console.log("success!");
    });
});


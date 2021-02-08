const fs = require("fs");
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
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'commandinstall',
    default: 'npm i'
},
{
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'commandtest',
    default: 'npm test'
},
{
    type: 'input',
    message: 'What does the user need to know about using the repo',
    name: 'info'
}
]).then(response => {
    if (response.license === "APACHE 2.0") {
        var license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }else if(response.license === "MIT") {
        var license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }else if(license ="GPL 3.0") {
        var license = "GPL 3.0 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
    }else if (license === "BSD 3") {
        var license = "BSD 3 [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }else {
        var license = " ";
    }
    
    const content = `
# ${response.project}

${license}

## Description

${response.description}

## Table of Content

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`bash
${response.commandinstall}
\`\`\`

## Usage

${response.info}

## License

This project is licensed under the ${response.license} license.

## Contributing

Please read the contribution.md file.

## Tests

To run test, run the following command:

\`\`\`bash
${response.commandtest}
\`\`\`

## Questions

If you have any questins about the repo, you can contact me directly at ${response.email}. You can find more of my work at [${response.username}](http://github.com/${response.username}/).
    `;

    fs.writeFile("README.md", content, err => {
        if(err) console.log(err);
        else console.log("success!");
    });
});


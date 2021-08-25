// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'Apache') {
        return `![Apache](https://img.shields.io/badge/License-Apache-blue.svg)`
    }  else if(license === 'Apache 2.0') {
        return `![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)` 
    }  else if(license === 'MIT') {
        return `![MIT](https://img.shields.io/badge/License-MIT-green.svg)`
    }   else if(license === 'Mozilla Public 2.0') {
        return `![Mozilla Public 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)` 
    }   else if(license === null) {
        return " " 
    }  
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
    //https://opensource.org/licenses/Apache-2.0
    if(license === 'Apache') {
            return 'https://opensource.org/licenses/Apache'
        }   else if(license === 'Apache 2.0') {
            return '(https://opensource.org/licenses/MPL-2.0)'  
        }
            else if(license === 'MIT') {
            return '(https://opensource.org/licenses/MIT)' 
        }
            else if(license === 'Mozilla Public 2.0') {
            return '(https://opensource.org/licenses/MPL-2.0)' 
        }   
            else if(license === null) {
            return " " 
        }  
    
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
    return `
        ${renderLicenseBadge(license)}
        ${renderLicenseLink(license)}
    `
}



function generateMarkdown(response) {
    var content = `
# ${response.title}
# ${response.codename}
# ${response.github}
# ${response.email} [Email Me]

# [Deployed Application](https://rpierr33.github.io/readme-generator/)
# ReadMeGenerator© 
# 2021 All Rights Reserved. ${response.license} 

# Table of Contents
* [Repository Description](#Repository-Description)
* [Installation Instructions](#install)
* [Usage Information](#usage)
* [Contribution Guidelines](#contrib)


# Repository Description
# [Back to Repository Description]
${response.description}

# Install Instructions
# [Back to necessary install instructions]
${response.install}

# Usage Guide
# [Back to use guide]
${response.usage}


# License
${renderLicenseSection(response.license)}
    `
    return content;
};

module.exports = generateMarkdown;

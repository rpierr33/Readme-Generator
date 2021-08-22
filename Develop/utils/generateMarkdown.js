// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`
 ;
}

module.exports = generateMarkdown;

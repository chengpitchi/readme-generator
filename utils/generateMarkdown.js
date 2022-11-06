// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'; 
      break; 
    case 'Boost Software 1.0': 
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'; 
      break; 
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'; 
      break; 
    case 'Perl':
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'; 
      break; 
    case 'Open Database':
      return '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]'; 
      break;
    case 'JavaScript':
      return '[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)]'; 
      break; 
    default:
      return ''; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)'; 
      break; 
    case 'Boost Software 1.0': 
      return '(https://www.boost.org/LICENSE_1_0.txt)'; 
      break; 
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)'; 
      break; 
    case 'Perl':
      return '(https://opensource.org/licenses/Artistic-2.0)'; 
      break; 
    case 'Open Database':
      return '(https://opendatacommons.org/licenses/odbl/)'; 
      break;
    case 'JavaScript':
      return '(https://www.javascript.com)'; 
      break;   
    default:
      return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'None':
      return ''; 
      break; 
    default:
      return `This applicaiton is covered under ${license}.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ${renderLicenseBadge(data.license) + (renderLicenseLink(data.license))}

  ## Description 
  ${data.projectDesc}
  

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [Github](#github)
  * [License](#license)
  

  ## Installation
  To install necesary dependencies, run the following command:
  
  \`\`\`
  ${data.installCmd}
  \`\`\`
  

  ## Usage
  > ${data.usage}
  

  ## Contributing
  > ${data.contribute}
  

  ## Test 
  To test the application, please follow the below:

  \`\`\`
  ${data.testCmd}
  \`\`\`

  ## Questions
  > Should you have any questions, please send email to ${data.email}. 
  

  ## Github
  > https://github.com/${data.username}
  
  
  ## License 
  > ${(data.license === 'None') ? data.license : renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

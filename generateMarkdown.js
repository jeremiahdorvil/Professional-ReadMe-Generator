// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    // return `![Github License](![GitHub](https://img.shields.io/badge/license-${license}-brightgreen))`;    
    // return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `[License](#license)`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
    
    This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#contributing)
  * ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install the necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage
  
  \`\`\`
  ${data.usage}
  \`\`\`
  ${renderLicenseSection(data.license)}
  ## Contributing
  \`\`\`
  ${data.contributing}
  \`\`\`
  ## Tests
  To run the proper tests, use the following command:
  \`\`\`
  ${data.test}
  \`\`\`
  ## Questions
  If you have any question about the repository, you can contact me at ${data.email
    }. You can find more of my work at [${data.github}](https://github.com/${data.github
    }/).
`;
}

module.exports = generateMarkdown;

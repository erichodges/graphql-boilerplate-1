const fs = require('fs')
const path = require('path')

module.exports = ({ project }) => {
  const templateName = 'graphql-boilerplate'
  replaceInFile('package.json', templateName, project)
  replaceInFile('graphcool.yml', templateName, project)
  replaceInFile('.env', templateName, project)
}

function replaceInFile(filePath, searchValue, replaceValue) {
  const contents = fs.readFileSync(path.join(__dirname, filePath), 'utf8')
  console.log(contents)
  const newContents = contents.replace(searchValue, replaceValue)
  console.log(newContents)
  fs.writeFileSync(filePath, newContents)
}
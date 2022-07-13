const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');

const pathTemplate = path.resolve(__dirname, './Templates');
const pathComponentsIndex = path.resolve(__dirname, '../src/components/index.ts');

function askQuestions() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Enter component name in PascalCase:',
    },
    {
      type: 'list',
      name: 'type',
      message: 'Choose component type:',
      choices: ['General', 'Navigation', 'Form', 'Views', 'Snowflakes'],
    },
  ];

  return inquirer.prompt(questions);
}

let componentData = {};

function createDirectory(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, {recursive: true});
  }
  console.log('successfull create Directory');
}

function formatComponentData(answer) {
  componentData = {
    name: answer.name,
    type: answer.type,
    path: `./src/components/${answer.type}/${answer.name}`,
  };

  createDirectory(componentData.path);
}

function renderTemplate(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/BaseTemplate/g, componentData.name);
  content = content.replace(/templates/g, componentData.type);

  fs.writeFileSync(filePath, content);
}

function formatTemplate() {
  const files = fs.readdirSync(pathTemplate);

  files.forEach((filename) => {
    const filePath = path.resolve(pathTemplate, filename);
    const newFilepath = path.resolve(componentData.path, filename.replace('BaseTemplate', componentData.name));

    // copy templates
    fs.copySync(filePath, newFilepath);

    // render template
    renderTemplate(newFilepath);
  });
}

function updateComponentsIndex() {
  // fs.writeFileSync(pathComponentsIndex, 'Hey there!');
  let templateString = `export {default as ${componentData.name}} from './${componentData.type}/${componentData.name}';`;
  let content = fs.readFileSync(pathComponentsIndex, 'utf8');
  content = content + templateString;

  fs.writeFileSync(pathComponentsIndex, content);
}

function run() {
  Promise.resolve()
    .then(askQuestions)
    .then(formatComponentData)
    .then(formatTemplate)
    .then(updateComponentsIndex)
    .then(() => {
      console.log(`Your component already generated ${componentData.path}`);
    });
}

run();

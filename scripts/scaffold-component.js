import fs from 'fs-extra';
import inquirer from 'inquirer';
import path from 'path';

let componentNameKebabCase;

const __dirname = path.resolve(path.dirname(''));
const paths = {
  templates: path.resolve(__dirname, 'components/Templates'),
};
const PLACEHOLDER = 'BaseTemplate';

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
}

function formatComponentData(answer) {
  componentData = {
    name: answer.name,
    path: `./components/${answer.type}/${answer.name}`,
  };

  createDirectory(componentData.path);
}

function renderTemplate(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // content = ejs.render(content, componentData);
  content = content.replace(/BaseTemplate/g, componentData.name);
  fs.writeFileSync(filePath, content);
}

function formatTemplate() {
  const files = fs.readdirSync(paths.templates);

  files.forEach((filename) => {
    const filePath = path.resolve(paths.templates, filename);
    const newFilepath = path.resolve(componentData.path, filename.replace(PLACEHOLDER, componentData.name));

    // copy templates
    fs.copySync(filePath, newFilepath);

    // render template
    renderTemplate(newFilepath);
  });
}

function run() {
  Promise.resolve()
    .then(askQuestions)
    .then(formatComponentData)
    .then(formatTemplate)
    .then(() => {
      console.log(`Your component already generated ${componentData}`);
    });
}

run();

import fs from 'fs';
import path from 'path';

export default function PlopConfig(plop) {
  const rootDir = path.join('../');
  const appDir = '../app';
  const componentsDir = path.join(rootDir, '_components');

  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: function () {
      const indexFilePath = path.join(componentsDir, 'index.ts');

      const actions = [
        {
          type: 'add',
          path: path.join(componentsDir, '{{pascalCase name}}/{{pascalCase name}}.tsx'),
          templateFile: path.join('templates/component/component.tsx.hbs'),
        },
        {
          type: 'add',
          path: path.join(
            componentsDir,
            '{{pascalCase name}}/{{pascalCase name}}.module.scss',
          ),
          templateFile: path.join('templates/component/module.scss.hbs'),
        },
        {
          type: 'add',
          path: path.join(
            componentsDir,
            '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          ),
          templateFile: path.join('templates/component/test.tsx.hbs'),
        },
        {
          type: 'add',
          path: path.join(componentsDir, '{{pascalCase name}}/index.ts'),
          templateFile: path.join('templates/component/index.ts.hbs'),
        },
        {
          type: 'add',
          path: path.join(
            componentsDir,
            '{{pascalCase name}}/{{pascalCase name}}.types.tsx',
          ),
          templateFile: path.join('templates/component/types.tsx.hbs'),
        },
        {
          type: 'add',
          path: path.join(
            componentsDir,
            '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          ),
          templateFile: path.join('templates/component/stories.tsx.hbs'),
        },
      ];
      if (fs.existsSync('_components/index.ts')) {
        actions.push({
          type: 'append',
          path: indexFilePath,
          template:
            "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
        });
      } else {
        console.log('index file does not exist');
        actions.push({
          type: 'add',
          path: indexFilePath,
          template:
            "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
        });
      }

      return actions;
    },
  });
  plop.setGenerator('page', {
    description: 'Generate a new Next.js page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the page name?',
      },
      {
        type: 'input',
        name: 'parent',
        message:
          'Is this a sub-page? If yes, provide the parent page name. Otherwise, leave empty.',
      },
      {
        type: 'confirm',
        name: 'isHomepage',
        message: 'Is this the homepage?',
        default: false,
      },
    ],
    actions: function (data) {
      const { name, parent, isHomepage } = data;

      const dirName = isHomepage
        ? appDir
        : path.join(appDir, parent?.replaceAll(' ', '-'), name.replaceAll(' ', '-'));

      const pagePath = path.join(dirName, 'page.tsx');
      const testPagePath = path.join(dirName, 'page.test.tsx');

      const actions = [
        {
          type: 'add',
          path: pagePath,
          templateFile: path.join('templates/page/page.tsx.hbs'),
        },
        {
          type: 'add',
          path: testPagePath,
          templateFile: path.join('templates/page/page.test.tsx.hbs'),
        },
      ];

      return actions;
    },
  });
}

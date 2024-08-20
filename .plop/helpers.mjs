import fs from 'fs';
import path from 'path';

const messagesDir = 'i18n/messages';

// segmentName: string type.
export function toPascalCase(segmentName) {
  let segmentNameArray = segmentName.split(' ');
  segmentNameArray = segmentNameArray.map(
    (value) => value.charAt(0).toUpperCase() + value.slice(1, value.length),
  );
  const pascalName = segmentNameArray.join('');
  return pascalName;
}

// name: string => also using for title text
// type: 'pages' | 'components' for now
export function updateLocaleI18n({ name, type, titleText }) {
  fs.readdir(messagesDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      if (path.extname(file) === '.json') {
        const filePath = path.join(messagesDir, file);

        fs.readFile(filePath, (_, dataRaw) => {
          const data = JSON.parse(dataRaw);

          data[type][toPascalCase(name)] = {
            title: toPascalCase(titleText || name),
          };

          fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
            if (err) {
              console.error('Error writing file:', err);
            }
          });
        });
      }
    });
  });
}

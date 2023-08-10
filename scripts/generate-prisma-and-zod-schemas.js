const { exec } = require('child_process');
const path = require('path');
const glob = require('glob');
const fs = require('fs');

// Chemin initial
const initialPath = process.cwd();

// Chemin vers le dossier prisma
const prismaPath = path.join(initialPath, './apps/vet-assist-api/src/app/core/prisma');
const generatedZodSchemaPath = path.join(initialPath, './libs/zod-types-from-prisma/src/lib/schemas');

console.log('prismaPath', prismaPath);
console.log('generatedZodSchemaPath', generatedZodSchemaPath);

exec(`cd ${prismaPath} && npx prisma generate`, (err, stdout, stderr) => {
  if (err) {
    console.error();
    console.error("Error:");
    console.error(err);
    console.error();
  }
  console.log(stdout);
  console.error(stderr);
});

// // Utilisation de glob pour obtenir la liste des fichiers
// const files = glob.sync(`${generatedZodSchemaPath}{/**/*.ts,/**/*.tsx}`);

// // Affichage des noms de fichiers
// console.log('Liste des fichiers :');
// const filesMapped = files
//   .filter(file => !file.includes('index.ts'))
//   .map(file => path.normalize(file).replace(generatedZodSchemaPath + '\\', ''))
//   .map(file => file.split('\\'))
//   .reduce((acc, file) => {
//     const key = file.length === 1 ? '' : file[0];
//     const value = file.length === 1 ? file[0] : file[1];
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(value);
//     return acc;
//   }, {});

//   Object.keys(filesMapped)
//     .forEach(key => {
//       const associatedFiles = filesMapped[key]
//         .map(file => file.replace('.ts', ''))
//         .map(file => `export * from './${file}';`)
//         .join('\n');
//       fs.writeFileSync(`${generatedZodSchemaPath}${key ? '/' + key + '/' : ''}/index.ts`, associatedFiles);
//     });


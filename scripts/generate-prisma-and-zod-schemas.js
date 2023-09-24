const { exec } = require('child_process');
const path = require('path');

// Chemin initial
const initialPath = process.cwd();

// Chemin vers le dossier prisma
const prospectionPrismaPath = path.join(initialPath, './database/prisma/prospection');

console.log('prismaPath', prospectionPrismaPath);

exec(`cd ${prospectionPrismaPath} && npx prisma generate`, (err, stdout, stderr) => {
  if (err) {
    console.error();
    console.error("Error:");
    console.error(err);
    console.error();
  }
  console.log(stdout);
  console.error(stderr);
});

exec(`cd ${initialPath}`, (err, stdout, stderr) => {
  if (err) {
    console.error();
    console.error("Error:");
    console.error(err);
    console.error();
  }
  console.log(stdout);
  console.error(stderr);
});
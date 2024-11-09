const fs = require('fs');
const path = require('path');

const distPackageJsonPath = path.join(__dirname, '../lib/package.json');

const distPackageJson = JSON.parse(
  fs.readFileSync(distPackageJsonPath, 'utf8'),
);

delete distPackageJson.jest;
delete distPackageJson.scripts;
delete distPackageJson.devDependencies;

distPackageJson.main = './src/components/index.js';
distPackageJson.types = './src/components/index.d.ts';

fs.writeFileSync(
  distPackageJsonPath,
  JSON.stringify(distPackageJson, null, 2),
  'utf8',
);

const fs = require('fs');
const path = require('path');

const generateBooks = require('./books');

console.log('Generating mock data...');

const data = {
  books: generateBooks()
};

writeToFile(JSON.stringify(data, null, 2));

console.log('Done generating mock data.');

function writeToFile(text) {
  const filePath = path.resolve('server', 'db.json');
  console.log('  Writing to db.json');
  fs.writeFileSync(filePath, text);
}

const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

const folderPath = './files';
const fileName = `${new Date().toISOString().replace(/:/g, '-')}.txt`;
const filePath = path.join(folderPath, fileName);
const fileContent = new Date().toISOString();

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`File ${fileName} has been created with content: ${fileContent}`);
});
app.listen(port,()=> {
    console.log(`Server is running on port ${port}`)
})
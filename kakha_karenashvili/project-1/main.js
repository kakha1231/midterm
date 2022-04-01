const fs = require("fs");
const filename = args[2];
fs.readFile(`./${filename}`, "utf-8", (error, data) => {
    newname = `./${filename}`+".out"
  fs.writeFile(newname, data.toLocaleUpperCase(), (err) => {
      if (!err) {
        console.log("Done");}
    }
    );
});
import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

let userInput = inquirer
  .prompt([{ name: "URL", message: "Please enter url: " }])
  .then((answers) => createQrImage(answers.URL));

function createQrImage(url) {
  var qr_svg = qr.image(url, { type: "png" });
  qr_svg.pipe(fs.createWriteStream(url + ".png"));

  fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved.");
  });
}

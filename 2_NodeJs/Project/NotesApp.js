const fs = require("fs");
const path = require("path");
const readline = require("readline-sync");

console.log("List");
console.log(
  "1. New\n2. Write\n3. Update\n4. Rename\n5. Delete\n6. Read file\n7. View All"
);

let choice = Number(readline.question("Enter Your Choice : "));
//Creating a new file
if (choice == 1) {
  const fileName = String(
    readline.question("Enter file name to be created : ")
  );
  try {
    if (!fs.existsSync("test")) {
      fs.mkdirSync("test");
    }
  } catch (err) {
    console.error(err);
  }
  const a = `test/${fileName}`;
  fs.open(a, "w+", function (err, f) {
    if (err) console.log(err);
    if (f) console.log("File created");
  });

  // write a file
} else if (choice == 2) {
  const fileName = String(
    readline.question("Enter file name to be written : ")
  );
  const a = `test/${fileName}`;
  const text = String(readline.question("Enter text : "));
  fs.writeFile(a, text, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written");
    }
  });

  //update the text file
} else if (choice == 3) {
  const fileName = String(
    readline.question("Enter file name to be written : ")
  );
  const a = `test/${fileName}`;
  const content = "\n" + String(readline.question("Enter text : "));

  fs.appendFile(a, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File appended");
    }
  });

  //file rename
} else if (choice == 4) {
  const fileName = String(
    readline.question("Enter file name to be renamed : ")
  );
  const newName = String(readline.question("Enter new file : "));
  const a = `test/${fileName}`;
  const b = `test/${newName}`;
  fs.rename(a, b, (err) => {
    if (err) {
      console.log("Error renaming file...");
      return;
    } else {
      console.log("File is renamed...");
    }
  });

  // Delete file
} else if (choice == 5) {
  const fileName = String(
    readline.question("Enter file name to be written : ")
  );
  const a = `test/${fileName}`;
  fs.unlinkSync(a);

  // read file
} else if (choice == 6) {
  const fileName = String(
    readline.question("Enter file name to be written : ")
  );
  const a = `test/${fileName}`;
  fs.readFile(a, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });

  // view all files
} else if (choice == 7) {
  const a = `test`;
  fs.readdir(a, (err, files) => {
    if (err) {
      console.log("Error...");
      return;
    } else {
      files.forEach((fileName) => {
        console.log(fileName);
      });
    }
  });
} else {
  console.log("Invalid Choice");
}

const path = require("path");
const fs = require("fs");

// global level
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// obtain as an obj
// console.log(path.parse(__filename));
// join
// console.log(path.join(__dirname, "test", "hello.html"));

// utf8 or tostring()
// console.log("one");

// * blocking code syncronos code
// const data = fs.readFileSync(path.join(__dirname, "hello.txt"), "utf8");
// console.log(data);

//async in nature
//callback
//non blocking code async in nature
// fs.readFile(path.join(__dirname, "hello3.txt"), "utf8", (err, data) => {
//   if (err) {
//     console.log("Error ", err);
//     return;
//   }
//   console.log(data);
// });
// console.log("two");

// write a file or creating new file
// it also has syncronos formate blocking code
// fs.writeFile(path.join(__dirname, "hello3.txt"), "hellloooo", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

// create folder and rename

// fs.mkdir(path.join(__dirname, "test1"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   fs.rename(
//     path.join(__dirname, "hello3.txt"),
//     path.join(__dirname, "test1", "hello4.txt"),
//     (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("file created");
//       }
//     }
//   );
// });

// const url = new URL("https://masaischool.com?q=1&q=2&q=3");
// console.log(url.searchParams);
// for ([key, value] of url.searchParams) {
//   console.log(key, value);
// }
// url.searchParams.append("page", "3");
// console.log(url.searchParams);
// console.log(url.toString());

// console.log(process.platform);
// console.log(process.cpuUsage());
// console.log(process.versions);

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("sendmsg", (...arg) => {
  if (arg === 5) {
    console.log(arg);
  }
  console.log("count", arg);
});
let i = 0;
setInterval(() => {
  emitter.emit("sendmsg", i++);
  if (i === 10) {
    process.exit();
  }
}, 1000);

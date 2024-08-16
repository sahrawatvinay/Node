const EventEmitter = require("events");
const eventemitter = new EventEmitter();

// attaching lister
eventemitter.on("tutorial", (msg) => {
  console.log("tutorial even has occured." + msg);
});

//emit tutorial event
eventemitter.emit("tutorial", "ggwp");

//extending event emitter class
class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  getName() {
    return this._name;
  }
}

//when we use emit they will get created synchronously
const Ram = new Person("Ram");
Ram.on("create", () => {
  console.log("Ram created " + Ram.getName());
});
Ram.emit("create");

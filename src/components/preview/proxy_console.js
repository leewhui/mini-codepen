const realLog = window.console.log;
const realError = window.console.error;
const realWarning = window.console.warn;

window.console.log = function (arguments) {
  const message = {
    consoleType: "log",
    messageType: typeof arguments,
    message: arguments,
  };
  window.parent.postMessage(message);
};

window.console.error = function (arguments) {
  console.dir(arguments);
};

window.console.error = function (arguments) {
  console.dir(arguments);
};

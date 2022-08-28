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

window.addEventListener("error", (event) => {
  const message = {
    consoleType: "error",
    messageType: "string",
    message: event.error.message,
  };
  window.parent.postMessage(message);
});

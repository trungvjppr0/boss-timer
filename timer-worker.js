let interval = null;

self.onmessage = function (e) {

  if (e.data === "start") {

    if (interval) clearInterval(interval);

    interval = setInterval(() => {

      self.postMessage({
        type: "tick",
        time: Date.now()
      });

    }, 10000);

  }

  if (e.data === "stop") {
    clearInterval(interval);
    interval = null;
  }
};

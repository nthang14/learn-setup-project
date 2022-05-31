export default {
  bind: function (el, bind) {
    let delay = 0
    let actionDelay = function (color) {
      if (bind.arg === "background") {
        el.style.backgroundColor = color;
      } else {
        el.style.color = bind.value;
      }
    };
    if (bind.modifiers['delay']) {
      delay = 0;
    }
    let mainColor = bind.value;
		let secondColor = "blue";
		let currentColor = bind.value;
    if (bind.modifiers['blink']) {
      setInterval(function () {
        currentColor === mainColor
					? (currentColor = secondColor)
          : currentColor = mainColor
        setTimeout(actionDelay(currentColor), delay);
      }, 1000)
    } else {
      setTimeout(actionDelay(currentColor), delay);
    }
  },
}
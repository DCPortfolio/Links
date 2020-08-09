export default (elem, options = {}) => {
  window.addEventListener("resize", () => {
    elem.style.height = "";
  });
  let defaults = {
    speed: 300,
    easeFunc: "ease"
  };
  let actual = Object.assign({}, defaults, options);
  elem.style.transition = `height ${actual.speed}ms ${actual.easeFunc}`;
  return {
    up: () => {
      elem.style.height = `${elem.scrollHeight}px`;
      elem.style.height = "0px";
    },
    down: () => {
      elem.style.height = `${elem.scrollHeight}px`;
    }
  };
};

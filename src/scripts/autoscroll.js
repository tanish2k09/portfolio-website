const ScrollContainer = document.getElementById("scroll_work_container");

window.addEventListener("load", () => {
  window.setInterval(() => {
    if (ScrollContainer.scrollLeft !== ScrollContainer.scrollWidth) {
      ScrollContainer.scrollTo(ScrollContainer.scrollLeft + 1, 0);
    }
  }, 15);
});

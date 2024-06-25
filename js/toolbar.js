const targetEl = document.querySelector(".toolbar_target");

const loadSnippet = number => {
  fetch("../src/toolbar.html")
    .then(res => {
      if (res.ok){
        return res.text();
      }
      })
      .then(htmlSnippet => {
        targetEl.innerHTML = htmlSnippet;

      })
}

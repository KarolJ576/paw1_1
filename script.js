(function () {
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");

  button.addEventListener("click", function () {
    const numbers = [];
    for (let i = 0; i <= 9; i++) {
      numbers.push(i);
    }
    content.textContent = numbers.join(",");
  });
})();

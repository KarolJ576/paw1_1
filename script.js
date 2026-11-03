(function () {
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");
  const phoneInput = document.getElementById("ex2_text");
  const phoneContent = document.getElementById("ex2_content");

  button.addEventListener("click", function () {
    const numbers = [];
    for (let i = 0; i <= 9; i++) {
      numbers.push(i);
    }
    content.textContent = numbers.join(",");
  });

  phoneInput.addEventListener("input", function () {
    const value = phoneInput.value;
    const messages = [];

    if (/[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]/.test(value)) {
      messages.push("Numer nie może zawierać liter");
    }

    if (/[^a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż0-9]/.test(value)) {
      messages.push("Numer nie może zawierać znaków specjalnych");
    }

    if (value.length !== 9) {
      messages.push("Długość numeru musi być równa 9");
    }

    if (messages.length === 0) {
      phoneContent.textContent = "Numer telefonu jest poprawny";
    } else {
      phoneContent.innerHTML = messages.join("<br>");
    }
  });
})();

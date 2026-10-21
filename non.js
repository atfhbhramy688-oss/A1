document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("gameSearch");
  const status = document.getElementById("searchStatus");
  const cards = document.querySelectorAll(".game");

  if (!search) {
    console.error("کادر جست‌وجو پیدا نشد!");
    return;
  }

  search.addEventListener("input", function () {
    const query = search.value.trim().toLowerCase();
    let count = 0;

    cards.forEach(function (card) {
      const matches = card.textContent
        .toLowerCase()
        .includes(query);

      card.hidden = !matches;

      if (matches) count++;
    });

    if (status) {
      status.textContent = count === 0
        ? "بازی‌ای پیدا نشد."
        : count + " بازی پیدا شد.";
    }
  });
});     
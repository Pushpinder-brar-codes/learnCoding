let cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((item) => {
  item.addEventListener("click", (event) => {
    let selected_item = event.target.id;
    localStorage.setItem("clickedItem", selected_item);
    location.href = "/resources.html";
  });
});

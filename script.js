let cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((item) => {
  item.addEventListener("click", (event) => {
    let selected_item = event.target.id;
    localStorage.setItem("clickedItem", selected_item);
    location.href = "/resources.html";
  });
});

let body = document.querySelector(".body");
let tribute_div = document.querySelector(".tribute");
let tribute_img = document.querySelector(".tribute_img");
// body.addEventListener('load',(e)=>{
//    location.href = "/tribute.html";
// })

setTimeout(() => {
  tribute_img.classList.add("show_tribute");
  console.log("show noww");
}, 1000);

setTimeout(() => {
  tribute_img.classList.add("hide_tribute");
  console.log("show noww");
}, 5000);

setTimeout(() => {
  tribute_div.classList.add("hide_tribute");
  console.log("show noww");
  body.classList.remove("overflow_hidden");
}, 7000);

setTimeout(() => {
  tribute_div.classList.add("display_none");
}, 9000);

import {
  doc,
  getDoc,
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9GYUSL7ydFHakFsgSdTwg9LVL0nm3aBE",
  authDomain: "learn-coding-ef9f8.firebaseapp.com",
  projectId: "learn-coding-ef9f8",
  storageBucket: "learn-coding-ef9f8.appspot.com",
  messagingSenderId: "291044682946",
  appId: "1:291044682946:web:c2107a649ebc270b685f5b",
};

const app = initializeApp(firebaseConfig);
let item = localStorage.getItem("clickedItem");

const db = getFirestore();
const section = document.getElementById("section");
const section2 = document.getElementById("section2");
const header_logo = document.getElementById("header_logo");
header_logo.src = "./assets/" + item + ".png";

document.getElementById("header_name").innerText = item.toUpperCase();
const header_desc = document.getElementById("header_desc");

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, item));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    let data = doc.data();
    if (data.name == "Best YouTube Videos") {
      // header_desc.innerText = data.desc;
      section.innerHTML += `
            <p class="section_heading">
            ${data.name}
            <p />
            <div class="line"></div>
            <div class="mi-slider">
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                    ${data.youtube.map((element) => {
                      return `<div class="swiper-slide"> 
                                <a class="slide_link slide" href="${
                                  element.url
                                }">
                                    <img src="https://img.youtube.com/vi/${
                                      element.url.split("be/")[1]
                                    }/hqdefault.jpg" alt="logo">
                                    <div class="line card_line"></div>
                                    <p>
                                    ${element.name}
                                    </p>
                                    <p class="slide_source_name"><span>By</span> ${
                                      element.cname
                                    }</p>
                                </a>       
                              </div>
                          `;
                    })}
                </div>
                 <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
        </div>
    `;
    } else if (data.name == "Social Media Accounts to follow") {
      section2.innerHTML += `
            <p class="section_heading">
            ${data.name}
            <p />
            <div class="line"></div>
            <div class="mi-slider">
                <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                ${data.twitter.map((element) => {
                  return `<div class="swiper-slide"> 
                          <a class="slide_link slide" href="${element.url}">
                            <img src=${element.img} alt="logo">
                            <div class="line card_line"></div>
                            <p style=margin-bottom:1em;font-weight:600>
                            ${element.name}
                            </p>
                            </a>
                          </div>
                          `;
                })}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    `;
    }
  });
};

getData().then(() => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

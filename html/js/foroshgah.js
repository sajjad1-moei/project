const $ = document;
function ColorBody(color) {
  $.body.className = color;
}
function ScroolDivWidth() {
  let sc = window.scrollY;
  if (sc > 0) {
    $.querySelector("header").className = "scrool";
  } else {
    $.querySelector("header").className = "";
  }
}
window.addEventListener("scroll", ScroolDivWidth);
//* Scrrol Div
const DivScroolTo = $.getElementById("Scrool-To");
function ScroolTo() {
  let sc = window.scrollY;
  if (sc > 500) {
    if (window.innerWidth < 767) {
      DivScroolTo.style.display = "none";
    } else {
      DivScroolTo.style.display = "block";
    }
  } else {
    DivScroolTo.style.display = "none";
  }
}

window.addEventListener("resize", ScroolTo);

// Scrool-To

DivScroolTo.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
window.addEventListener("scroll", ScroolTo);

//* Icon Navbar
const btnPrevSearchButtom = $.getElementById("prevMenuButtom");
btnPrevSearchButtom.addEventListener("click", () => {
  $.querySelector("header").style.display = "block";
  $.querySelector("main").style.display = "block";
  DivSerachMenuButtom.style.display = "none";
  $.querySelector(".DivBasketShop").classList.remove("top-0");
  window.scrollTo(0, 0);
});

const DivNavicon = $.getElementsByClassName("navicon");
const BtnCloseDivNavbar = $.getElementById("close-Basket-Div");
const DivBasket = $.getElementsByClassName("Basket")[0];
DivNavicon[0].addEventListener("click", function () {
  DivBasket.style.display = "block";
  $.getElementById("Div-Modal-City").style.display = "none";
  $.querySelector(".DivBasketShop").style.display = "none";
  ColorBody("h-max show-modals");
});
function closeDivNavbar() {
  ColorBody("h-max");
  const a = $.getElementsByClassName("Basket")[0];
  a.style.display = "none";
  $.querySelectorAll(".inputSearch")[1].style.display = "none";
  $.querySelectorAll(".search-icon")[1].style.display = "block";
  $.getElementById("a").classList.add("my-auto");
}
BtnCloseDivNavbar.addEventListener("click", closeDivNavbar);
window.addEventListener("resize", function () {
  let InnerWidthBody = this.window.innerWidth;
  if (InnerWidthBody > 768) {
    closeDivNavbar();
    $.querySelector(".img-logo img").setAttribute("src", "./image/logo.177e5a9 (2).png");
  } else {
    $.querySelector(".img-logo img").setAttribute("src", "./image/mini-logo.5203e49 (1) (2).svg");
  }
  console.log(InnerWidthBody);
});
if (window.innerWidth > 768) {
  closeDivNavbar();
  $.querySelector(".img-logo img").setAttribute("src", "./image/logo.177e5a9 (2).png");
} else {
  $.querySelector(".img-logo img").setAttribute("src", "./image/mini-logo.5203e49 (1) (2).svg");
}
//* Div Search
const DivSerachMenuButtom = $.getElementById("DivSerach-MenuButtom");
const BtnSearchMenuSubmit = $.getElementById("Btn-Search-MenuSubmit");
BtnSearchMenuSubmit.addEventListener("click", () => {
  $.querySelector("header").style.display = "none";
  $.querySelector("main").style.display = "none";
  DivSerachMenuButtom.style.display = "block";
  $.querySelector(".DivBasketShop").classList.add("top-0");
});
const submitBtn = $.querySelectorAll(".search-icon");
const closeinputbtn = $.getElementById("close-input");
submitBtn.forEach(function (submitBtn) {
  submitBtn.addEventListener("click", function () {
    submitBtn.style.display = "none";
    $.getElementById("a").classList.remove("my-auto");
    submitBtn.nextElementSibling.style.display = "block";
  });
});
closeinputbtn.addEventListener("click", function (event) {
  event.target.parentElement.style.display = "none";
  submitBtn[0].style.display = "block";
  $.getElementById("a").classList.add("my-auto");
});

//* Div Modal

const DivModalSubmit = $.getElementById("Modal-Submit");
const BtnSubmitModal = $.querySelectorAll(".btn-Submit");
const inputSubmit = $.querySelector(".input-Submit");
const btnSubmitModal = $.querySelector("#Btn-Complate-Modal");
const btnCloseModalSubmit = $.querySelector(".close-Modal");
const AlertModalSubmit = $.getElementById("Modal-Alert_submit");
const SpanNotModalSubmit = $.getElementById("spanNotValue");
function ClearSpanModalSubmit() {
  SpanNotModalSubmit.innerHTML = "";
}
function ShowModal() {
  ClearSpanModalSubmit();
  $.getElementById("Div-Modal-City").style.display = "none";
  inputSubmit.value = "";
  DivModalSubmit.style.display = "block";
  ColorBody("h-max show-modals");
}

function typeInputModal() {
  let value = inputSubmit.value.length;
  if (value < 11) {
    SpanNotModalSubmit.innerHTML = "تلفن همراه باید 11 کاراکتر باشد";
    btnSubmitModal.className = "Btn-inComplate-Modal";
  } else {
    ClearSpanModalSubmit();
    btnSubmitModal.className = "Btn-Complate-Modal";
    btnSubmitModal.addEventListener("click", function () {
      let r = inputSubmit.value - 0;
      if (isNaN(r)) {
        SpanNotModalSubmit.innerHTML = "لطفا عدد وارد کنید";
      } else {
        if (btnSubmitModal.className === "Btn-Complate-Modal") {
          AlertModalSubmit.style.display = "block";
          Width();
          DivModalSubmit.style.display = "none";
          ColorBody("h-max");
          btnSubmitModal.className = "Btn-inComplate-Modal";
        } else {
          SpanNotModalSubmit.innerHTML = "تلفن همراه باید 11 کاراکتر باشد";
        }
      }
    });
  }
}
function CloseModal() {
  DivModalSubmit.style.display = "none";
  ColorBody("h-max");
  inputSubmit.value = "";
}
btnCloseModalSubmit.addEventListener("click", CloseModal);
BtnSubmitModal.forEach((btn) => {
  btn.addEventListener("click", ShowModal);
});
inputSubmit.addEventListener("keyup", typeInputModal);

//* Modal-Alert-Submit

const DivWidthAlertSubmit = $.getElementById("Div-Width");
function Width() {
  DivWidthAlertSubmit.setAttribute("style", "width:300px");
  let sum = 30;
  let r = setInterval(() => {
    sum--;
    DivWidthAlertSubmit.style.width = sum + "%";
    console.log(sum);
    if (sum < -4) {
      clearInterval(r);
      AlertModalSubmit.style.display = "none";
    }
  }, 80);
}

//* Modal-City
const cityBtn = $.querySelectorAll(".city-btn");
const DivSityModal = $.getElementById("Div-Modal-City");
const btnCloseModalCity = $.getElementById("btn-close-modalCity");
const BasketShopRespon = $.getElementById("BasketShopRespon");
const selectCity = $.querySelector(".selectCity");
const BtnModalCity = $.querySelector(".BtnModalCity");
const selectCityId = $.getElementById("selectCity");
const spanCity = $.querySelectorAll(".Span-City");
function ShowModalCity() {
  DivSityModal.style.display = "block";
  $.getElementById("Modal-Submit").style.display = "none";
  ColorBody("h-max show-modals");
}
function CloseModalCity() {
  DivSityModal.style.display = "none";
  ColorBody("h-max");
}
function HideModals() {
  if (DivSityModal.style.display === "block") {
    DivSityModal.style.display = "none";
    ColorBody("h-max");
  }
  DivModalSubmit.style.display = "none";
  DivBasket.style.display = "none";
  $.querySelectorAll(".inputSearch")[1].style.display = "none";
  $.querySelectorAll(".search-icon")[1].style.display = "block";
  ColorBody("h-max");
}

cityBtn.forEach((cityBtn) => {
  cityBtn.addEventListener("click", ShowModalCity);
});
btnCloseModalCity.addEventListener("click", CloseModalCity);
$.querySelector(".main").addEventListener("click", HideModals);

function a() {
  location.reload();
  DivSityModal.style.display = "none";
  ColorBody("h-max");
  let r = selectCity.value;
  spanCity[0].innerHTML = r;
  spanCity[1].innerHTML = r;
  localStorage.setItem("city", r);
  console.log(r);
}
BtnModalCity.addEventListener("click", a);
window.addEventListener("load", () => {
  let y = localStorage.getItem("city");
  console.log(y);
  selectCity.value = y;
  console.log(selectCity.value);
  spanCity[0].innerHTML = y;
  spanCity[1].innerHTML = y;
});

//* Div BasketShop
let USerBasketShop = JSON.parse(localStorage.getItem("prouct"));

const btnBasket = $.querySelectorAll(".btnBasket");
const DivBasketShop = $.querySelector(".DivBasketShop");
const CloseBasketShop = $.querySelector(".CloseBasketShop");
const sabadKharid = $.getElementById("Basket-Shop");
const NotBasket = $.querySelector(".NotBasket");
function notBasket(array) {
  if (array === null) {
    localStorage.setItem("prouct", JSON.stringify([]));
  } else {
    array.length === 0 ? (NotBasket.style.display = "block") : (NotBasket.style.display = "none");
  }
}
notBasket(USerBasketShop);
function ShowDivBasket() {
  DivBasketShop.style.display = "block";
}
btnBasket.forEach((btn) => {
  btn.addEventListener("click", ShowDivBasket);
  CloseBasketShop.addEventListener("click", () => {
    DivBasketShop.style.display = "none";
  });
});
CloseBasketShop.addEventListener("click", () => {
  DivBasketShop.style.display = "none";
});
BasketShopRespon.addEventListener("click", () => {
  DivBasketShop.style.display = "block";
  DivBasket.style.display = "none";
  ColorBody("h-max");
});

function allprice(array) {
  let sum = 0;
  // array.forEach((l) => {
  //   sum += l.count * l.price;
  // });
  $.querySelector(".totalprice").innerHTML = sum.toLocaleString() + " تومان";
}
function setlocal(array) {
  localStorage.setItem("prouct", JSON.stringify(array));
}
function minus(idProduct) {
  let a = USerBasketShop.findIndex(function (p) {
    return p.id === Number(idProduct);
  });
  USerBasketShop[a].count--;
  setlocal(USerBasketShop);
  if (USerBasketShop[a].count < 1) {
    USerBasketShop.splice(a, 1);
    setlocal(USerBasketShop);
  } else {
    setlocal(USerBasketShop);
  }
  allprice(USerBasketShop);
}
function plus(idProduct) {
  let a = USerBasketShop.findIndex(function (p) {
    return p.id === Number(idProduct);
  });
  USerBasketShop[a].count++;
  setlocal(USerBasketShop);

  allprice(USerBasketShop);
}
$.getElementById("clear-Local").addEventListener("click", () => {
  for (let i = 0; i < USerBasketShop.length; i++) {
    USerBasketShop[i].count = 1;
  }
  for (let i = 0; i < userBasket.length; i++) {
    userBasket[i].count = 1;
  }
  USerBasketShop = [];
  userBasket = [];
  createDivMahsol(userBasket);
  setlocal(USerBasketShop);
  SetLocalMahsol(userBasket);
  price(userBasket.concat(USerBasketShop));
  notBasket(userBasket.concat(USerBasketShop));
  elan(userBasket);
});

//* mahsolat
let locationId = {
  1: [
    { id: 12, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 22, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 32, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 42, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 52, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 62, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 72, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 82, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 92, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  2: [
    { id: 11, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 21, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 31, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 41, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 51, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 61, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 71, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 81, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 91, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  3: [
    { id: 13, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 23, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 33, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 43, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 53, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 63, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 73, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 83, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 93, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  4: [
    { id: 14, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 24, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 34, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 44, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 54, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 64, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 74, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 84, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 94, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  5: [
    { id: 15, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 25, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 35, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 45, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 55, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 65, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 75, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 85, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 95, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  6: [
    { id: 16, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 26, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 36, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 46, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 56, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 66, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 76, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 86, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 96, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  7: [
    { id: 17, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 27, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 37, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 47, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 57, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 67, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 77, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 87, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 97, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  8: [
    { id: 18, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 28, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 38, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 48, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 58, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 68, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 78, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 88, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 98, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  9: [
    { id: 19, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 29, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 39, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 49, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 59, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 69, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 79, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 89, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 99, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  10: [
    { id: 121, name: "op", price: 66000, count: 1, img: "./image/b1.jpg", tozih: "" },
    { id: 122, name: "opa", price: 64000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 123, name: "ops", price: 66000, count: 1, img: "./image/b3.jpg", tozih: "" },
    { id: 124, name: "opd", price: 96000, count: 1, img: "./image/b4.jpg", tozih: "" },
    { id: 125, name: "opf", price: 60000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 126, name: "opg", price: 26000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 127, name: "oph", price: 16000, count: 1, img: "./image/j1.jpg", tozih: "" },
    { id: 128, name: "opj", price: 56000, count: 1, img: "./image/c2.jpg", tozih: "" },
    { id: 129, name: "opk", price: 76000, count: 1, img: "./image/c3.jpg", tozih: "" },
  ],
  11: [
    { id: 132, name: "gva", price: 30000, count: 1, img: "./image/b5.jpg", tozih: "" },
    { id: 133, name: "gvd", price: 45000, count: 1, img: "./image/s1.jpg", tozih: "" },
    { id: 134, name: "gvc", price: 50000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 135, name: "gav", price: 75000, count: 1, img: "./image/logo3.jpg", tozih: "" },
    { id: 136, name: "gbv", price: 255000, count: 1, img: "./image/logo7.jpg", tozih: "" },
    { id: 137, name: "gvn", price: 215000, count: 1, img: "./image/s6.jpg", tozih: "" },
    { id: 138, name: "gvv", price: 25000, count: 1, img: "./image/logo6.jpg", tozih: "" },
    { id: 139, name: "gqv", price: 78000, count: 1, img: "./image/logo7.jpg", tozih: "" },
    { id: 131, name: "gvm", price: 92000, count: 1, img: "./image/logo5.jpg", tozih: "" },
  ],
  12: [
    { id: 141, name: "ca", price: 25000, count: 1, img: "./image/a1.jpg", tozih: "" },
    { id: 142, name: "cw", price: 43000, count: 1, img: "./image/a2.jpg", tozih: "" },
    { id: 143, name: "cad", price: 87000, count: 1, img: "./image/a3.jpg", tozih: "" },
    { id: 144, name: "caf", price: 12000, count: 1, img: "./image/a4.jpg", tozih: "" },
    { id: 145, name: "cav", price: 265000, count: 1, img: "./image/a5.jpg", tozih: "" },
    { id: 146, name: "caa", price: 95000, count: 1, img: "./image/a6.jpg", tozih: "" },
    { id: 147, name: "cza", price: 876000, count: 1, img: "./image/b6.jpg", tozih: "" },
    { id: 148, name: "cxa", price: 32000, count: 1, img: "./image/j6.jpg", tozih: "" },
    { id: 149, name: "cav", price: 55000, count: 1, img: "./image/logo6.jpg", tozih: "" },
  ],

  13: [
    { id: 151, name: "ad", price: 25000, count: 1, img: "./image/a1.jpg", tozih: "" },
    { id: 152, name: "as", price: 44000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 153, name: "aa", price: 65000, count: 1, img: "./image/j3.jpg", tozih: "" },
    { id: 154, name: "av", price: 276000, count: 1, img: "./image/logo5.jpg", tozih: "" },
    { id: 155, name: "ab", price: 69000, count: 1, img: "./image/a5.jpg", tozih: "" },
    { id: 156, name: "al", price: 255000, count: 1, img: "./image/j6.jpg", tozih: "" },
    { id: 157, name: "aq", price: 85000, count: 1, img: "./image/a6.jpg", tozih: "" },
    { id: 158, name: "az", price: 77000, count: 1, img: "./image/s6.jpg", tozih: "" },
    { id: 159, name: "ax", price: 99000, count: 1, img: "./image/b6.jpg", tozih: "" },
  ],
  14: [
    { id: 161, name: "رضا", price: 25000, count: 1, img: "./image/food.jpg", tozih: "" },
    { id: 162, name: "حسین", price: 28000, count: 1, img: "./image/logo1.jpg", tozih: "" },
    { id: 163, name: "سی", price: 28000, count: 1, img: "./image/j6.jpg", tozih: "" },
    { id: 164, name: "مج", price: 55000, count: 1, img: "./image/b2.jpg", tozih: "" },
    { id: 165, name: "العربی", price: 78000, count: 1, img: "./image/a3.jpg", tozih: "" },
    { id: 166, name: "متحد", price: 89000, count: 1, img: "./image/logo8.jpg", tozih: "" },
    { id: 167, name: "بارسلونا", price: 13000, count: 1, img: "./image/b5.jpg" },
    { id: 168, name: "الاتحاد", price: 73000, count: 1, img: "./image/s6.jpg" },
    { id: 169, name: "النصر", price: 66000, count: 1, img: "./image/s1.jpg" },
  ],
  341: [
    { id: 401, name: "ساندویچ برگر", price: 60000, count: 1, img: "./image/s6.jpg", tozih: "ساندویچ برگر با 200 گرم گوشت گوسفند" },
    { id: 402, name: "ساندویچ سرد", price: 5800, count: 1, img: "./image/m5.jpg", tozih: "ساندویچ سرد همراه 300گرم کالباس 90درصد" },
    { id: 425, name: "پیتزا مخصوص", price: 60000, count: 1, img: "./image/b3.jpg", tozih: "شامل قارچ و مرغ و گوشت " },
    { id: 426, name: "پیتزا پپرونی", price: 79000, count: 1, img: "./image/b5.jpg", tozih: "پیتزا پپرونی با 150گرم پپرونی 100 درصد" },
  ],
  352: [
    { id: 403, name: "کباب برگ", price: 12000, count: 1, img: "./image/j1.jpg", tozih: "شامل یک پرس برنج همراه یک سیخ 200 گرمی" },
    { id: 404, name: "کوبیده", price: 99000, count: 1, img: "./image/logo3.jpg", tozih: "شامل یک پرس برنج همراه یک سیخ 200 گرمی" },
    { id: 404, name: "جوجه", price: 150000, count: 1, img: "./image/s5.jpg", tozih: "شامل یک پرس برنج همراه یک سیخ 200 گرمی" },
    { id: 404, name: "برگ مخصوص", price: 100000, count: 1, img: "./image/s1.jpg", tozih: "شامل یک پرس برنج همراه یک سیخ 200 گرمی" },
  ],
  353: [
    { id: 405, name: "ماهی کپور", price: 63000, count: 1, img: "./image/ماهی5.jpg", tozih: "یک ماهی کامل همراه با یک پرس برنج زعفرانی" },
    { id: 406, name: "ماهی سفید", price: 87000, count: 1, img: "./image/ماهی.jpg", tozih: "یک ماهی کامل همراه با یک پرس برنج زعفرانی" },
    { id: 427, name: "شوریده", price: 50000, count: 1, img: "./image/ماهی4.jpg", tozih: "یک ماهی کامل همراه با یک پرس برنج زعفرانی" },
    { id: 428, name: "قزل آلا", price: 60000, count: 1, img: "./image/ماهی3.jpg", tozih: "یک ماهی کامل همراه با یک پرس برنج زعفرانی" },
    { id: 429, name: "قزل آلا", price: 70000, count: 1, img: "./image/ماهی2.jpg", tozih: "یک ماهی کامل همراه با یک پرس برنج زعفرانی" },
  ],
  354: [
    { id: 407, name: "باقلوا مجلسی", price: 43000, count: 1, img: "./image/m9.jpg", tozih: "شامل 10 تیکه باقلوا شیری همراه پسته" },
    { id: 408, name: "شیرینی تر", price: 63000, count: 1, img: "./image/m8.jpg", tozih: "5 تیکه شیرینی فنجانی با اسمارتیس " },
  ],
  355: [
    { id: 430, name: "برگ سلطانی", price: 12000, count: 1, img: "./image/m11.jpg", tozih: "شامل یک پرس برنج همراه یک سیخ 200 گرمی" },
    { id: 431, name: " کوبیده در باری", price: 99000, count: 1, img: "./image/logo3.jpg", tozih: "شامل یک پرس برنج همراه یک سیخ 200 گرمی" },
    { id: 432, name: "جوجه آقایی", price: 150000, count: 1, img: "./image/s5.jpg", tozih: "شامل یک پرس برنج همراه یک سیخ 200 گرمی" },
    { id: 433, name: "برگ خانواده", price: 100000, count: 1, img: "./image/s1.jpg", tozih: "شامل چهار پرس برنج همراه چهار سیخ 200 گرمی" },
  ],
  342: [
    { id: 411, name: "گوشت گوسفند", price: 550000, count: 1, img: "./image/گوسفند.jpg", tozih: "1 کیلو گوشت " },
    { id: 412, name: "گوشت گوساله", price: 500000, count: 1, img: "./image/گوساله.jpg", tozih: "1 کیلو گوشت " },
    { id: 434, name: "مرغ", price: 150000, count: 1, img: "./image/گوشت2.jpg", tozih: "800 گرم سینه مرغ پاک شده" },
    { id: 435, name: "ماهی", price: 100000, count: 1, img: "./image/گوشت.jpg", tozih: "500 گرم فیله ماهی سالمون" },
    { id: 436, name: "کالباس", price: 140000, count: 1, img: "./image/گوشت3.jpg", tozih: "10 ورق کالباس 90 درصد" },
  ],
  343: [
    { id: 413, name: "ماکارانی", price: 55500, count: 1, img: "./image/m3.jpg", tozih: "یک پرس ماکارانی گوشت" },
    { id: 414, name: "برگر خانگی", price: 36000, count: 1, img: "./image/m6.jpg", tozih: "200 گرم برگر خالص" },
  ],
  344: [{ id: 415, name: "اکبر جوجه", price: 25000, count: 1, img: "./image/m4.jpg", tozih: "شامل 400 گرم مرغ یک پرس برنج" }],
  345: [{ id: 402, name: "ساندویچ سرد", price: 5800, count: 1, img: "./image/m5.jpg", tozih: "ساندویچ سرد همراه 300گرم کالباس 90درصد" }],
  346: [
    { id: 401, name: "ساندویچ برگر", price: 60000, count: 1, img: "./image/s6.jpg", tozih: "ساندویچ برگر با 200 گرم گوشت گوسفند" },
    { id: 402, name: "ساندویچ سرد", price: 5800, count: 1, img: "./image/m5.jpg", tozih: "ساندویچ سرد همراه 300گرم کالباس 90درصد" },
    { id: 425, name: "پیتزا مخصوص", price: 60000, count: 1, img: "./image/b3.jpg", tozih: "شامل قارچ و مرغ و گوشت " },
    { id: 426, name: "پیتزا پپرونی", price: 79000, count: 1, img: "./image/b5.jpg", tozih: "پیتزا پپرونی با 150گرم پپرونی 100 درصد" },
  ],
  347: [
    { id: 425, name: "پیتزا مخصوص", price: 60000, count: 1, img: "./image/b3.jpg", tozih: "شامل قارچ و مرغ و گوشت " },
    { id: 426, name: "پیتزا پپرونی", price: 79000, count: 1, img: "./image/b5.jpg", tozih: "پیتزا پپرونی با 150گرم پپرونی 100 درصد" },
  ],
  348: [
    { id: 407, name: "باقلوا مجلسی", price: 43000, count: 1, img: "./image/m9.jpg", tozih: "شامل 10 تیکه باقلوا شیری همراه پسته" },
    { id: 408, name: "شیرینی تر", price: 63000, count: 1, img: "./image/m8.jpg", tozih: "5 تیکه شیرینی فنجانی با اسمارتیس " },
  ],
};
let search = location.search;
let idLocation = new URLSearchParams(search).get("id");
const Div_Froshgah = $.getElementById("Foroshgah");
let fragment = $.createDocumentFragment();
let diva = null;
locationId[idLocation].forEach((o) => {
  if (JSON.parse(localStorage.getItem("prouct")) === "") {
    localStorage.setItem("prouct", JSON.stringify([]));
  } else {
    diva = $.createElement("div");
    diva.innerHTML +=
      ' <div class="shadow-lg rounded-lg d cursor-pointer pb-2" id=' +
      o.id +
      '> <div class="w-full h-[180px] overflow-hidden"> <img src=' +
      o.img +
      ' alt="" class="rounded-lg w-full h-full" /> </div> <div class="px-3 py-0"> <div class="my-3 text-sm flex justify-between"> <div><span>' +
      o.name +
      "</span></div> <div><span class='price'>" +
      o.price.toLocaleString() +
      '</span></div> </div> <div class="sm:flex sm:justify-between  mb-3"> <div class="text-xs sm:text-sm"> <span class=""> زمان آماده سازی : </span> <span class="">30 دقیقه</span> </div> <div class="text-end my-3 md:m-0"> <span>4.6 <i class="fa fa-star text-warning"></i> </span> </div> </div> <div class="my-2 text-slate-400 text-sm"><span>' +
      o.tozih +
      "</span></div> </div>  ";
    fragment.append(diva);
  }
});
Div_Froshgah.append(fragment);
const DivMahsol = $.querySelectorAll(".d");
DivMahsol.forEach((div) => {
  div.addEventListener("click", () => {
    DivBasketShop.style.display = "block";
    ClickDiv(div.id);
    createDivMahsol(userBasket);
  });
});
function SetLocalMahsol(array) {
  localStorage.setItem("prouct", JSON.stringify(array));
}
let userBasket = [].concat(JSON.parse(localStorage.getItem("prouct")));
function ClickDiv(i) {
  let FindMahsol = locationId[idLocation].find((o) => {
    return o.id == i;
  });

  let IndexMahsol = userBasket.findIndex((o) => {
    return o.id == i;
  });
  let inasd = userBasket.some((o) => {
    return o.id === Number(i);
  });
  if (inasd) {
    userBasket[IndexMahsol].count++;
    SetLocalMahsol(userBasket);
  } else {
    userBasket.push(FindMahsol);
    SetLocalMahsol(userBasket);
  }
  console.log(userBasket);
  console.log(inasd);
  price(userBasket);
  elan(userBasket);
  notBasket(userBasket);
}
function createDivMahsol(array) {
  const Div = $.getElementById("Basket-Shop");
  Div.innerHTML = "";
  array.forEach((div) => {
    Div.innerHTML +=
      '<div class="bg-slate-50 p-3 px-5 rounded-xl my-2" style="border: 1px solid #ccc"> <p class="my-3">' +
      div.name +
      '</p> <div class="flex justify-between"> <div> <span>' +
      div.price.toLocaleString() +
      '</span> </div> <div class="flex"> <div class="p-1 cursor-pointer minus" id=' +
      div.id +
      '> <i class="fa fa-minus" style="color: var(--main-color); font-size: 12px"></i> </div> <div class="my-auto"> <span class="mx-2">' +
      div.count +
      '</span> </div> <div class="p-1 cursor-pointer plus" id=' +
      div.id +
      '> <i class="fa fa-plus" style="color: var(--main-color); font-size: 12px"></i> </div> </div> </div> </div>';
  });
  const btnPuls = Div.querySelectorAll(".plus");
  const btnMinus = Div.querySelectorAll(".minus");
  btnPuls.forEach((btn) => {
    btn.addEventListener("click", () => {
      let find = userBasket.findIndex((user) => {
        return user.id == btn.id;
      });
      userBasket[find].count++;
      SetLocalMahsol(userBasket);
      createDivMahsol(userBasket);
      price(userBasket);
      notBasket(userBasket);
      console.log(find);
    });
  });
  btnMinus.forEach((btn) => {
    btn.addEventListener("click", () => {
      let find = userBasket.findIndex((user) => {
        return user.id == btn.id;
      });
      userBasket[find].count--;
      SetLocalMahsol(userBasket);

      if (userBasket[find].count < 1) {
        userBasket[find].count = 1;
        userBasket.splice(find, 1);
        SetLocalMahsol(userBasket);
        createDivMahsol(userBasket);
      } else {
        createDivMahsol(userBasket);
      }
      price(userBasket);
      elan(userBasket);
      notBasket(userBasket);
    });
  });
}
window.addEventListener("load", () => {
  let localmahsol = JSON.parse(localStorage.getItem("prouct"));
  if (!localmahsol) {
    localStorage.setItem("prouct", JSON.stringify([]));
  } else {
    userBasket = localmahsol;
    createDivMahsol(userBasket);
    price(userBasket);
    elan(localmahsol);
  }
});
let A_DivQ = $.querySelector(".DivQ");
let A_DivA = $.querySelector(".DivA");
A_DivQ.innerHTML = localStorage.getItem("DivQ");
A_DivA.innerHTML = localStorage.getItem("nama");
function price(array) {
  let sum = 0;
  array.forEach((r) => {
    sum += r.count * r.price;
  });
  $.querySelector(".totalprice").innerHTML = sum.toLocaleString();
}
function elan(array) {
  if (!array) {
    array = [];
  } else {
    if (array.length === 0) {
      $.querySelectorAll(".elanBasketTedad").forEach((span) => {
        span.style.display = "none";
      });
    } else {
      $.querySelectorAll(".elanBasketTedad").forEach((span) => {
        span.innerHTML = array.length;
        span.style.display = "block";
      });
    }
  }
}
let imgLocal = JSON.parse(localStorage.getItem("img"));
console.log(imgLocal);
$.getElementById("CoverLocal").src = imgLocal;

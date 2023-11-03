const $ = document;
function ColorBody(color) {
  $.body.className = color;
}
//* Scrrol Div

function ScroolDivWidth() {
  let sc = window.scrollY;
  if (sc > 0) {
    $.querySelector("header").className = "scrool";
  } else {
    $.querySelector("header").className = "";
  }
}
window.addEventListener("scroll", ScroolDivWidth);

// Scrool-To

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
ScroolTo();
function scol() {
  window.scrollTo(0, 0);
}
DivScroolTo.addEventListener("click", scol);
window.addEventListener("resize", ScroolTo);

//! Menu Buttom
const DivSerachMenuButtom = $.getElementById("DivSerach-MenuButtom");
const BtnSearchMenuSubmit = $.getElementById("Btn-Search-MenuSubmit");
const btnPrevSearchButtom = $.getElementById("prevMenuButtom");

BtnSearchMenuSubmit.addEventListener("click", () => {
  $.querySelector("header").style.display = "none";
  $.querySelector("main").style.display = "none";
  DivSerachMenuButtom.style.display = "block";
  $.querySelector(".DivBasketShop").classList.add("top-0");
});

btnPrevSearchButtom.addEventListener("click", () => {
  $.querySelector("header").style.display = "block";
  $.querySelector("main").style.display = "block";
  DivSerachMenuButtom.style.display = "none";
  $.querySelector(".DivBasketShop").classList.remove("top-0");
  window.scrollTo(0, 0);
});

//* Icon Navbar

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
    $.querySelector(".img-logo img").setAttribute("src", "./html/image/logo.177e5a9 (2).png");
  } else {
    $.querySelector(".img-logo img").setAttribute("src", "./html/image/mini-logo.5203e49 (1) (2).svg");
  }
  console.log(InnerWidthBody);
});
if (window.innerWidth > 768) {
  closeDivNavbar();
  $.querySelector(".img-logo img").setAttribute("src", "./html/image/logo.177e5a9 (2).png");
} else {
  $.querySelector(".img-logo img").setAttribute("src", "./html/image/mini-logo.5203e49 (1) (2).svg");
}
//* Div Search

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
  DivBasket.style.display = "none";
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
  selectCityId.value = r;
}
BtnModalCity.addEventListener("click", a);
window.addEventListener("load", () => {
  let y = localStorage.getItem("city");
  console.log(y);
  if (y) {
    selectCity.value = y;
    console.log(selectCity.value);
    spanCity[0].innerHTML = y;
    spanCity[1].innerHTML = y;
    selectCityId.value = y;
  }
});

selectCityId.addEventListener("change", () => {
  let value = selectCityId.value;
  let value1 = localStorage.getItem("city");
  localStorage.setItem("city", value);
  spanCity[0].innerHTML = value;
  spanCity[1].innerHTML = value;
  selectCity.value = value;
});
//* Div BasketShop

const btnBasket = $.querySelectorAll(".btnBasket");
const DivBasketShop = $.querySelector(".DivBasketShop");
const CloseBasketShop = $.querySelector(".CloseBasketShop");
const sabadKharid = $.getElementById("Basket-Shop");
const NotBasket = $.querySelector(".NotBasket");
const clear_local = $.getElementById("clear-Local");

clear_local.addEventListener("click", () => {
  localStorage.setItem("prouct", JSON.stringify([]));
  for (let i = 0; i < userPishnehad.length; i++) {
    userPishnehad[i].count = 1;
  }
  userPishnehad = [];
  createElementBasket(userPishnehad);
  priceAll(userPishnehad);
  elan(userPishnehad);
  notBasket(userPishnehad);
});

function notBasket(array) {
  if (array === null) {
    localStorage.setItem("prouct", JSON.stringify([]));
  } else {
    array.length === 0 ? (NotBasket.style.display = "block") : (NotBasket.style.display = "none");
  }
}
notBasket(JSON.parse(localStorage.getItem("prouct")));
function ShowDivBasket() {
  DivBasketShop.style.cssText = "display:block";
}
btnBasket.forEach((btn) => {
  btn.addEventListener("click", ShowDivBasket);
  CloseBasketShop.addEventListener("click", () => {
    DivBasketShop.style.display = "none";
  });
});
BasketShopRespon.addEventListener("click", () => {
  DivBasketShop.style.display = "block";
  DivBasket.style.display = "none";
  ColorBody("h-max");
});

function clear_Basket(array) {
  let f = JSON.parse(localStorage.getItem("prouct"));
  for (let i = 0; i < array.length; i++) {
    array[i].count = 1;
  }
}
//* Carousel

const CarouselDiv = $.querySelector(".carousel");
const btnCarousel = $.querySelectorAll(".wrap .fa");
let carousel = [
  { id: 1, name: "رستوران", src: "./html/image/restoran.svg" },
  { id: 2, name: "فست فود", src: "./html/image/fast.svg" },
  { id: 3, name: "سوپر مارکت", src: "./html/image/haiper.svg" },
  { id: 4, name: "کافی شاپ", src: "./html/image/cofee.svg" },
  { id: 5, name: "نانوایی", src: "./html/image/nan.svg" },
  { id: 6, name: "میوه وسبزیجات", src: "./html/image/mive.svg" },
  { id: 7, name: "شیرینی و شکلات", src: "./html/image/shokolat.svg" },
  { id: 8, name: "آبمیوه و بستنی", src: "./html/image/abmive.svg" },
  { id: 9, name: "گوشت و مرغ", src: "./html/image/gosht.svg" },
  { id: 10, name: "عطاری و خشکبار", src: "./html/image/atari.svg" },
  { id: 11, name: "لوازم ارایشی", src: "./html/image/arayeshi.svg" },
  { id: 12, name: "گیفت ها", src: "./html/image/gift.svg" },
  { id: 13, name: "لوازم حیوانات", src: "./html/image/heioman.svg" },
  { id: 14, name: "سایر مجموعه ها", src: "./html/image/saier.svg" },
];
let FragmentCarousel = $.createDocumentFragment();
let divCarousel = null;
carousel.forEach((e) => {
  divCarousel = $.createElement("div");
  divCarousel.className = "q";
  divCarousel.setAttribute("draggable", "false");
  divCarousel.innerHTML +=
    '  <a href="./html/foroshgah.html?id=' +
    e.id +
    '"> <div> <img src=' +
    e.src +
    ' alt="" /> <span class="text-sm">' +
    e.name +
    "</span> </div> </a>";
  FragmentCarousel.append(divCarousel);
});
CarouselDiv.append(FragmentCarousel);
const DivQ = $.querySelectorAll(".q");
DivQ.forEach((div) => {
  div.addEventListener("click", () => {
    let valuse = div.querySelector("span").innerHTML;
    localStorage.setItem("DivQ", valuse);
  });
});
const WidthFirtDivCarousel = $.querySelector(".carousel .q").clientWidth;

btnCarousel.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList == "fa fa-angle-right" ? (CarouselDiv.scrollLeft += WidthFirtDivCarousel) : (CarouselDiv.scrollLeft -= WidthFirtDivCarousel);
  });
});
let flag = false,
  prevx,
  scroll1;
function draging(event) {
  event.preventDefault();
  if (!flag) return;
  CarouselDiv.scrollLeft = CarouselDiv.clientWidth - (event.pageX + 500);
}

function dragstart() {
  flag = true;
}
function dragstop() {
  flag = false;
}
CarouselDiv.addEventListener("mousemove", (event) => {
  draging(event);
});
$.querySelector(".wrap").addEventListener("mousedown", dragstart);
$.querySelector(".wrap").addEventListener("mouseup", dragstop);
$.querySelector(".wrap").addEventListener("mouseleave", dragstop);

//* Pishnehad Div
let Pishnehad = [
  { id: 300, count: 1, name: "دستر سرد", price: 50000, img: "./html/image/a2.jpg" },
  { id: 301, count: 1, name: "دستر گرم", price: 78000, img: "./html/image/a3.jpg" },
  { id: 302, count: 1, name: "ساندویچ سوسیس", price: 90000, img: "./html/image/a4.jpg" },
  { id: 303, count: 1, name: "پیتزا ایتالیایی", price: 25000, img: "./html/image/a5.jpg" },
  { id: 304, count: 1, name: " همبرگر دوبل", price: 52500, img: "./html/image/a6.jpg" },
  { id: 305, count: 1, name: "همبرگر", price: 35000, img: "./html/image/a2.jpg" },
];

const btnCarouselPishnehad = $.querySelectorAll(".wrap_Wizheh i");
const DivCarouselPishnehad = $.querySelector(".carousel-vizheh");
let fragmentMahsol = $.createDocumentFragment();
let DivMahsol = null;
Pishnehad.forEach((div) => {
  let r = JSON.parse(localStorage.getItem("prouct"));
  if (!r) {
    localStorage.setItem("prouct", JSON.stringify([]));
  } else {
    DivMahsol = $.createElement("div");
    DivMahsol.setAttribute("class", "g");
    DivMahsol.setAttribute("id", div.id);
    DivMahsol.innerHTML +=
      "<div class='text-sm'> <img src=" +
      div.img +
      ' alt="" /> <div class="px-2 my-2"> <div class="mt-4 mb-3 justify-between flex" > <div><span>' +
      div.name +
      "</span></div> <div><span>" +
      div.price +
      '</span></div> </div> <div class="md:justify-between md:flex text-xs md:text-sm"> <div>زمان آماده سازی : 30 دقیقه</div> <div class="text-end my-2 md:my-0"> <span>2</span> <i class="fa fa-star" style="color: #ffc50f"></i> </div> </div> </div </div>';
    fragmentMahsol.append(DivMahsol);
  }
});

let y = JSON.parse(localStorage.getItem("prouct"));
console.log(y);
let userPishnehad = [].concat(y);
// Btn Clear Basket
clear_local.addEventListener("click", () => {
  clear_Basket(userPishnehad);
});

DivCarouselPishnehad.append(fragmentMahsol);
const DivPishnehad = $.querySelectorAll(".carousel-vizheh .g");

DivPishnehad.forEach((div) => {
  div.addEventListener("click", () => {
    AddPishnehad(div.id);
    notBasket(userPishnehad);
    console.log(div);
  });
});
function AddPishnehad(id) {
  DivBasketShop.style.display = "block";
  let find = Pishnehad.find((o) => {
    return o.id == id;
  });
  let findIndex = userPishnehad.findIndex((o) => {
    return o.id == id;
  });
  let some = userPishnehad.some((o) => {
    return o.id == id;
  });
  if (some) {
    userPishnehad[findIndex].count++;
    localStorage.setItem("prouct", JSON.stringify(userPishnehad));
  } else {
    userPishnehad.push(find);

    localStorage.setItem("prouct", JSON.stringify(userPishnehad));
  }
  console.log(userPishnehad);
  createElementBasket(userPishnehad);
  priceAll(userPishnehad);
  elan(userPishnehad);
}

function createElementBasket(array) {
  sabadKharid.innerHTML = "";
  array.forEach((Obj) => {
    sabadKharid.innerHTML +=
      '<div class="bg-slate-50 p-3 px-5 rounded-xl my-2" style="border: 1px solid #ccc"> <p class="my-3">' +
      Obj.name +
      '</p> <div class="flex justify-between"> <div> <span>' +
      Obj.price.toLocaleString() +
      '</span> </div> <div class="flex"> <div class="p-1 cursor-pointer minus" id=' +
      Obj.id +
      '> <i class="fa fa-minus" style="color: var(--main-color); font-size: 12px"></i> </div> <div class="my-auto"> <span class="mx-2">' +
      Obj.count +
      '</span> </div> <div class="p-1 cursor-pointer plus" id=' +
      Obj.id +
      '> <i class="fa fa-plus" style="color: var(--main-color); font-size: 12px"></i> </div> </div> </div> </div>';
  });
  const btnPlusPishnehad = $.querySelectorAll(".plus");
  const btnMinusPishnehad = $.querySelectorAll(".minus");
  btnPlusPishnehad.forEach((btn) => {
    btn.addEventListener("click", () => {
      plusMahsol(btn.id);
      createElementBasket(userPishnehad);
      elan(userPishnehad);
      priceAll(userPishnehad);
      notBasket(userPishnehad);
    });
  });
  btnMinusPishnehad.forEach((btn) => {
    btn.addEventListener("click", () => {
      minusMahsol(btn.id);
      createElementBasket(userPishnehad);
      elan(userPishnehad);
      priceAll(userPishnehad);
      notBasket(userPishnehad);
    });
  });
}
function plusMahsol(id) {
  let Find = userPishnehad.findIndex((e) => {
    return e.id == id;
  });
  console.log(Find);
  userPishnehad[Find].count++;
  localStorage.setItem("prouct", JSON.stringify(userPishnehad));
}
function minusMahsol(id) {
  let Find = userPishnehad.findIndex((e) => {
    return e.id == id;
  });
  userPishnehad[Find].count--;
  localStorage.setItem("prouct", JSON.stringify(userPishnehad));

  if (userPishnehad[Find].count < 1) {
    userPishnehad[Find].count = 1;
    userPishnehad.splice(Find, 1);

    localStorage.setItem("prouct", JSON.stringify(userPishnehad));
  }
}

//! Carousel Pishnehad
const DivPishnehad2 = $.querySelector(".carousel-vizheh .g");
if (window.innerWidth > 768) {
  const DivPishnehad2 = $.querySelector(".carousel-vizheh .g").clientWidth + 20;
  carouselPishnehad(DivCarouselPishnehad, DivPishnehad2);
} else {
  const DivPishnehad2 = $.querySelector(".carousel-vizheh .g").clientWidth + 15;
  carouselPishnehad(DivCarouselPishnehad, DivPishnehad2);
}
function carouselPishnehad(DivCarouselPishnehad, DivPishnehad2) {
  btnCarouselPishnehad.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.id);
      btn.id === "left" ? (DivCarouselPishnehad.scrollLeft -= DivPishnehad2) : (DivCarouselPishnehad.scrollLeft += DivPishnehad2);
    });
  });
}
// btnCarouselPishnehad.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log(btn.id);
//     btn.id === "left"
//       ? (DivCarouselPishnehad.scrollLeft -= DivPishnehad2)
//       : (DivCarouselPishnehad.scrollLeft += DivPishnehad2);
//   });
// });
function elan(array) {
  if (array.length === 0) {
    $.querySelectorAll(".elanBasketTedad").forEach((i) => {
      i.style.display = "none";
    });
  } else {
    $.querySelectorAll(".elanBasketTedad").forEach((i) => {
      i.innerHTML = array.length;
      i.style.display = "block";
    });
  }
}
//! Carousel Pishnehad

function priceAll(array) {
  let sum = 0;
  array.forEach((price) => {
    sum += price.count * price.price;
  });
  $.querySelector(".totalprice").innerHTML = sum.toLocaleString() + " تومان";
}

createElementBasket(JSON.parse(localStorage.getItem("prouct")));
elan(JSON.parse(localStorage.getItem("prouct")));
priceAll(JSON.parse(localStorage.getItem("prouct")));

//!  Div Mahbob

// y  ==> localStorage "prouct"

let MahbobArray = [
  { id: 341, name: "فست فود اتحاد", price: 2000, count: 1, img: "./html/image/m1.jpg" },
  { id: 352, name: "رستوران بابا طاهر", price: 2000, count: 1, img: "./html/image/m11.jpg" },
  { id: 353, name: "مجموعه ماهی سفید", price: 2000, count: 1, img: "./html/image/m10.jpg" },
  { id: 354, name: "قنادی اکبری", price: 2000, count: 1, img: "./html/image/m9.jpg" },
  { id: 355, name: "رستوران آقای خاص", price: 2000, count: 1, img: "./html/image/m12.jpg" },
  { id: 342, name: "گوشت بوفالو", price: 5500, count: 1, img: "./html/image/m2.jpg" },
  { id: 343, name: "غذای خانگی نارنج", price: 8800, count: 1, img: "./html/image/m3.jpg" },
  { id: 344, name: "رستوران کلبادی", price: 7200, count: 1, img: "./html/image/m4.jpg" },
  { id: 345, name: "ساندویچ سرد پاندا", price: 2300, count: 1, img: "./html/image/m5.jpg" },
  { id: 346, name: "فست فود پیر باقر", price: 4200, count: 1, img: "./html/image/m6.jpg" },
  { id: 347, name: "پیتزا پستو", price: 55000, count: 1, img: "./html/image/m7.jpg" },
  { id: 348, name: "قنادباشی", price: 99000, count: 1, img: "./html/image/m8.jpg" },
];
const DivAsliMahbob = $.getElementById("mahbob");
let FragmentMahbob = $.createDocumentFragment();
let DivMahbob = null;
function createDivMahbob(array) {
  array.forEach((Item) => {
    DivMahbob = $.createElement("div");
    DivMahbob.innerHTML +=
      '<a href="./html/mahbob.html?id=' +
      Item.id +
      '"> <div class=" rounded-lg cursor-pointer bg-white shadow-lg h-max pb-2 m"> <div class=" w-full h-[150px] md:h-[220px]"> <img src=' +
      Item.img +
      ' class="object-cover w-full h-full" alt="" /> </div> <div class="px-2 text-sm"> <div class=" justify-between flex my-3"> <div class="z">' +
      Item.name +
      '</div> </div> <div class=" md:flex md:justify-between text-xs md:text-sm my-2"> <div>زمان آماده سازی : 30 دقیقه</div> <div class="text-end my-2  md:my-0"> <span>4.9</span> <i class="fa fa-star" style="color: #ffc50f"></i> </div> </div> </div> </div> </a>';
    FragmentMahbob.append(DivMahbob);
  });
}
createDivMahbob(MahbobArray);
DivAsliMahbob.append(FragmentMahbob);
const DivMahbob1 = $.querySelectorAll(".m");
const DivMahbob2 = $.querySelectorAll(".z");
DivMahbob1.forEach((Div) => {
  Div.addEventListener("click", () => {
    let r = Div.querySelector("img").src.indexOf("image");
    let y = Div.querySelector(".z");
    let obj = ["./" + Div.querySelector("img").src.slice(r)];
    localStorage.setItem("img", JSON.stringify(obj));
    localStorage.setItem("nama", y.innerHTML);
  });
});
//! Div Is Zodex
let FragmentIsZodex = $.createDocumentFragment();
let DivIsZodex = null;
let IsItem = [
  {
    title: "سریعه!",
    name: "در کمترین زمان ممکن سفارشت رو تحویل میده.",
    img: "./html/image/task-clock-icon.png",
  },
  {
    title: "قویه!",
    name: "هر مشکل و سوالی داشتی، کافیه با پشتیبانی تماس بگیری .",
    img: "./html/image/question-mark-circle-outline-icon.png",
  },
  {
    title: "راحته!",
    name: "انتخاب روش پرداختت با خودته. آنلاین یا با کارتخوان در محل؟",
    img: "./html/image/shopping-bag-add-icon.png",
  },
  {
    title: "کاربردیه!",
    name: "با یک سفارش، همزمان از چند فروشگاه خرید میکنی.",
    img: "./html/image/text-document-check-icon.png ",
  },
];
IsItem.forEach((Item) => {
  DivIsZodex = $.createElement("div");
  DivIsZodex.className = "text-center text-sm";
  DivIsZodex.innerHTML +=
    ' <div class=""> <img class="m-auto w-20 h-[83px]" src=' +
    Item.img +
    ' alt="" /> </div> <p class="my-3">' +
    Item.title +
    "</p> <p class='w-4/6 m-auto'>" +
    Item.name +
    "</p >";
  FragmentIsZodex.append(DivIsZodex);
});
$.getElementById("Is-Zodex").append(FragmentIsZodex);

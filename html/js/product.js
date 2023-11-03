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
  if (sc > 200) {
    DivScroolTo.style.display = "block";
  } else {
    DivScroolTo.style.display = "none";
  }
  if (window.innerWidth < 767) {
    DivScroolTo.style.display = "none";
  } else {
    DivScroolTo.style.display = "block";
  }
}

window.addEventListener("resize", ScroolTo);

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
          ColorBody("h-max ");
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
const ResponCityBtn = $.getElementById("citybtn");
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
  let y = this.localStorage.getItem("city");
  console.log(y);
  selectCity.value = y;
  console.log(selectCity.value);
  spanCity[0].innerHTML = y;
  spanCity[1].innerHTML = y;
});

//* Div BasketShop

const btnBasket = $.querySelectorAll(".btnBasket");
const DivBasketShop = $.querySelector(".DivBasketShop");
const CloseBasketShop = $.querySelector(".CloseBasketShop");
const NotBasket = $.querySelector(".NotBasket");

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
function notBasket(array) {
  if (array === null) {
    localStorage.setItem("prouct", JSON.stringify([]));
  } else {
    if (array.length === 0) {
      NotBasket.style.display = "block";
    } else {
      NotBasket.style.display = "none";
    }
  }
}

notBasket(JSON.parse(localStorage.getItem("prouct")));
//*

let sitys = {
  سیرجان: [
    {
      id: 231,
      name: "فست فود گریل",
      price: 105000,
      count: 1,
      img: "./image/logo4.jpg",
    },
    {
      id: 232,
      name: "کافه کباب",
      price: 110000,
      count: 1,
      img: "./image/logo1.jpg",
    },
    {
      id: 233,
      name: "فوت کرت فریدون",
      price: 125000,
      count: 1,
      img: "./image/logo3.jpg",
    },
    {
      id: 234,
      name: "وارکا لانژ",
      price: 135000,
      count: 1,
      img: "./image/logo2.jpg",
    },
    {
      id: 235,
      name: "سیب زمینی طلایی",
      price: 155000,
      count: 1,
      img: "./image/logo5.jpg",
    },
    {
      id: 236,
      name: "رستوران ژینو",
      price: 165000,
      count: 1,
      img: "./image/logo6.jpg",
    },
    {
      id: 237,
      name: "رستوران گل محمد",
      price: 175000,
      count: 1,
      img: "./image/logo7.jpg",
    },
    {
      id: 238,
      name: "رستوران غضنفر",
      price: 185000,
      count: 1,
      img: "./image/logo9.jpg",
    },
    {
      id: 239,
      name: "رستوران اکبر آقاسی",
      price: 195000,
      count: 1,
      img: "./image/b6.jpg",
    },
  ],
  رفسنجان: [
    { id: 1, name: "اعتماد", price: 77000, count: 1, img: "./image/s1.jpg" },
    { id: 2, name: "گل سرخ", price: 77000, count: 1, img: "./image/s2.jpg" },
    { id: 3, name: "ایتالی", price: 77000, count: 1, img: "./image/s3.jpg" },
    {
      id: 4,
      name: "نرگس بانو",
      price: 77000,
      count: 1,
      img: "./image/s4.jpg",
    },
    {
      id: 5,
      name: "داش سجاد",
      price: 77000,
      count: 1,
      img: "./image/b5.jpg",
    },
    { id: 6, name: "ممد علی", price: 77000, count: 1, img: "./image/s6.jpg" },
    { id: 7, name: "ژوتا", price: 77000, count: 1, img: "./image/j6.jpg" },
    { id: 8, name: "یوتیا", price: 77000, count: 1, img: "./image/b6.jpg" },
    {
      id: 9,
      name: "دلیوین",
      price: 77000,
      count: 1,
      img: "./image/logo6.jpg",
    },
  ],
  جیرفت: [
    { id: 171, name: "عطاویچ", price: 77000, count: 1, img: "./image/j1.jpg" },
    {
      id: 172,
      name: "سوخاری طلایی",
      price: 99000,
      count: 1,
      img: "./image/j2.jpg",
    },
    {
      id: 173,
      name: "دایی مجتبی",
      price: 67000,
      count: 1,
      img: "./image/j3.jpg",
    },
    {
      id: 174,
      name: "رستوران بن بست",
      price: 79000,
      count: 1,
      img: "./image/j4.jpg",
    },
    {
      id: 175,
      name: "اعتماد کافه",
      price: 33000,
      count: 1,
      img: "./image/j5.jpg",
    },
    {
      id: 176,
      name: "کبابی جوان",
      price: 27000,
      count: 1,
      img: "./image/j6.jpg",
    },
    {
      id: 177,
      name: "هایپر علی",
      price: 88000,
      count: 1,
      img: "./image/c4.jpg",
    },
    {
      id: 178,
      name: "رستوران گل رز",
      price: 79000,
      count: 1,
      img: "./image/logo7.jpg",
    },
    {
      id: 179,
      name: "دایی رسول",
      price: 33000,
      count: 1,
      img: "./image/b6.jpg",
    },
  ],
  مشهد: [
    { id: 181, name: "gop", price: 66000, count: 1, img: "./image/b1.jpg" },
    { id: 182, name: "gopa", price: 64000, count: 1, img: "./image/b2.jpg" },
    { id: 183, name: "gops", price: 66000, count: 1, img: "./image/b3.jpg" },
    { id: 184, name: "gopd", price: 96000, count: 1, img: "./image/b4.jpg" },
    { id: 185, name: "gopf", price: 60000, count: 1, img: "./image/b5.jpg" },
    { id: 186, name: "gopg", price: 26000, count: 1, img: "./image/b6.jpg" },
    { id: 187, name: "goph", price: 16000, count: 1, img: "./image/j1.jpg" },
    { id: 188, name: "gopj", price: 56000, count: 1, img: "./image/c2.jpg" },
    { id: 189, name: "gopk", price: 76000, count: 1, img: "./image/c3.jpg" },
  ],
  کرمان: [
    { id: 191, name: "qgva", price: 30000, count: 1, img: "./image/b5.jpg" },
    { id: 192, name: "qgvd", price: 45000, count: 1, img: "./image/s1.jpg" },
    { id: 193, name: "qgvc", price: 50000, count: 1, img: "./image/b2.jpg" },
    { id: 194, name: "qgav", price: 75000, count: 1, img: "./image/logo3.jpg" },
    {
      id: 195,
      name: "qgbv",
      price: 255000,
      count: 1,
      img: "./image/logo7.jpg",
    },
    { id: 196, name: "qgvn", price: 215000, count: 1, img: "./image/s6.jpg" },
    { id: 197, name: "qgvv", price: 25000, count: 1, img: "./image/logo6.jpg" },
    { id: 198, name: "qgqv", price: 78000, count: 1, img: "./image/logo7.jpg" },
    { id: 199, name: "qgvm", price: 92000, count: 1, img: "./image/logo5.jpg" },
  ],
  کیش: [
    { id: 201, name: "fca", price: 25000, count: 1, img: "./image/a1.jpg" },
    { id: 202, name: "fcw", price: 43000, count: 1, img: "./image/a2.jpg" },
    { id: 203, name: "fcad", price: 87000, count: 1, img: "./image/a3.jpg" },
    { id: 204, name: "fcaf", price: 12000, count: 1, img: "./image/a4.jpg" },
    { id: 205, name: "fcav", price: 265000, count: 1, img: "./image/a5.jpg" },
    { id: 206, name: "fcaa", price: 95000, count: 1, img: "./image/a6.jpg" },
    { id: 207, name: "fcza", price: 876000, count: 1, img: "./image/b6.jpg" },
    { id: 208, name: "fcxa", price: 32000, count: 1, img: "./image/j6.jpg" },
    { id: 209, name: "fcav", price: 55000, count: 1, img: "./image/logo6.jpg" },
  ],

  شیراز: [
    { id: 211, name: "wad", price: 25000, count: 1, img: "./image/a1.jpg" },
    { id: 212, name: "was", price: 44000, count: 1, img: "./image/b2.jpg" },
    { id: 213, name: "waa", price: 65000, count: 1, img: "./image/j3.jpg" },
    { id: 214, name: "wav", price: 276000, count: 1, img: "./image/logo5.jpg" },
    { id: 215, name: "wab", price: 69000, count: 1, img: "./image/a5.jpg" },
    { id: 216, name: "wal", price: 255000, count: 1, img: "./image/j6.jpg" },
    { id: 217, name: "waq", price: 85000, count: 1, img: "./image/a6.jpg" },
    { id: 218, name: "waz", price: 77000, count: 1, img: "./image/s6.jpg" },
    { id: 219, name: "wax", price: 99000, count: 1, img: "./image/b6.jpg" },
  ],
  بندرعباس: [
    { id: 221, name: "رضا", price: 25000, count: 1, img: "./image/food.jpg" },
    { id: 222, name: "حسین", price: 28000, count: 1, img: "./image/logo1.jpg" },
    { id: 223, name: "سی", price: 28000, count: 1, img: "./image/j6.jpg" },
    { id: 224, name: "مج", price: 55000, count: 1, img: "./image/b2.jpg" },
    { id: 225, name: "العربی", price: 78000, count: 1, img: "./image/a3.jpg" },
    { id: 226, name: "متحد", price: 89000, count: 1, img: "./image/logo8.jpg" },
    {
      id: 227,
      name: "بارسلونا",
      price: 13000,
      count: 1,
      img: "./image/b5.jpg",
    },
    { id: 228, name: "الاتحاد", price: 73000, count: 1, img: "./image/s6.jpg" },
    { id: 229, name: "النصر", price: 66000, count: 1, img: "./image/s1.jpg" },
  ],
};

//! Foreach Div Restoran
const spanEntekhabCity = $.querySelector(".spanEntekhabCity");
let DivFrag = null;

let fragment = $.createDocumentFragment();
function setCity(sitys, city) {
  localStorage.setItem("city", city);
  let city1 = ($.querySelector(".Span-City").innerHTML = city);

  sitys[city1].forEach(function (o) {
    DivFrag = $.createElement("div");
    DivFrag.className = "shadow-lg rounded-lg d cursor-pointer ";
    DivFrag.id = o.id;
    DivFrag.innerHTML +=
      '  <div class="w-full h-[180px] overflow-hidden"> <img src=' +
      o.img +
      ' alt="" class="rounded-lg w-full h-full" /> </div> <div class="px-3 py-0"> <div class="my-3 text-sm flex justify-between"> <div><span>' +
      o.name +
      "</span></div> <div><span class='price'>" +
      o.price.toLocaleString() +
      '</span></div> </div> <div class="sm:flex sm:justify-between  mb-3"> <div class="text-xs sm:text-sm"> <span class=""> زمان آماده سازی : </span> <span class="">30 دقیقه</span> </div> <div class="text-end my-3 md:m-0"> <span>4.6 <i class="fa fa-star text-warning"></i> </span> </div> </div> </div>  ';
    fragment.append(DivFrag);
  });
}
function sity() {
  let city = localStorage.getItem("city").toString();
  spanEntekhabCity.innerHTML = "شهر انتخابی شما : " + city;
  setCity(sitys, city);
  $.querySelector("#Restoran").append(fragment);
}
sity();

//* Array BAsket Shop
let USerBasketShop = [].concat(JSON.parse(localStorage.getItem("prouct")));
const BasketShopDiv = $.getElementById("Basket-Shop");
const NotBasketShop = $.querySelector(".NotBasket");
$.querySelectorAll(".d").forEach(function (o) {
  o.addEventListener("click", function (event) {
    l(o.id);
    elanBasketShop();
    priceAll(USerBasketShop);

    DivBasketShop.style.display = "block";
    notBasket(USerBasketShop);
  });
});
function setlocal(arra) {
  localStorage.setItem("prouct", JSON.stringify(arra));
}
function l(id) {
  let y = spanCity[1].innerHTML;
  let r = sitys[y].find(function (o) {
    return o.id === Number(id);
  });
  let a = USerBasketShop.some(function (o) {
    return o.id === Number(id);
  });
  let b = USerBasketShop.findIndex(function (o) {
    return o.id === Number(id);
  });
  if (a) {
    USerBasketShop[b].count++;
    priceAll(USerBasketShop);

    setlocal(USerBasketShop);
  } else {
    USerBasketShop.push(r);
    setlocal(USerBasketShop);
  }

  CreateProduct(USerBasketShop);
}
const Div = $.querySelector("#f");
let mahsol = JSON.parse(localStorage.getItem("prouct"));

function v(array) {
  Div.innerHTML = "";
  array.forEach((o) => {
    Div.innerHTML +=
      '<div class="bg-slate-50 p-3 px-5 rounded-xl my-2 " style="border: 1px solid #ccc" > <p class="my-3">' +
      o.name +
      '</p> <div class="flex justify-between"> <div> <span>' +
      o.price.toLocaleString() +
      '</span> </div> <div class="flex"> <div class="p-1 cursor-pointer minus" id=' +
      o.img +
      '> <i class="fa fa-minus" style="color: var(--main-color); font-size: 12px" ></i> </div> <div class="my-auto"> <span class="mx-2">' +
      o.count +
      '</span> </div> <div class="p-1 cursor-pointer plus" id=' +
      o.img +
      '> <i class="fa fa-plus"  style="color: var(--main-color); font-size: 12px" ></i> </div> </div> </div> </div>';
  });
  const btnPlus = Div.querySelectorAll(".plus");
  const btnMinus = Div.querySelectorAll(".minus");
  btnPlus.forEach((btn) => {
    btn.addEventListener("click", () => {
      plusMahsol(btn.id);
      v(mahsol);
      priceAll(mahsol);
      notBasket(USerBasketShop);
    });
  });
  btnMinus.forEach((btn) => {
    btn.addEventListener("click", () => {
      minusMahsol(btn.id);
      v(mahsol);
      priceAll(mahsol);
      elanBasketShop();
      notBasket(USerBasketShop);
    });
  });
}

function plusMahsol(id) {
  let Find = mahsol.findIndex((e) => {
    return e.img === id;
  });
  console.log(Find);
  mahsol[Find].count++;
  localStorage.setItem("prouct", JSON.stringify(mahsol));
}
function minusMahsol(id) {
  let Find = mahsol.findIndex((e) => {
    return e.img === id;
  });
  mahsol[Find].count--;
  localStorage.setItem("prouct", JSON.stringify(mahsol));

  if (mahsol[Find].count < 1) {
    mahsol[Find].count = 1;
    mahsol.splice(Find, 1);
    v(mahsol);
    localStorage.setItem("prouct", JSON.stringify(mahsol));
  }
}
function CreateProduct(array) {
  BasketShopDiv.innerHTML = "";
  array.forEach(function (o) {
    BasketShopDiv.innerHTML +=
      '<div class="bg-slate-50 p-3 px-5 rounded-xl my-2 " style="border: 1px solid #ccc" > <p class="my-3">' +
      o.name +
      '</p> <div class="flex justify-between"> <div> <span>' +
      o.price.toLocaleString() +
      '</span> </div> <div class="flex"> <div class="p-1 cursor-pointer minus" id=' +
      o.img +
      '> <i class="fa fa-minus" style="color: var(--main-color); font-size: 12px" ></i> </div> <div class="my-auto"> <span class="mx-2">' +
      o.count +
      '</span> </div> <div class="p-1 cursor-pointer plus" id=' +
      o.img +
      '> <i class="fa fa-plus"  style="color: var(--main-color); font-size: 12px" ></i> </div> </div> </div> </div>';
  });

  const btnplusProduct = BasketShopDiv.querySelectorAll(".plus");
  btnplusProduct.forEach(function (btn) {
    btn.addEventListener("click", () => {
      plus(btn.id);

      notBasket(USerBasketShop);
    });
  });
  const btnminusProduct = BasketShopDiv.querySelectorAll(".minus");
  btnminusProduct.forEach(function (btn) {
    btn.addEventListener("click", () => {
      minus(btn.id);
      notBasket(USerBasketShop);
    });
  });
}
function plus(idProduct) {
  let a = USerBasketShop.findIndex(function (p) {
    return p.img === idProduct;
  });
  USerBasketShop[a].count++;
  CreateProduct(USerBasketShop);
  setlocal(USerBasketShop);
  priceAll(USerBasketShop);
}
function minus(idProduct) {
  let a = USerBasketShop.findIndex(function (p) {
    return p.img === idProduct;
  });
  USerBasketShop[a].count--;
  CreateProduct(USerBasketShop);
  setlocal(USerBasketShop);
  if (USerBasketShop[a].count < 1) {
    USerBasketShop[a].count = 1;
    USerBasketShop.splice(a, 1);
    CreateProduct(USerBasketShop);
    setlocal(USerBasketShop);
  }
  elanBasketShop();
  priceAll(USerBasketShop);
}
window.addEventListener("load", function () {
  let r = JSON.parse(localStorage.getItem("prouct"));
  if (!r) {
    localStorage.setItem("prouct", JSON.stringify([]));
  } else {
    elanBasketShop();
    USerBasketShop = r;
    priceAll(USerBasketShop);
    CreateProduct(USerBasketShop);
  }
});
$.getElementById("clear-Local").addEventListener("click", function () {
  localStorage.setItem("prouct", JSON.stringify([]));
  for (let i = 0; i < USerBasketShop.length; i++) {
    USerBasketShop[i].count = 1;
  }
  USerBasketShop = [];
  priceAll(USerBasketShop);
  CreateProduct(USerBasketShop);
  NotBasketShop.style.display = "block";
  elanBasketShop();
});

function priceAll(arra) {
  let sum = 0;
  arra.forEach(function (o) {
    sum += o.count * o.price;
  });
  let y = $.querySelector(".totalprice");
  y.innerHTML = sum.toLocaleString() + " تومان ";
}
function elanBasketShop() {
  let r = JSON.parse(localStorage.getItem("prouct"));

  if (!r) {
    localStorage.setItem("prouct", JSON.stringify([]));
  } else {
    if (r.length === 0) {
      $.querySelectorAll(".elanBasketTedad").forEach((o) => {
        o.style.display = "none";
      });
    } else {
      $.querySelectorAll(".elanBasketTedad").forEach((o) => {
        o.innerHTML = r.length;
        o.style.display = "block";
      });
    }
  }
}

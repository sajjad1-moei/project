const $ = document;
let man = ["react", "reactnative", "mo"];
$.querySelector("button").addEventListener("click", () => {
  let value = $.querySelector("input").value;
  let y = man.includes(value);
  let r = man.filter((a) => {
    return a === value;
  });
  console.log(r);
  if (y) {
    $.querySelector("p").innerHTML = r;
  } else {
    $.querySelector("p").innerHTML = "مقدار وجود ندارد";
  }
});

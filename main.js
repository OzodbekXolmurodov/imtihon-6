const category = document.querySelector(".catigore__div");
const url = "https://fakestoreapi.com/products";

async function getCategory(enpoint) {
  const respons = await fetch(`${url}/${enpoint}`);
  respons.json().then((res) => creatCategore(res));
}
getCategory("categories");

function creatCategore(data) {
  data.forEach((item) => {
    const li = document.createElement("li");
    const dataEl = document.createElement("data");
    const ul = document.createElement("ul");
    const img = document.createElement("img");
    img.src = "imgs/free-icon-font-download-3917768.svg";
    img.className = "catigore__img";
    li.className = "catigore__li";
    ul.className = "catigore__ul";
    dataEl.innerHTML = item;

    dataEl.setAttribute("valeu", item);
    ul.appendChild(img);
    li.appendChild(dataEl);
    ul.appendChild(li);
    category.appendChild(ul);
    console.log(ul);
  });
}

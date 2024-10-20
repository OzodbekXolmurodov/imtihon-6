const wrapper = document.querySelector(".products__div-big");
const loadMoreButton = document.querySelector(".products__btn");
const categoryList = document.querySelector(".catigore__ul");
const loding = document.querySelector(".loding");
const siinUp = document.querySelector("#signUp");

const BASE_URL = "https://fakestoreapi.com";

let lemitCount = 8;
let offset = 1;
let verebl = 2;

async function getData(endpoint, count) {
  try {
    const response = await fetch(
      `${BASE_URL}/${endpoint}?limit=${lemitCount * count}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    creatProduct(data);
  } catch (error) {
    console.error("Fetch error: ", error);
  } finally {
    loding.style.display = "none";
  }
}
getData("products", offset);

function creatProduct(data) {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }
  data.forEach((product) => {
    const card = document.createElement("div");
    card.dataset.id = product.id;
    card.className = "products__div-main";
    card.innerHTML = `
  <img class="products__hert" src="imgs/Fill Heart.png" alt="herta" />
        <img class="products__see" src="imgs/Fill Eye.png" alt="eus" />
          <div class="products__div-img">
            <img data-id=${product.id} class="products__img" src=${product.image} alt="rasim" />
            <div class="add-to-cart">Add To Cart</div>
          </div>
          <p class="products__tatli">${product.title}</p>
          <div class="products__div-text">
            <p class="products__pris">$${product.price}</p>
            <div class="products__star">
              <img src="imgs/Vector.svg" alt="start" />
              <img src="imgs/Vector.svg" alt="start" />
              <img src="imgs/Vector.svg" alt="start" />
              <img src="imgs/Vector (1).svg" alt="start" />
              <img src="imgs/Vector (1).svg" alt="start" />
            </div>
            <p class="products__p">(${product.rating.count})</p>
          </div>
        
    `;
    wrapper.appendChild(card);
  });
}
loadMoreButton.addEventListener("click", () => {
  offset++;
  getData("products", offset);
});

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

    dataEl.setAttribute("valeu", `/category/${item}`);

    dataEl.addEventListener("click", (e) => {
      getData(`products${e.target.getAttribute("valeu")}`, offset);
    });
    ul.appendChild(img);
    li.appendChild(dataEl);
    ul.appendChild(li);
    category.appendChild(ul);
  });
}

wrapper.addEventListener("click", (e) => {
  if (e.target.className === "products__img") {
    let id = e.target.closest(".products__div-main").dataset.id;
    console.log(id);

    open(`pegs/prodacts.html?q=${id}`, "_self");
  }
});

siinUp;

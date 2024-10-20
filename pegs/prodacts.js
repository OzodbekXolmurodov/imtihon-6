const content = document.querySelector(".body__div");
const Bse__url = "https://fakestoreapi.com";

async function getData() {
  let qurey = new URLSearchParams(window.location.search);
  let id = qurey.get("q");

  const response = await fetch(`${Bse__url}/products/${id}`);
  response.json().then((res) => creataCard(res));
}
getData();

function creataCard(data) {
  console.log(data);
  content.innerHTML = `
         <div class="body__div-rht">
          <img class="body__img" src=${data.image} alt="salom dunyo" />
        </div>
        <div class="body__str">
          <p class="body__tatle">${data.title}</p>
          <div class="body__start">
            <img class="body__star" src="../imgs2/Four Star.svg" alt="salom" />
            <p class="body__rewis">(${data.rating.count})</p>
          </div>
          <p class="body__pris">$${data.price}</p>
          <p class="body__p">${data.description}</p>
          <hr />
          <img class="body__moshina" src="../imgs2/Frame 911.svg" alt="porsh" />
        </div>
    `;
}

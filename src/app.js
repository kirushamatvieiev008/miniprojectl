import debounce from "../node_modules/lodash.debounce";

const searchInp = document.querySelector(".searchInp");
const gallery = document.querySelector(".gallery");
const moreBtn = document.querySelector(".more");

let search = "mango";
let page = 1;
const API_KEY = "55316744-d36208193e3c53252b47581ad";

const innerphotos = (arr) => {
  const item = arr
    .map((el) => {
      return `
    <li class="photo-card">
        <img src="${el.webformatURL}" alt="#" />
        <div class="stats">
            <p class="stats-item">
            <i class="material-icons">thumb_up</i>
                ${el.likes}
            </p>
            <p class="stats-item">
                <i class="material-icons">visibility</i>
                ${el.views}
            </p>
            <p class="stats-item">
                <i class="material-icons">comment</i>
                    ${el.comments}
            </p>
            <p class="stats-item">
                <i class="material-icons">cloud_download</i>
                ${el.downloads}
            </p>
        </div>
    </li>`;
    })
    .join("");

  gallery.insertAdjacentHTML("beforeend", item);
};

const getData = () =>
  fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=5&key=${API_KEY}`,
  ).then((res) => res.json());

// let searchInside = '';

let globalSearch = "";

searchInp.addEventListener(
  "input",
  debounce((event) => {
    search = event.target.value.trim();
    console.log(search);

    if (search === '') {
      gallery.innerHTML = '';
      moreBtn.style.display = "none";
    } else {
      globalSearch = search;
      page = 1;
      gallery.innerHTML = "";
      getData().then((res) => {
        innerphotos(res.hits);
      });
      moreBtn.style.display = "block";
    }


    // getData().then((res) => {
    //   // console.log(res);
    //   innerphotos(res.hits);
    //   console.log(page);

    // });
  }, 1000),
);
// console.log(getData);

moreBtn.addEventListener("click", (event) => {
  page++;
  getData().then((res) => {
    innerphotos(res.hits);
    // console.log(res.totalHits);
    // console.log(res.hits);
    console.log(page);
    // console.log(res.hits.length * page);

    if (res.totalHits <= res.hits.length * page) {
      moreBtn.style.display = "none";
      return;
    }
  });
});

const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
/* Si3dC0hzRrQdULM3TPRpyokXfQbMnZAVEKyyJHcCH0ZgSVaXg9PfPIAt */

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector("search-results");
const showMoreButtonEl =  document.getElementById("show-more-button");

let inputData = ""
let page = 1;

async function searchImages(){
    inputData = searchInputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResultsEl.innerHTML = "";
      }
    const results = data.results;

    results.map((results)=>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultsEl.appendChild(imageWrapper);
    });

    page++;
    

    if (page > 1){
        showMoreButton.style.display = block;
    }

    console.log(results);
}


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMoreButtonEl.addEventListener("click", ()=>{
    searchImages();
})


var searchBtnB;
var searchInput;
var searchBtnA;
var outcome;
var phpFile = "world.php";
var getCountry = "?country=";
var getContext = "&context=";


window.onload = function() {
    searchInput = document.getElementById("country");
    searchBtnA = document.getElementById("lookup");
    searchBtnB = document.getElementById("lookup2");
    searchBtnA.addEventListener("click", searchBtnHandler);
    searchBtnB.addEventListener("click", searchBtnCHandler);
    outcome = document.getElementById("result");
}

function searchBtnHandler(e) {
    e.preventDefault();
    let url = createURL("cities");
    fetcher(url);
}

function searchBtnCHandler(e) {
    e.preventDefault();
    let url = createURL("countries");
    fetcher(url);
}


function createURL(contxt) {
    let country = getCountry + searchInput.value.trim();
    let context = getContext + contxt;
    let url = phpFile + country + context;
    return url;
}

function fetcher(url) {
    fetch(url).then(response => response.text()).then(data => outcome.innerHTML = data);
}
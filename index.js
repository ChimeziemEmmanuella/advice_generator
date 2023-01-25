const adviceContainer = document.querySelector(".quote-container");
const adviceID = document.querySelector('.adviceID');
const quoteText = document.querySelector('.quote-text');
const dice = document.querySelector(".dice-container");
const loader = document.querySelector(".loader")

let apiAdvices = [];
adviceContainer.style.display = "none";

// show loader
function showLoader() {
    loader.style.display = "block";
    adviceContainer.style.display = "none";
}

// hide loader
function hideLoader() {
    loader.style.display = "none";
    adviceContainer.style.display = "block";
}

function newAdvice() {
    showLoader();
    quoteText.textContent = apiAdvices.slip.advice;
    adviceID.textContent = apiAdvices.slip.id;
    hideLoader();
}

// Get Advices from API
async function getAdvices(){
    const apiUrl = "https://api.adviceslip.com/advice";
    try {
        const response = await fetch(apiUrl);
        apiAdvices = await response.json();
        newAdvice();
    }catch(e) {
        alert(e)
    }
}

getAdvices()

dice.addEventListener("click", () => {
    location.reload()
})
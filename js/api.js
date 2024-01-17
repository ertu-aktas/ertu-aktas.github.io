// initialize needed variables
const catBtn = document.getElementById('catBtn');
const catImg = document.getElementById('catImg');
const apiUrl = "https://api.thecatapi.com/v1/images/search";

// add event listener, so that when button is clicked image is displayed
catBtn.addEventListener('click', async function () {
  try {
    const catData = await getDataAboutCat(apiUrl);
    // set source of an image to url from data got from api
    catImg.src = catData[0].url;
  } catch(err) {
    console.warn("there was an error", err);
  }
});

/**
 * fetch data about the cat from cat API
**/
async function getDataAboutCat(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch(err) {
    console.warn("there was an error", err);
  }
}
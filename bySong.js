const button = document.getElementById("search_button");
const result = document.getElementById("result");
const query = document.getElementById("query");
const url = "https://taylorswiftapi.onrender.com/get?song=";
const options = {
  method: "GET",
};

button.addEventListener("click", async () => {
  const selected = query.value;

  const response = await fetch(`${url}${selected}`);
  try {
    const info = await response.json();
    result.innerHTML = `<div class="lyric" id="show"> <h3>"${info.quote}"</h3></div><div class="info"><h5>-Taylor Swift <br> ${info.song}<br>${info.album}</h5></div>`;
  } catch (error) {
    result.innerHTML = `<div class="lyric" id="show"> <h3>No Taylor Swift song matches search</h3></div>`;
  }
});

const button = document.getElementById("search_button");
const result = document.getElementById("result");
const query = document.getElementById("query");
const url = "https://taylorswiftapi.onrender.com/get?song=";
const options = {
  method: "GET",
};

button.addEventListener("click", async () => {
  const selected = query.value;
  console.log(selected);
  const response = await fetch(`${url}${selected}`);
  const info = await response.json();
  console.log(info);
  result.innerHTML = `<div class="lyric" id="show"> <h3>"${info.quote}"</h3></div><div class="info"><h5>-Taylor Swift <br> ${info.song}<br>${info.album}</h5></div>`;
});

const albums = document.querySelectorAll('.button');
const result = document.getElementById('result');
const url = "https://taylorswiftapi.onrender.com/get?album=";
const options ={
  method: "GET"
}
albums.forEach(button=>{
  button.addEventListener('click', async()=>{
    const selected = button.id;
    const response = await fetch(`${url}${selected}`)
    const info = await response.json();
    console.log(info)
    result.innerHTML= `<div class="lyric" id="show"> <h3>"${info.quote}"</h3></div><div class="info"><h5>-Taylor Swift <br> ${info.song}<br>${info.album}</h5></div>`
  })
})


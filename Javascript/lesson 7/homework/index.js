let getData = [];
const $listForecast = document.getElementById('list-forecast');
const $city = document.getElementById("city");

(async function fetchData() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`);
    const data = await res.json();
    getData = data.list;
    console.log(data);
    console.log(getData);
    renderForecast()
})();

const CardItem = (forecast) => {
    return `
        <div class="col-md-3 mb-4"> 
            <div class="card" style="width: 18rem;"> 
                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="${forecast.weather[0].description}" class="card-img-top"> 
                <div class="card-body"> 
                    <p class="card-text">${forecast.dt_txt}</p>
                    <h5 class="card-title">Nhiệt độ: ${forecast.main.temp} </h5> 
                    <p class="card-text">${forecast.weather[0].description}</p>  
                </div> 
            </div> 
        </div>
    `
}

function renderForecast() {
    getData.forEach((forecast) => {
        $listForecast.innerHTML += CardItem(forecast);
    })
}


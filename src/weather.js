const API_KEY = "2100532fbf33d4f9f3a9f1cde25b908c";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
function onGeoOk(){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetch(url)
    .then((response) => response.json()
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    })); //fetch는 javascript가 알아서 url을 불러줌
}
function onGeoError(){
    alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); //인자 (성공적일때실행될함수,오류났을때실행될함수)
import $ from "jquery";
import "./style.css";

const city = $("#city");
async function getTemp() {
    let searchcity = city.val();
    let answer = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=
            ${process.env.weatherAPI}`,
        { mode: "cors" }
    );
    let citytemp = await answer.json();
    $("#info").text(citytemp.weather[0].main + " " + citytemp.main.temp);
}

$("#search").on("click", getTemp);

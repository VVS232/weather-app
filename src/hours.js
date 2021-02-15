import $ from "jquery";

export default function hourlyWeather(wholeInfo) {
    const $hourly = $("#hourly");
    for (let i = 0; i < 24; i++) {
        const hour = $hourly.find(`#hour${i}`);
        hour.find(".hourPic").attr({
            src: `http://openweathermap.org/img/wn/${wholeInfo.hourly[i].weather[0].icon}@2x.png`,
        });

        hour.find(".hourTemp").text(wholeInfo.hourly[i].temp + " °C");
    }
    hourlyInfo(wholeInfo);
}
//setting detailed info for every hour
function hourlyInfo(wholeInfo) {
    for (let i = 0; i < 24; i++) {
        Array.from(document.getElementsByClassName("hour")).forEach((hour) => {
            hourDetailedInfo(hour, wholeInfo);
        });
    }
    //showing info for current hour
    $("#hour0").trigger("click");
}

function hourDetailedInfo(hour, wholeInfo) {
    // get an hour number from ID by splitting the ID string;
    const hourNumber = hour.id.split("r")[1];
    hour.addEventListener("click", () => {
        $("#infoTemp").text(wholeInfo.hourly[hourNumber].temp + " °C");
        $("#infoFeels").text(wholeInfo.hourly[hourNumber].feels_like + " °C");
        $("#infoPressure").text(
            (wholeInfo.hourly[hourNumber].pressure / 1.333).toFixed(2) + " мм."
        );
        $("#infoHumid").text(wholeInfo.hourly[hourNumber].humidity + "%");
        $("#infoWindSpeed").text(
            wholeInfo.hourly[hourNumber].wind_speed + " м/с"
        );
        $("#infoVisibility").text(
            wholeInfo.hourly[hourNumber].visibility + " м"
        );
        $("#infoPop").text(
            (wholeInfo.hourly[hourNumber].pop * 100).toFixed(0) + "%"
        );
    });
}

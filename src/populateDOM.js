/* eslint-disable import/prefer-default-export */
import $ from "jquery";
import { setDates } from "./setDates";
import { getWholeInfo } from "./API-calls";

const city = $("#cityInput");

export async function populateInfo() {
    const wholeInfo = await getWholeInfo("Kiev");
    week(/*/wholeInfo*/);
    hourlyWeather(wholeInfo);
    weekInfo(wholeInfo);
}

function week(wholeInfo) {
    setDates();
}

export function setCurrent(current) {
    $("#title").text(`Погода в городе ${current.name}`);
    $("#currentCity").text(current.name);
    $("#currentTemp").text(current.main.temp + " °C");
    $("#feelsLike").text(`Чувствуется как ${current.main.feels_like} °C`);
    $("#currentPic").attr({
        src: `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
    });
}

function hourlyWeather(wholeInfo) {
    const $hourly = $("#hourly");
    for (let i = 0; i < 24; i++) {
        const hour = $hourly.find(`#hour${i}`);
        hour.find(".hourTime").after(
            $("<img>").attr({
                src: `http://openweathermap.org/img/wn/${wholeInfo.hourly[i].weather[0].icon}@2x.png`,
                class: "hourPic",
            })
        );
        hour.find(".hourTemp").text(wholeInfo.hourly[i].temp + " °C");
    }
    hourlyInfo(wholeInfo);
}

function hourlyInfo(wholeInfo) {
    for (let i = 0; i < 24; i++) {
        Array.from(document.getElementsByClassName("hour")).forEach((hour) => {
            // get an hour number from ID by splitting the ID string;
            const hourNumber = hour.id.split("r")[1];
            hour.addEventListener("click", () => {
                $("#infoTemp").text(wholeInfo.hourly[hourNumber].temp + " °C");
                $("#infoFeels").text(
                    wholeInfo.hourly[hourNumber].feels_like + " °C"
                );
                $("#infoPressure").text(
                    (wholeInfo.hourly[hourNumber].pressure / 1.333).toFixed(2) +
                        " мм."
                );
                $("#infoHumid").text(
                    wholeInfo.hourly[hourNumber].humidity + "%"
                );
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
        });
    }
    $("#hour0").trigger("click");
}

function weekInfo(wholeInfo) {
    weekTemps(wholeInfo);
    weekWeather(wholeInfo);
    weekPressure(wholeInfo);
    weekHumidity(wholeInfo);
    weekSpeed(wholeInfo);
    weekPop(wholeInfo);
}

function weekTemps(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekTemp").after(
            $("<p></p>")
                .attr({ class: "weekTemp" })
                .html(
                    `${wholeInfo.daily[i].temp.max} °C<br>${wholeInfo.daily[i].temp.min} °C`
                )
        );
    }
}
function weekWeather(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekFeel").after(
            $("<div></div>")
                .attr({ class: "weather-img-container" })
                .append(
                    $("<img>").attr({
                        class: "weekFeel",
                        src: `http://openweathermap.org/img/wn/${wholeInfo.daily[i].weather[0].icon}@2x.png`,
                    })
                )
        );
    }
}
function weekPressure(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekPressure").after(
            $("<p></p>")
                .attr({ class: "weekPressure" })
                .text(wholeInfo.daily[i].pressure + " мм.")
        );
    }
}
function weekHumidity(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekHumidity").after(
            $("<p></p>")
                .attr({ class: "weekHumidity" })
                .text(wholeInfo.daily[i].humidity + "%")
        );
    }
}

function weekSpeed(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekSpeed").after(
            $("<p></p>")
                .attr({ class: "weekSpeed" })
                .text(wholeInfo.daily[i].wind_speed + " м/с")
        );
    }
}

function weekPop(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekPop").after(
            $("<p></p>")
                .attr({ class: "weekPop" })
                .text((wholeInfo.daily[i].pop * 100).toFixed(0) + "%")
        );
    }
}

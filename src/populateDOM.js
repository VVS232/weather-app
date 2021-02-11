/* eslint-disable import/prefer-default-export */
import $ from "jquery";
import { setDates } from "./setDates";
import { getWholeInfo } from "./API-calls";

const city = $("#cityInput");
const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
];
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
    $("#currentCity").text(current.name);
    $("#currentTemp").text(current.main.temp);
    $("#feelsLike").text(`Чувствуется как ${current.main.feels_like}`);
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
            })
        );
        hour.find(".hourTemp").text(wholeInfo.hourly[i].temp);
    }
    hourlyInfo(wholeInfo);
}

function hourlyInfo(wholeInfo) {
    for (let i = 0; i < 24; i++) {
        Array.from(document.getElementsByClassName("hour")).forEach((hour) => {
            // get an hour number from ID by splitting the ID string;
            const hourNumber = hour.id.split("r")[1];
            hour.addEventListener("click", () => {
                $("#infoTemp").text(wholeInfo.hourly[hourNumber].temp);
                $("#infoFeels").text(wholeInfo.hourly[hourNumber].feels_like);
                $("#infoPressure").text(wholeInfo.hourly[hourNumber].pressure);
                $("#infoHumid").text(wholeInfo.hourly[hourNumber].humidity);
                $("#infoWindSpeed").text(
                    wholeInfo.hourly[hourNumber].wind_speed
                );
                $("#infoVisibility").text(
                    wholeInfo.hourly[hourNumber].visibility
                );
                $("#infoPop").text(wholeInfo.hourly[hourNumber].pop);
            });
        });
    }
    $("#hour0").trigger("click");
}

function weekInfo(wholeInfo) {
    weekTemps(wholeInfo);
    weekFeels(wholeInfo);
    weekPressure(wholeInfo);
    weekHumidity(wholeInfo);
    weekSpeed(wholeInfo);
    weekPop(wholeInfo);
}

function weekTemps(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekTemp").after(
            $("<p></p>").text(
                wholeInfo.daily[i].temp.min + "/" + wholeInfo.daily[i].temp.max
            )
        );
    }
}
function weekFeels(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekFeel").after(
            $("<p></p>").text(wholeInfo.daily[i].feels_like.day)
        );
    }
}
function weekPressure(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekPressure").after(
            $("<p></p>").text(wholeInfo.daily[i].pressure)
        );
    }
}
function weekHumidity(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekHumidity").after(
            $("<p></p>").text(wholeInfo.daily[i].humidity)
        );
    }
}

function weekSpeed(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekSpeed").after($("<p></p>").text(wholeInfo.daily[i].wind_speed));
    }
}

function weekPop(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        $("#weekPop").after($("<p></p>").text(wholeInfo.daily[i].pop));
    }
}

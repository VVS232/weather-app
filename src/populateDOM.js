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
    let wholeInfo = await getWholeInfo("Kiev");
    week(/*/wholeInfo*/);
    hourlyWeather(wholeInfo);
}

function week(wholeInfo) {
    setDates();
}

export function setCurrent(current) {
    $("#currentCity").text(current.name);
    $("#currentTemp").text(current.main.temp);
}

function hourlyWeather(wholeInfo) {
    const $hourly = $("#hourly");
    for (let i = 0; i < 24; i++) {
        let hour = $hourly.find(`#hour${i}`);
        hour.find(".hourTemp").text(wholeInfo.hourly[i].temp);
    }
}

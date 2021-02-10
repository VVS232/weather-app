/* eslint-disable import/prefer-default-export */
import $ from "jquery";
import { setWeekDays } from "./setDates";
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
}

function week(wholeInfo) {
    setWeekDays();
}

export function setCurrent(current) {
    $("#currentCity").text(current.name);
    $("#currentTemp").text(current.main.temp);
}

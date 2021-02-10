import { getWholeInfo } from "./API-calls";
import $ from "jquery";
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
    //  let wholeInfo = await getWholeInfo(city.val());
    week(/*/wholeInfo*/);
}

function week(wholeInfo) {
    setWeekDates();
}

function setWeekDates() {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        $(`#day${i}`)
            .find(".dayDate")
            .text(today.getDate() + i);
    }
}

/* eslint-disable import/prefer-default-export */
import $ from "jquery";

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
    //  let wholeInfo = await getWholeInfo(city.val());
    week(/*/wholeInfo*/);
}

function week(wholeInfo) {
    setWeekDays();
}

function setWeekDays() {
    const today = new Date();
    setDayName(today);
    setDayDate(today);
    setDayMonth(today);
}

function setDayName(today) {
    const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    for (let i = 0; i < 7; i++) {
        $(`#day${i}`)
            .find(`.dayName`)
            .text(days[(today.getDay() + i) % 7]);
    }
}

function setDayDate(today) {
    for (let i = 0; i < 7; i++) {
        $(`#day${i}`)
            .find(".dayDate")
            .text(today.getDate() + i);
    }
}

function setDayMonth(today) {
    const months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];
    for (let i = 0; i < 7; i++) {
        let day = new Date();
        day.setDate(new Date().getDate() + i);
        $(`#day${i}`).find(".dayMonth").text(months[day.getMonth()]);
    }
}

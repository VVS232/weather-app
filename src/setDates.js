import $ from "jquery";
export function setWeekDays() {
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
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];
    for (let i = 0; i < 7; i++) {
        let day = new Date();
        day.setDate(new Date().getDate() + i);
        $(`#day${i}`).find(".dayMonth").text(months[day.getMonth()]);
    }
}

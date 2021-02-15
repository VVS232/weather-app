import $ from "jquery";

//  putting weekly info into the table
export default function weekInfo(wholeInfo) {
    for (let i = 0; i < 7; i++) {
        weekTemps(wholeInfo, i);
        weekWeather(wholeInfo, i);
        weekPressure(wholeInfo, i);
        weekHumidity(wholeInfo, i);
        weekSpeed(wholeInfo, i);
        weekPop(wholeInfo, i);
    }
}

function weekTemps(wholeInfo, i) {
    $(`#day${i}`)
        .find(".weekTemp")
        .html(
            `${wholeInfo.daily[i].temp.max.toFixed(0)} °C<br>${wholeInfo.daily[
                i
            ].temp.min.toFixed(0)} °C`
        );
}

function weekWeather(wholeInfo, i) {
    $(`#day${i}`)
        .find(".weekFeel")
        .attr({
            src: `https://openweathermap.org/img/wn/${wholeInfo.daily[i].weather[0].icon}@2x.png`,
        });
}
function weekPressure(wholeInfo, i) {
    $(`#day${i}`)
        .find(".weekPressure")
        .text(`${wholeInfo.daily[i].pressure} мм.`);
}
function weekHumidity(wholeInfo, i) {
    $(`#day${i}`).find(".weekHumidity").text(`${wholeInfo.daily[i].humidity}%`);
}

function weekSpeed(wholeInfo, i) {
    $(`#day${i}`)
        .find(".weekSpeed")
        .text(`${wholeInfo.daily[i].wind_speed} м/с`);
}

function weekPop(wholeInfo, i) {
    $(`#day${i}`)
        .find(".weekPop")
        .text(`${(wholeInfo.daily[i].pop * 100).toFixed(0)}%`);
}

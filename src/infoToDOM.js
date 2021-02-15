/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import $ from "jquery";
import translate from "translate";
import setDates from "./setDates";
import weatherAPI from "./API-calls";
import hourlyWeather from "./hours";
import weekInfo from "./weeks";

// translation engine for translate library
translate.engine = "libre";

export async function populateInfo(city = "Kiev") {
    const regex = new RegExp("[A-Za-z]");
    let wholeInfo;
    // checking if city is written in Eng or Rus
    try {
        document.getElementById("errorMes").style.display = "none";
        document.getElementById("cityInput").classList.remove("errorInput");

        if (regex.test(city)) {
            wholeInfo = await weatherAPI.oneCall(city);
            setCurrent(await weatherAPI.getCurrect(city));
        } else {
            wholeInfo = await weatherAPI.oneCall(await trans(city, "ru", "en"));
            setCurrent(
                await weatherAPI.getCurrect(await trans(city, "ru", "en"))
            );
        }
    } catch (error) {
        document.getElementById("errorMes").style.display = "initial";
        document.getElementById("cityInput").classList.add("errorInput");
    }

    setDates();

    hourlyWeather(wholeInfo);

    weekInfo(wholeInfo);
}

async function setCurrent(current) {
    $("#title").text(
        `Погода в городе ${await trans(current.name, "en", "ru")}`
    );
    $("#currentCity").text(await trans(current.name, "en", "ru"));
    $("#currentTemp").text(current.main.temp + " °C");
    $("#feelsLike").text(`Чувствуется как ${current.main.feels_like} °C`);
    $("#currentPic").attr({
        src: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
    });
}

async function trans(text, fromLang, toLang) {
    const response = await translate(text, { from: fromLang, to: toLang });

    return response;
}

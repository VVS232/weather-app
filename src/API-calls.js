import { setCurrent } from "./populateDOM";

export async function getWholeInfo(city) {
    const wholeInfo = getCityCurrent(city);
    return wholeInfo;
}

async function getCityCurrent(city) {
    const answer = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.weatherAPI}&units=metric`,
        { mode: "cors" }
    );
    const current = await answer.json();
    setCurrent(current);
    const wholeInfo = lonLat(current);
    return wholeInfo;
}

async function lonLat(current) {
    const { lon } = current.coord;
    const { lat } = current.coord;
    const wholeInfo = oneCall(lon, lat);
    return wholeInfo;
}

async function oneCall(lon, lat) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.weatherAPI}&units=metric&lang=ru`,
        { mode: "cors" }
    );
    const wholeInfo = await response.json();
    return wholeInfo;
}

import { setCurrent } from "./populateDOM";

export async function getWholeInfo(city) {
    let wholeInfo = getCityCurrent(city);
    return wholeInfo;
}

async function getCityCurrent(city) {
    let answer = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.weatherAPI}&units=metric`,
        { mode: "cors" }
    );
    let current = await answer.json();
    setCurrent(current);
    let wholeInfo = lonLat(current);
    return wholeInfo;
}

async function lonLat(current) {
    let lon = current.coord.lon;
    let lat = current.coord.lat;
    let wholeInfo = oneCall(lon, lat);
    return wholeInfo;
}

async function oneCall(lon, lat) {
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.weatherAPI}&units=metric`,
        { mode: "cors" }
    );
    let wholeInfo = await response.json();
    return wholeInfo;
}

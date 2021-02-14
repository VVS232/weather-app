export default class weatherAPI {
    static async getCurrect(city) {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.weatherAPI}&units=metric`,
            { mode: "cors" }
        );
        const current = await response.json();
        return current;
    }

    static async lonLat(city) {
        const current = await this.getCurrect(city);
        const position = {
            lon: current.coord.lon,

            lat: current.coord.lat,
        };
        return position;
    }

    static async oneCall(city) {
        const position = await this.lonLat(city);
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lon}&appid=${process.env.weatherAPI}&units=metric&lang=ru`,
            { mode: "cors" }
        );
        const wholeInfo = await response.json();
        return wholeInfo;
    }
}

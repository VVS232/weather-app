import $ from "jquery";
import "./style.css";
import "./index.html";
import { populateInfo } from "./infoToDOM";

const city = $("#cityInput");

window.onload = () => {
    populateInfo("Kiev");
};

$("#search").on("click", () => {
    populateInfo(city.val());
});
$("#cityInput").on("keyup", (e) => {
    if (e.key == "Enter") {
        populateInfo(city.val());
    }
});
if (module.hot) {
    module.hot.accept();
    module.hot.accept("./API-calls", function () {});
}

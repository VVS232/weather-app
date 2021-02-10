import $ from "jquery";
import "./style.css";
import { populateInfo } from "./populateDOM";
window.onload = populateInfo;
$("#search").on("click", populateInfo);

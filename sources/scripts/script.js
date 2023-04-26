import createChart from "./chart.js";
import calculateIndex from "./calculateIndex.js";
import { countries, bg2021Data } from "./utildata.js";

const submitBtn = document.querySelector("#submit");
const indexH3 = document.querySelector(".index h3");
const indexBox = document.querySelector("#index");
const select = document.querySelector("select");

async function getCountries() {
  countries.forEach((country) => {
    select.innerHTML += `<option ${
      country == "Bulgaria" && "selected"
    } value="${country.toLowerCase()}">${country}</option>`;
  });
}

function getDataObject(e) {
  const formData = document.querySelectorAll(".form-data");
  const data = {};
  formData.forEach((fd) => {
    const backColor = fd.dataset.color;
    const key = fd
      .querySelector("label")
      .textContent.toLowerCase()
      .replace(/-|\s/g, "_");
    const value = +fd.querySelector("input").value || 0;

    data[key] = { backColor, value };
  });

  return data;
}

function drawAndCalculate(data, title) {
  const country = select.selectedOptions[0].value;
  const indexValue = calculateIndex(data);

  indexH3.innerHTML =
    title ||
    `${country[0].toUpperCase() + country.substring(1)} ECBI index is:`;
  indexBox.innerHTML = indexValue;
  createChart(data);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const data = getDataObject();
  drawAndCalculate(data);
});

getCountries();
drawAndCalculate(bg2021Data, "Bulgaria 2021 ECBI index");

const renderCountries = (arr) => {
    // console.log(arr);
    let returnHTML = "";
    for (const country of arr) {
        returnHTML += `<div>${country.name.official}</div>`;
        // console.log(country.name.official);
    }
    return returnHTML;
}

const renderFlags = (arr) => {
    let returnHTML = "";
    for (const flag of arr) {
        returnHTML += `<img src="${flag.flags.png}"">`;
        // console.log(country.name.official);
    }
    return returnHTML;
}

async function loadEvent() {
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();

    document.getElementById("root").insertAdjacentHTML("beforeend",`<div id="countryNames">${renderCountries(countryArr)}</div>`);
    document.getElementById("root").insertAdjacentHTML("beforeend",`<div id="countryFlags">${renderFlags(countryArr)}</div>`);
    // renderCountries(countryArr);
}

window.addEventListener("load", loadEvent);
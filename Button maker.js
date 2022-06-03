let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");
let customButtonEl = document.getElementById("customButton");

function applyValues() {
    let bgColor = bgColorInputEl.value;
    let fontColor = fontColorInputEl.value;
    let fontSize = fontSizeInputEl.value;
    let fontWeight = fontWeightInputEl.value;
    let paddingValue = paddingInputEl.value;
    let borderRadius = borderRadiusInputEl.value;

    customButtonEl.style.backgroundColor = bgColor;
    customButtonEl.style.color = fontColor;

    customButtonEl.style.fontSize = fontSize;
    customButtonEl.style.fontWeight = fontWeight;
    customButtonEl.style.padding = paddingValue;
    customButtonEl.style.borderRadius = borderRadius;

}
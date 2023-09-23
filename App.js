function convertTemperature() {
  var temperatureInput = document.getElementById("temperatureInput").value;
  var celsiusRadio = document.getElementById("celsiusRadio");
  var fahrenheitRadio = document.getElementById("fahrenheitRadio");

  var convertedTemperature;
  if (celsiusRadio.checked) {
    convertedTemperature = (temperatureInput * 9/5) + 32;
  } else if (fahrenheitRadio.checked) {
    convertedTemperature = (temperatureInput - 32) * 5/9;
  }

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2);
}

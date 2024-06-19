function convertToFahrenheit() {
  const celsius = document.getElementById('celsius').value;
  if (celsius === '') {
    alert('Silakan masukkan suhu dalam Celsius.');
    return;
  }
  const fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById('fahrenheit').value = fahrenheit;
  document.getElementById('calculation').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
}

function convertToCelsius() {
  const fahrenheit = document.getElementById('fahrenheit').value;
  if (fahrenheit === '') {
    alert('Silakan lakukan konversi ke Fahrenheit terlebih dahulu.');
    return;
  }
  const celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById('celsius').value = celsius;
  document.getElementById('calculation').value = `${fahrenheit}°F - 32 * (5/9) = ${celsius}°C`;
}

let btn = document.getElementById("button");

btn.addEventListener("click", () => {
  let text = document.getElementById("input").value;
  if (text) {
    check(text);
  } else {
    window.alert("Input should not be empty");
  }
});

async function check(city) {
  let apikey = "dbb8eccabb9dff99bab4d61f59ef903b";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  try {
    let response = await fetch(url);
    console.log(response)
    let data = await response.json();

    if (!response.ok) {
      throw new Error("City not found");
    }

    console.log(data);

    // Displaying weather data
    let result = document.getElementById("result");
    result.innerHTML = `
      <strong>Name:</strong> ${data.name}<br>
      <strong>Longitude:</strong> ${data.coord.lon}<br>
      <strong>Latitude:</strong> ${data.coord.lat}<br>
      <strong>humidity:</strong> ${data.main.humidity}<br>
      <strong>Max Temp:</strong> ${data.main.temp_max}°C<br>
      <strong>Min Temp:</strong> ${data.main.temp_min}°C<br>
      <strong>Weather:</strong> ${data.weather[0].description}<br>
    `;

    
  } catch (error) {
    let msg = document.getElementById("errormsg");
    msg.innerHTML = error.message;
    msg.style.color = "red";
  }
}

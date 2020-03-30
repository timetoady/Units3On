const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=1838524&appid=13521782592d85bd681b33eaba1681c2&units=imperial"
const myDate = new Date();
const currentDayNum = myDate.getDay();
console.log(currentDayNum)
let forcastDayNumber = currentDayNum
const weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";


fetch(apiURL)
  .then(weatherData => weatherData.json())
  .then(weatherData => {
    let name = document.querySelector("#townName");
    name.textContent = weatherData.city.name;
    console.log(weatherData);
    console.log(name);
    // const iconCode = weatherData.list[0].weather[0].icon;
    weatherData.list.forEach(report => {
        var time = report.dt_txt;
        const iconCode = report.weather[0].icon;
        if (time.includes('03:00:00')){
            forcastDayNumber += 1;
            if (forcastDayNumber === 7) {
                forcastDayNumber = 0;
            }
            let forcast = document.querySelector("#forcast");
            let dayDiv = document.createElement('div');
            let dayNameDiv = document.createElement('div');
            let dayName = document.createElement('h2');
            let theTemp = document.createElement('h3');
            let icon = document.createElement('img');
            dayDiv.setAttribute("class", "dayDiv");
            dayNameDiv.setAttribute('class', 'dayNameDiv')
            theTemp.innerHTML = `${report.main.temp}&deg F`
            dayName.textContent = weekdays[forcastDayNumber];
            icon.src = `//openweathermap.org/img/w/${iconCode}.png`
            forcast.appendChild(dayDiv);
            dayDiv.appendChild(dayNameDiv);
            dayNameDiv.appendChild(dayName);
            dayDiv.appendChild(theTemp);
            dayDiv.appendChild(icon)
            console.log(`The noontime temperature in ${name.textContent} for ${weekdays[forcastDayNumber]} is ${report.main.temp}° F`)

        }
    })


    // console.log(iconCode)
    // const iconPath = `//openweathermap.org/img/w/${iconCode}.png`;
    // console.log(iconPath);
    // let imgTest = document.querySelector("#imageTest");
    // let showImg = document.createElement('img');
    // showImg.src = iconPath;
    
    // imgTest.appendChild(showImg)

  });


  // `//openweathermap.org/img/w/${iconImg}.png`

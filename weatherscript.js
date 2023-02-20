const API_key = "39b4c9d6ea9e745d27d8d5a3ecbf04f4";
fetch("https://restcountries.com/v3.1/all")
.then((value)=>{
    return value.json();
})
.then((countries)=>{
    // console.log(countries)
    countries.slice(0,20).forEach((obj)=>{
        // console.log(obj.latlng)
        const [lat,lng] = obj.latlng
        //fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${API_key}`)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`)
        .then((value)=>{
            return value.json();
        })
        .then((weather)=>{
            console.log(weather);
            var table = $('#table-body')

            // console.log(weather); return false;

            // for (i of weather) {
                // console.log(i); return false;
                const date = new Date(weather.sys.sunrise);

// console.log(date.toUTCString())
                var row = `<tr>
                        <td>${weather.id}</td>
                        <td>${weather.name}</td>
                        <td>${weather.weather[0].description}</td>
                        <td>${date.toUTCString()}</td>
                        <td>${weather.wind.speed}</td>
                        
                        `;
                table.append(row)
            // }
            // console.log(weather)
        })
    })
})
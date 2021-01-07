console.log("hello, world!")

var temp=document.getElementById("temp")
var city=document.getElementById("city")
var description=document.getElementById("description")
var symbol=document.getElementById("symbol")
var image = document.getElementById("icon")






if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(function(position){
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    fetch(`https://api.weatherbit.io/v2.0/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=17270180ead94b27a3e874f0cdd513ec`)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        temp.innerHTML = `<h1 id = "temp">${data.data[0].temp}</h1>`
        city.innerHTML = `<h1>${data.data[0].city_name}</h1>`
        description.innerHTML = `<h1>${data.data[0].weather.description}</h1>`
        image.src=`https://www.weatherbit.io/static/img/icons/${data.data[0].weather.icon}.png`

       
            if(temp.firstChild.innerText < 20){
                description.innerHTML += "<p id='desc'> Bring a Jacket! </p>"
            }
            else{
                description.innerHTML += "<p id='desc'> Wear a T-shirt! </p>"
            }
            
    
    })
})}




container.addEventListener("click", function(){
    

    if(symbol.innerText=="C"){
        symbol.innerText="F"
        temp.firstChild.innerText= ctof(temp.firstChild.innerText)
    }
    else{
        symbol.innerText="C"
        temp.firstChild.innerText = ftof(temp.firstChild.innerText)
    }
})



function ctof(celsius){
    return((celsius*9)/5)+32
}


function ftof(fahrenheit){
    return((fahrenheit-32)*5)/9
}




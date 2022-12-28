
//Api call used to get the api data for the application

let apiData;

async function getData() {
    let inputtarget = document.getElementById('input')
    let zipCode = inputtarget.value
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=6e4983b4ecb4d70fa0b0ceb5b9f40012`)
    let data = res
    apiData = data
    console.log(apiData.data)
    return res
}



function createbutton() {
    var creatediv1 = document.createElement('div')
    var creatediv2 = document.createElement('div')
    var creatediv3 = document.createElement('div')
    var creatediv4 = document.createElement('div')
    var creatediv5 = document.createElement('div')
    var createtext = document.createElement('h3')
    var createinput = document.createElement('input')    
    var createbutton = document.createElement('button')

    document.body.appendChild(creatediv1)
    creatediv1.appendChild(creatediv2)
    creatediv2.appendChild(creatediv3)
    creatediv3.appendChild(creatediv4)
    creatediv3.appendChild(creatediv5)
    creatediv4.appendChild(createtext)
    creatediv4.appendChild(createinput)
    creatediv5.appendChild(createbutton)


    creatediv1.id = 'main'
    creatediv2.id = 'mainRow'
    createinput.id = 'input'
    createbutton.id = 'weatherbtn'
    createbutton.textContent = 'Get The Weather'
    createtext.textContent = 'Zipcode'

    bootStrap(creatediv4, 'col')
    bootStrap(creatediv5, 'col') 
    bootStrap(creatediv1, 'container vh-100')
    bootStrap(creatediv2, 'row d-flex align-contents-center')
    bootStrap(creatediv3, 'row justify-content-center mt-5')
    bootStrap(createinput, 'col d-flex')
    bootStrap(createbutton, 'col d-flex')

    createbutton.addEventListener('click', () => {
        populate()
    });

}
createbutton()

//simple objct used for telling the program whether to create all the divs the first time an api call is made and when it increments once it will simply update the data in th divs with ever api call after that
let weatherData = {
    apiCall : 0,
}



async function populate() {
    await getData()
    if (weatherData.apiCall === 0) {
        // initializing the creation of html divs before appending them 
        var mainRow = document.getElementById('mainRow')
        var creatediv = document.createElement('div')
        var creatediv2 = document.createElement('div')
        var creatediv3 = document.createElement('div')
        var creatediv4 = document.createElement('div')
        var creatediv5 = document.createElement('div')
        var creatediv6 = document.createElement('div')
        var creatediv7 = document.createElement('div')
        var creatediv8 = document.createElement('div')
        var creatediv9 = document.createElement('div')
        var creatediv10 = document.createElement('div')
        var createimg = document.createElement('img')

        //appending the created divs to the document body
        document.body.appendChild(creatediv)
        document.body.appendChild(creatediv2)
        document.body.appendChild(creatediv3)
        document.body.appendChild(creatediv4)
        document.body.appendChild(creatediv5)
        document.body.appendChild(creatediv6)
        document.body.appendChild(creatediv10)
        document.body.appendChild(createimg)

        //setting inner html of divs to the content of th eapi call for || Condition, City, Fahrenheit, Celsius, and Kelvin 
        creatediv2.innerHTML = "Condition:" + "<br>" + apiData.data.weather[0].main
        creatediv3.innerHTML = "City:" + "<br>" + apiData.data.name
        creatediv.innerHTML = "Fahrenheit:" + "<br>" + (((apiData.data.main.temp -273.15) * 9 / 5) + 32).toFixed(1)
        creatediv4.innerHTML = "Celsius:" + "<br>" + (apiData.data.main.temp - 273.15).toFixed(1)
        creatediv5.innerHTML = "Kelvin:" + "<br>" + apiData.data.main.temp.toFixed(1)

        // Appending divs to one another to stack divs, using this method I'm able to create container divs and row divs
        creatediv6.appendChild(creatediv4)
        creatediv6.appendChild(creatediv5)
        creatediv6.appendChild(creatediv)
        creatediv7.appendChild(creatediv6)
        creatediv8.appendChild(creatediv2)
        creatediv8.appendChild(creatediv3)
        creatediv8.appendChild(creatediv7)
        creatediv9.appendChild(creatediv8)
        creatediv10.appendChild(creatediv9)
        mainRow.appendChild(creatediv10)

        // Styling for the weather card using boostrap classes
        bootStrap(creatediv7, "container-fluid text-center");
        bootStrap(creatediv6, "row");
        bootStrap(creatediv5, "col border mt-5")
        bootStrap(creatediv, "col border mt-5")
        bootStrap(creatediv4, "col border mt-5")
        bootStrap(creatediv3, "text-center border mt-5")
        bootStrap(creatediv2, "text-center border mt-2")
        bootStrap(creatediv10, "row mt-5")
        bootStrap(creatediv9, "card")
        bootStrap(creatediv8, "card-body")

        //Giving all the divs ids so they can be targeted to change the html later on
        creatediv.id = 'div1'
        creatediv2.id = 'div2'
        creatediv3.id = 'div3'
        creatediv4.id = 'div4'
        creatediv5.id = 'div5'
        creatediv6.id = 'div6'
        creatediv7.id = 'div7'

        // This increments a number so that once the first call is made it creates all of the divs that will contain data and then nce it increments once it will simply update the data with every new api call
        weatherData.apiCall ++


    } else if (weatherData.apiCall !== 0) {
        let condition = document.getElementById('div2')
        condition.innerHTML = "Condition:" + "<br>" + apiData.data.weather[0].main//Condition

        let city = document.getElementById('div3')
        city.innerHTML = "City:" + "<br>" + apiData.data.name//City Name

        let fahrenheit = document.getElementById('div1')
        fahrenheit.innerHTML = "Fahrenheit:" + "<br>" + (((apiData.data.main.temp -273.15) * 9 / 5) + 32).toFixed(1)//Fahrenheit

        let celsius = document.getElementById('div4')
        celsius.innerHTML = "Celsius:" + "<br>" + (apiData.data.main.temp - 273.15).toFixed(1)//Celsius

        let kelvin = document.getElementById('div5')
        kelvin.innerHTML = "Kelvin:" + "<br>" + apiData.data.main.temp.toFixed(1)//Kelvin
    }
}

function bootStrap(element, classes) {
    element.className = classes
}
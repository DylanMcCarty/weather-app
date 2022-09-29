

let zipCode = 40391

async function getData() {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=6e4983b4ecb4d70fa0b0ceb5b9f40012`)
    let data = res
    apiData = data
    return res
   }
    

let apiData 
getData()



async function populate() {
    await getData()
    let kelvin = apiData.data.main.temp
    let celsius = (apiData.data.main.temp - 273.15)
    let fahrenheit = (celsius * 9/5) + 32 
    var creatediv = document.createElement('div')
    var creatediv2 = document.createElement('div')
    var creatediv3 = document.createElement('div')
    var creatediv4 = document.createElement('div')
    var creatediv5 = document.createElement('div')
    var creatediv6 = document.createElement('div')
    var creatediv7 = document.createElement('div')
    document.body.appendChild(creatediv)
    document.body.appendChild(creatediv2)
    document.body.appendChild(creatediv3)
    document.body.appendChild(creatediv4)
    document.body.appendChild(creatediv5)
    document.body.appendChild(creatediv6)
    document.body.appendChild(creatediv7)
    creatediv2.textContent = apiData.data.weather[0].main;
    creatediv3.textContent = apiData.data.name;
    creatediv.textContent = fahrenheit
    creatediv4.textContent = celsius
    creatediv5.textContent = kelvin
    creatediv6.appendChild(creatediv4)
    creatediv6.appendChild(creatediv5)
    creatediv6.appendChild(creatediv)
    creatediv7.appendChild(creatediv6)
    bootStrap(creatediv7, "container");
    bootStrap(creatediv6, "row");
    bootStrap(creatediv5, "col")
    bootStrap(creatediv, "col")
    bootStrap(creatediv4, "col")
}
populate()

function bootStrap(varName, classes,) {
    varName.className = classes
    }

    
// function populatePage(type,  ) {
//     let div = document.createElement('div')
//         for(let i=0; i<5; i++)
//         div.id = id
//         div.setAttribute(type)
//         div.textContent = data

// }















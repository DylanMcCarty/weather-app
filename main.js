function createbutton() {
    //everything below this creates the input 
    var createInputDiv1 = document.createElement('div')
    var createInputDiv2 = document.createElement('div')
    var createinput = document.createElement('input')
    document.body.appendChild(createInputDiv1)
    createInputDiv1.appendChild(createInputDiv2)
    createInputDiv2.appendChild(createinput)
    createinput.id = 'input'
    bootStrap(createInputDiv1, 'container')
    bootStrap(createInputDiv2, 'row justify-content-center')
    bootStrap(createinput, 'col-5 col-lg-6')
    // everything below this creates the button 
    var createbutton = document.createElement('button')
    var createBtnDiv = document.createElement('div')
    // var createBtnDiv2 = document.createElement('div')
    document.body.appendChild(createBtnDiv)
    // document.body.appendChild(createBtnDiv2)
    document.body.appendChild(createbutton)
    createBtnDiv.appendChild(createbutton)
    // createBtnDiv2.appendChild(createBtnDiv)
    createInputDiv2.appendChild(createbutton)
    createbutton.textContent = 'Get The Weather'
    createbutton.id = 'weatherbtn'
    // createBtnDiv.className = 'row'
    // createBtnDiv2.className = 'container'
    createbutton.className = 'col-5 col-lg-6'
    createbutton.addEventListener('click', () => {
        // reloadDiv()
        populate()
    });
}
createbutton()


async function getData() {
    let inputtarget = document.getElementById('input')
    let zipCode = inputtarget.value
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=6e4983b4ecb4d70fa0b0ceb5b9f40012`)
    let data = res
    apiData = data
    return res
}


let apiData

async function populate() {
    await getData()
    let kelvin = apiData.data.main.temp
    let celsius = (apiData.data.main.temp - 273.15)
    let fahrenheit = (celsius * 9 / 5) + 32
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
    creatediv2.innerHTML = "Condition:" + "<br>" + apiData.data.weather[0].main;
    creatediv3.innerHTML = "City:" + "<br>" + apiData.data.name;
    creatediv.innerHTML = "Fahrenheit:" + "<br>" + fahrenheit.toFixed(1)
    creatediv4.innerHTML = "Celsius:" + "<br>" + celsius.toFixed(1)
    creatediv5.innerHTML = "Kelvin:" + "<br>" + kelvin.toFixed(1)
    creatediv6.appendChild(creatediv4)
    creatediv6.appendChild(creatediv5)
    creatediv6.appendChild(creatediv)
    creatediv7.appendChild(creatediv6)
    bootStrap(creatediv7, "container text-center");
    bootStrap(creatediv6, "row");
    bootStrap(creatediv5, "col border")
    bootStrap(creatediv, "col border")
    bootStrap(creatediv4, "col border")
    bootStrap(creatediv3, "text-center border")
    bootStrap(creatediv2, "text-center border")
    creatediv.id = 'div1'
    creatediv2.id = 'div2'
    creatediv3.id = 'div3'
    creatediv4.id = 'div4'
    creatediv5.id = 'div5'
    creatediv6.id = 'div6'
    creatediv7.id = 'div7'
}

function bootStrap(varName, classes,) {
    varName.className = classes
}
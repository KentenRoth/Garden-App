// Code for the plant.html page
// Pull data from the form
// Save data to the Plants object in localStorage (for now)


// Elements from plant.html
const nameElement = document.querySelector('#name')
const amountElement = document.querySelector('#amount')
const removePlant = document.querySelector('#remove-plant')
const plantedElement = document.querySelector('#planted')
const harvestElement = document.querySelector('#harvest')

let plantId = location.hash.substring(1)
let plants = getPlants()
let plant = plants.find((plant) => plant.id === plantId)

if (!plant) {
    location.assign('index.html')
}

// Repopulate the fields when coming back to page
nameElement.value = plant.name
amountElement.value = plant.amount

// Not sure why these do not repopulate 
plantedElement.value = plant.planted
harvestElement.value = plant.harvest


// Saves name of plant
nameElement.addEventListener('input', (e) => {
    plant.name = e.target.value
    savePlant(plants)
})


// Saves amount planted
amountElement.addEventListener('input', (e) => {
    plant.amount = e.target.value
    savePlant(plants)
})


// 
plantedElement.addEventListener('input', (e) => {
    const plantedElement = e.target.value
    const plantedDate = moment(plantedElement, ['YYYY-MM-DD', 'MM-DD-YYYY'])
    const planted = moment(plantedDate).valueOf()
    plant.planted = planted
    savePlant(plants)
})

// Needs to get info from plantedElement 
// Cannot get it to pull from plantedElement value
harvestElement.addEventListener('input', (e) => {

    // This is converting what is coming back from moment.js 
    const plantedDate = moment(plantedValue, ['YYYY-MM-DD', 'MM-DD-YYYY'])
    const planted = moment(plantedDate).valueOf()
    const harvestDate = moment(planted).add(harvestValue, 'days')
    const harvest = moment(harvestDate).fromNow()

// this is where the value should save.
    plant.harvest = e.target.value
    console.log(plantedValue)
    savePlant(plants)
})

// Remove plant button
removePlant.addEventListener('click', (e) => {
    harvestPlant(plant.id)
    savePlant(plants)
    location.assign('/index.html')
})



// This is what I had (working) before I switched it from a form setup.


// document.querySelector('#form-submit').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const id = uuidv4()
//     const name = e.target.elements.name.value
//     const amount = e.target.elements.amount.value
//     const notes = document.getElementsByTagName('textarea')[0].value
//     
//     const harvest = e.target.elements.harvest.value

//     const plantedDate = moment(planted, ['YYYY-MM-DD', 'MM-DD-YYYY'])
//     const plantedTimestamp = moment(plantedDate).valueOf()

//     const harvestDate = moment(plantedTimestamp).add(harvest, 'days')
//     const whenToHarvest = moment(harvestDate).fromNow()

//     plants.push({
//         id: id,
//         name: name,
//         amount: amount,
//         notes: notes,
//         planted: plantedTimestamp,
//         harvest: whenToHarvest
//     })

//     savePlant(plants)
// })


// Code for the plant.html page
// Pull data from the form
// Save data to the Plants object in localStorage (for now)


// Elements from plant.html
const nameElement = document.querySelector('#name')
const amountElement = document.querySelector('#amount')
const removePlant = document.querySelector('#remove-plant')
const plantButton = document.querySelector('#planted-button')
const plantedElement = document.querySelector('#planted')
const harvestElement = document.querySelector('#harvest')

let plantId = location.hash.substring(1)
let plants = getPlants()
let plant = plants.find((plant) => plant.id === plantId)

if (!plant) {
    location.assign('index.html')
}

nameElement.value = plant.name
amountElement.value = plant.amount
plantedElement.value = plant.plantedDate
harvestElement.value = plant.harvestNumber

nameElement.addEventListener('input', (e) => {
    plant.name = e.target.value
    savePlant(plants)
})



amountElement.addEventListener('input', (e) => {
    plant.amount = e.target.value
    savePlant(plants)
})

plantedElement.addEventListener('input', (e) => {
    whenToHarvest()
    savePlant(plants)
})

harvestElement.addEventListener('input', (e) => {
    harvest = whenToHarvest()
    plant.harvest = harvest
    plant.harvestNumber = document.querySelector('#harvest').value
    savePlant(plants)
})

removePlant.addEventListener('click', (e) => {
    harvestPlant(plant.id)
    savePlant(plants)
    location.assign('/index.html')
})

plantButton.addEventListener('click', (e) => {
    const harvest = whenToHarvest()
    plant.harvest = harvest
    savePlant(plants)
    location.assign('/index.html')
})
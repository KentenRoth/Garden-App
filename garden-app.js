const plants = [{
    name: 'Corn',
    harvest: 100
},{
    name: 'Radish',
    harvest: 35,
}, {
    name: 'Onion',
    harvest: 85
}]

const createPlantsDOM = function (plant) {
    const plantList = document.createElement('div')
    const plantName = document.createElement('span')
    const plantHarvest = document.createElement('span')
    const harvestedPlant = document.createElement('button')

    plantName.textContent = plant.name 
    plantList.appendChild(plantName)

    plantHarvest.textContent = plant.harvest
    plantList.appendChild(plantHarvest)

    harvestedPlant.textContent = 'x'
    plantList.appendChild(harvestedPlant)

    return plantList
}

plants.forEach(function (plant) {
    const plantList = createPlantsDOM(plant)
    document.querySelector('#planted-list').appendChild(plantList)

})
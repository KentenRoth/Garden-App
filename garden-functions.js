// Will use this page when refactoring

const getPlants = function () {
    const plantsJSON = localStorage.getItem('plant')
    if (plantsJSON !== null) {
        return JSON.parse(plantsJSON)
    } else {
        return []
    }
}


const savePlant = function (plants) {
    localStorage.setItem('plant', JSON.stringify(plants))
}


const harvestPlant = function (id) {
    const plantIndex = plants.findIndex(function (plant) {
        return plant.id === id
    })
    if (plantIndex > -1) {
        plants.splice(plantIndex, 1)
    }
}


const createPlantsDOM = function (plant) {
    const plantList = document.createElement('div')
    const plantName = document.createElement('span')
    const plantHarvest = document.createElement('span')
    const harvestedPlant = document.createElement('button')

    plantName.textContent = plant.name
    plantList.appendChild(plantName)

    plantHarvest.textContent = ` should be ready to harvest ${plant.harvest}`
    plantList.appendChild(plantHarvest)

    harvestedPlant.textContent = 'x'
    plantList.appendChild(harvestedPlant)
    harvestedPlant.addEventListener('click', function () {
        harvestPlant(plant.id)
        savePlant(plants)
    })

    return plantList
}


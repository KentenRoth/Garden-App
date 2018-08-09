// Will use this page when refactoring

const getPlants = () => {
    const plantsJSON = localStorage.getItem('plant')
    if (plantsJSON !== null) {
        return JSON.parse(plantsJSON)
    } else {
        return []
    }
}


const savePlant = (plants) => {
    localStorage.setItem('plant', JSON.stringify(plants))
}


const harvestPlant = (id) => {
    const plantIndex = plants.findIndex((plant) => {
        return plant.id === id
    })
    if (plantIndex > -1) {
        plants.splice(plantIndex, 1)
    }
}


const createPlantsDOM = (plant) => {
    const plantList = document.createElement('a')
    const plantName = document.createElement('p')
    const plantHarvest = document.createElement('p')

    plantName.textContent = plant.name
    plantList.appendChild(plantName)

    plantHarvest.textContent = ` should be ready to harvest ${plant.harvest}`
    plantList.appendChild(plantHarvest)

    plantList.setAttribute('href', `/plant.html#${plant.id}`)
    plantList.classList.add('plant-list')

    return plantList
}

const sortPlants = (plants, sortBy) => {
    if (sortBy === 'byHarvest') {
        return plants.sort(function (a, b) {
            if (a.harvest < b.harvest) {
                return -1
            } else if (a.harvest > b.harvest) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byPlanted') {
        return plants.sort(function (a, b) {
            if (a.planted > b.planted) {
                return -1
            } else if (a.planted < b.planted) {
                return 1
            } else {
                return 0
            }
        })
        
    } else if (sortBy === 'plantedMost') {
        return plants.sort(function (a, b) {
            if (a.amount > b.amount) {
                return -1
            } else if (a.amount < b.amount) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy == 'leastPlanted') {
        return plants.sort(function (a, b) {
            if (a.amount < b.amount) {
                return -1
            } else if (a.amount > b.amount) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return plants
    }
}

const displayPlants = (plants, sort) => {
    plants = sortPlants(plants, sort.sortBy)
    const sortPlant = plants.filter((plant) => {
        return plant.name.toLowerCase().includes(sort.searchPlant.toLowerCase())
    })

    document.querySelector('#planted-list').innerHTML = ''

    sortPlant.forEach((plant) => {
        const plantList = createPlantsDOM(plant)
        document.querySelector('#planted-list').appendChild(plantList)
    })
}

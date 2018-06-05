const plants = getPlants()

const sort = {
    harvestDate: '', // will be time stamp
    plantedDate: '', // will be time stamp
    mostPlanted: '',
    leastPlanted: ''
}


plants.forEach((plant) => {
    const plantList = createPlantsDOM(plant)
    document.querySelector('#planted-list').appendChild(plantList)

})
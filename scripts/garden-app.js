let plants = getPlants()

const sort = {
    searchPlant: '',
    sortBy: 'byHarvest'
}

document.querySelector('#plant-button').addEventListener('click', (e) => {
    e.preventDefault()
    const id = uuidv4()

    plants.push({
        id: id,
        name: '',
        amount: '',
        planted: '',
        harvest: ''
    })

    savePlant(plants)
    location.assign(`/plant.html#${id}`)
})


plants.forEach((plant) => {
    const plantList = createPlantsDOM(plant)
    document.querySelector('#planted-list').appendChild(plantList)

})

document.querySelector('#plant-search').addEventListener('input', (e) => {
    sort.searchPlant = e.target.value
    displayPlants(plants, sort)
})

document.querySelector('#sort-by').addEventListener('change', (e) => {
    sort.sortBy = e.target.value
    displayPlants(plants, sort)
})
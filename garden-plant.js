// Code for the plant.html page
// Pull data from the form
// Save data to the Plants object in localStorage (for now)

document.querySelector('#form-submit').addEventListener('submit', function(e) {
    e.preventDefault()
    const id = uuidv4()
    const name = e.target.elements.name.value
    const amount = e.target.elements.amount.value
    const notes = document.getElementsByTagName('textarea')[0].value
    const planted = e.target.elements.planted.value
    const harvest = e.target.elements.harvest.value

    const plantedDate = moment(planted, ['YYYY-MM-DD', 'MM-DD-YYYY'])
    const plantedTimestamp = moment(plantedDate).valueOf()

    const harvestDate = moment(plantedTimestamp).add(harvest, 'days')
    const whenToHarvest = moment(harvestDate).fromNow()

    plants.push({
        id: id,
        name: name,
        amount: amount,
        notes: notes,
        planted: plantedTimestamp,
        harvest: whenToHarvest
    })

    savePlant(plants)
})


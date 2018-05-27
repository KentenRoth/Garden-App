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
    plants.push({
        id: id,
        name: name,
        amount: amount,
        notes: notes,
        planted: planted,
        harvest: harvest
    })

    savePlant(plants)
})

const savePlant = function (plants) {
    localStorage.setItem('plant', JSON.stringify(plants))
}


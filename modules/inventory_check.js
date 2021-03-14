let input = {
    'Strawberry seeds': 30,
    'Li1mpwurt seeds': 15,
    'Li2mpwurt seeds': 15,
    'Lim3pwurt seeds': 15,
    'Limp4wurt seeds': 15,
    'Lim5pwurt seeds': 15,
    'Limp6wurt seeds': 15,
    'Limpw7urt seeds': 15,
    'Limpwu8rt seeds': 15,
    'Limpwur9t seeds': 15,
    'Limpwur1t seeds': 15,
    'Limpwur2t seeds': 15,
    'Limpwur3t seeds': 15,
    'Limpwur4t seeds': 15,
    'Limpwur5t seeds': 15,
    'Limpwur6t seeds': 15,
    'Limpwur7t seeds': 15,
    'Limpwur8t seeds': 15,
    'Limp2wur9t seeds': 15,
    'Limpwur0t seeds': 15,
    'Li1mp1wurt seeds': 15,
    'Li2mp2wurt seeds': 15,
    'Li3mp3wurt seeds': 15,
    'Li4mp4wurt seeds': 15,
    'Li5mp5wurt seeds': 15,
    'Limpwu55rt seeds': 15,
    'Limp55wurt seeds': 15,
    'Ranarr seeds': 15,
    'Ranrawr seeds': 20,
    'Ranra3wr seeds': 20,
}

const inventory = new Set()

function inventoryFill(generated) {
    console.log(generated.size)
    if (generated.size > 28) {
        return RangeError('Cannot accept more than 28 items.')
    }
    for (let num in generated) {
        if (inventory.size < 28 || inventory.size === undefined) {
            inventory.add(`${num} x ${generated[num]}`)
        } else if (inventory.size > 28) {
            return RangeError('Too many items in inventory')
        } else if (inventory.size = 28) {
            break
        }
    }
}

inventoryFill(input)
console.log(input.length)
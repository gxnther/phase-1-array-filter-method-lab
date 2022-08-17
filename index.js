function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase())
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(fuzzy => fuzzy.toLowerCase().slice(0, query.length) === query.toLowerCase())
}

function matchName(drivers, query) {
    return drivers.filter(hometown => hometown.name === query)
}
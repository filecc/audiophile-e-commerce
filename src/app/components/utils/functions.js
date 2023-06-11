function sortByProperty(arr, property) {
    return arr.sort((a, b) => b[property] - a[property]);
}

export {sortByProperty}
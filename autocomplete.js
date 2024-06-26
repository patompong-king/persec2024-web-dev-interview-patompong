function autocomplete(search, items, maxResults) {
    search = search.toLowerCase();
    items = items.map(item => item.toLowerCase());

    let filteredItems = items.filter(item => item.includes(search));

    filteredItems.sort((a, b) => {
        let aIndex = a.indexOf(search);
        let bIndex = b.indexOf(search);

        if (aIndex === 0 && bIndex !== 0) return -1;
        if (aIndex !== 0 && bIndex === 0) return 1;

        return aIndex - bIndex;
    });

    return filteredItems.slice(0, maxResults).map(item => {
        return items.find(originalItem => originalItem.toLowerCase() === item);
    });
}
let result = autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 5);
console.log(result);
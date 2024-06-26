function sortArray(array) {
    array.sort((a, b) => {
        let regex = /(\D+)(\d+)/;
        let [ , aLetters, aNumbers] = a.match(regex);
        let [ , bLetters, bNumbers] = b.match(regex);

        if (aLetters < bLetters) return -1;
        if (aLetters > bLetters) return 1;

        return parseInt(aNumbers) - parseInt(bNumbers);
    });
    return array;
}

let arr1 = ["TH10", "TH3Netflix", "TH1", "TH7"];
let sortedArray = sortArray(arr1);
let arr2 = ["TH19", "SG20", "TH2"];
let sortedarr2 = sortArray(arr2);
console.log(sortedArray);
console.log(sortedarr2);
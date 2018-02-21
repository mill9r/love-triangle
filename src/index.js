/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    preferences.unshift(0);

    let counter = 0;
    for (let i = 1; i < preferences.length; i++) {
        let index_array = [];
        let value_array = [];

        let value_first = preferences[i];
        index_array.push(i);
        value_array.push(value_first);
        if (value_first < preferences.length) {
            let value_second = preferences[value_first];
            if (value_first !== value_second) {
                index_array.push(value_first);
                value_array.push(value_second)
            }
            if (value_second < preferences.length && value_second !== -1) {
                let value_third = preferences[value_second];
                index_array.push(value_second);
                value_array.push(value_third);

                if (index_array.length === 3 && value_array.length === 3) {
                    value_array_sorted = value_array.sort((a, b) => a - b);
                    index_array_sorted = index_array.sort((a, b) => a - b);
                    if (compareTwoArray(index_array_sorted, value_array_sorted)) {
                        counter++;
                        preferences[i] = -1
                    }
                }

            }
        }
    }
    return counter;
};


function compareTwoArray(arr1, arr2) {
    trueCounter = 0;
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                trueCounter++
            }
        }
        if (trueCounter === arr1.length) {
            return true
        }
    }
    return false

}



function bubbleSort(arr) {
    let counter = 0;

    // BASE CASE
    if (counter === 0) {
        return arr;
    } else {
        for (let i = 0; i < arr.length - 2; i++) {
            if (arr[1 + 1] < arr[i]) {
                let temp = arr[i];
                first = arr[1 + 1];
                arr[1 + 1] = temp;
                counter++;
            }
        }
    }

}

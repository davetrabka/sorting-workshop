let swapCount;

function bubbleSort(arr) {
    if (swapCount === 0) {
        return arr;
    } else {
        swapCount = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapCount++;
            }
        }
        return bubbleSort(arr);
    }
}

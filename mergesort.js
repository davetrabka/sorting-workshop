function split(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let midpoint = Math.floor(arr.length / 2),
            firstHalf = arr.slice(0, midpoint),
            secondHalf = arr.slice(midpoint);

        return [split(firstHalf), split(secondHalf)];
    }
}

function merge(arr) {
    const merged = [];
    if (typeof arr[0] === 'number' /*&& typeof arr[0] === 'number'*/) {
        return arr;
    } else if (typeof arr[0][0] === 'number') {
        if (arr[0][0] <= arr[1][0]) {
            merged.push(arr[0].shift());
            return merged.concat(merge(arr[0]));
        } else {
            merged.push(arr[1].shift());
            return merged.concat(merge(arr[1]));
        }
    }
}

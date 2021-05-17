/**
 * Returns the animations necessary for Selection Sort.
 */
export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1)
        return array;
    for (let i = 0; i < array.length; i++) {
        var min = i;
        for (var j = i+1; j < array.length; j++) {
            animations.push([j,j]);
            animations.push([j,j]);
            if (array[j] < array[min]) {
                min = j;
            }
        }
        swap(array, i, min, animations)
    }
    return animations;
}

/**
 * Returns the animations necessary for Merge Sort.
 */
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1)
        return array;
    const helperArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, helperArray, animations);
    return animations;
}

/**
 * Helper method for getMergeSortAnimations.
 */
function mergeSortHelper(mainArray, startIndex, endIndex, secondaryArray, animations) {
    if (startIndex === endIndex)
        return;
    const middleIndex = Math.floor((startIndex + endIndex)/2);
    mergeSortHelper(secondaryArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(secondaryArray, middleIndex + 1, endIndex, mainArray, animations);
    merge(mainArray, startIndex, middleIndex, endIndex, secondaryArray, animations);
}

/**
 * Merges the array, assuming that it is already in order.
 */
function merge(mainArr, start, middle, end, comparedArr, animations) {
    let i = start;
    let j = middle + 1;
    let iterator = start;
    while (i <= middle && j <= end) {
        animations.push([i,j]);
        animations.push([i,j]);
        if (comparedArr[i] < comparedArr[j]) {
            animations.push([iterator, comparedArr[i]]);
            mainArr[iterator++] = comparedArr[i++];
        }
        else {
            animations.push([iterator, comparedArr[j]]);
            mainArr[iterator++] = comparedArr[j++];
        }
    }
    while (i <= middle) {
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([iterator, comparedArr[i]]);
        mainArr[iterator++] = comparedArr[i++];
    }
    while (j <= end) {
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([iterator, comparedArr[j]]);
        mainArr[iterator++] = comparedArr[j++];
    }
}

/**
 * Returns the animations necessary for Quick Sort.
 */
export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1)
        return array;
    quickSortHelper(array, 0, array.length-1, animations);
    return animations;
}

/**
 * Helper method for getQuickSortAnimations.
 */
function quickSortHelper(array, startIndex, endIndex, animations) {
    if (startIndex < endIndex) {
        let part = partition(array, startIndex, endIndex, animations);
        quickSortHelper(array, startIndex, part-1, animations);
        quickSortHelper(array, part+1, endIndex, animations);
    }
}

/**
 * Provides a partition in which all array elements to the left are smaller than said partition value,
 * and all array elements to the right are greater.
 */
function partition(array, start, end, animations) {
    var pivot = array[end];
    var i = start;
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            swap(array, i, j, animations);
            i++;
        }
    }
    swap(array, i, end, animations);
    return i;
}

/**
 * Returns the animations necessary for Heap Sort.
 */
export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1)
        return array;
    heapSortHelper(array, animations);
    return animations;
}

/**
 * Helper method for getHeapSortAnimations.
 */
function heapSortHelper(array, animations) {
    let n = array.length;
    //Build heap
    for (let i = n/2 - 1; i >= 0; i--) {
        heapify(array, n, i, animations);
    }
    //Extract element from heap one by one
    for (let j = n-1; j > 0; j--) {
        swap(array, 0, j, animations);
        heapify(array, j, 0, animations)
    }
}

/**
 * Builds heap in a top down manner.
 * n is size of heap, i is index of root
 */
function heapify(array, n, i, animations) {
    let largest = i;
    let left = 2*i + 1;
    let right = 2*i + 2;
    if (left < n && array[left] > array[largest])
        largest = left;
    if (right < n && array[right] > array[largest])
        largest = right;
    if (largest !== i) {
        swap(array, largest, i, animations);
        heapify(array, n, largest, animations);
    }
}

/**
 * Returns the animations necessary for Bubble Sort.
 */
export function getBubbleSortAnimations(array) {
    const animations = [];
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if (array[j] > array[j+1])
                swap(array,j,j+1,animations);
        }
    }
    return animations;
}

/**
 * Swaps two array values.
 */
 function swap(array, firstIndex, secondIndex, animations) {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
    animations.push([firstIndex, secondIndex]);
    animations.push([firstIndex, secondIndex]);
    animations.push([firstIndex, array[firstIndex], secondIndex, array[secondIndex]]);
}
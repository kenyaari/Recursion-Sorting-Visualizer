import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js'; 
import {getQuickSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import {getSelectionSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import {getHeapSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import {getBubbleSortAnimations} from '../SortingAlgorithms/SortingAlgorithms.js';
import styled from 'styled-components';

const ARRAY_LENGTH = 150;
const ANIMATION_SPEED_MS = 2;
const MAIN_COLOR = '#B0E1FF';
const SECONDARY_COLOR = '#1f1e33';
const FINAL_COLOR = '#81C953';

const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 13px;
    padding: 10px 35px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
`;

let array_of_algorithms = [
    'this.selectionSort()',
    'this.mergeSort()',
    'this.quickSort()',
    'this.heapSort()',
    'this.bubbleSort()',
]

export default class SortingVisualizer extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        var a = [];
        for (let i = 0; i < ARRAY_LENGTH; i++)
            a.push(randomInt(25,450));
        this.setState({
            array: a,
            });
    }

    selectionSort() {
        return new Promise((resolve) => {
            const animations = getSelectionSortAnimations(this.state.array);
            let colorIndex = 0;
            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const changeColor = animations[i].length === 2;
                if (changeColor) {
                    const [firstIndex, secondIndex] = animations[i];
                    const firstIndexStyle = arrayBars[firstIndex].style;
                    const secondIndexStyle = arrayBars[secondIndex].style;
                    const color = colorIndex%2 === 0 ? SECONDARY_COLOR : MAIN_COLOR;
                    colorIndex++;
                    setTimeout(() => {
                        firstIndexStyle.backgroundColor = color;
                        secondIndexStyle.backgroundColor = color;
                    }, ANIMATION_SPEED_MS*i);
                }
                else {
                    setTimeout(() => {
                        const [firstIndex, newFirstHeight, secondIndex, newSecondHeight] = animations[i];
                        const firstIndexStyle = arrayBars[firstIndex].style;
                        const secondIndexStyle = arrayBars[secondIndex].style;
                        firstIndexStyle.height = `${newFirstHeight}px`;
                        secondIndexStyle.height = `${newSecondHeight}px`;
                    }, ANIMATION_SPEED_MS*i);
                }
            }
            setTimeout(resolve, ANIMATION_SPEED_MS*animations.length);
        });
    }

    mergeSort() {
        return new Promise((resolve) => {
            const animations = getMergeSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const changeColor = i%3 !== 2;
                if (changeColor) {
                    const [firstIndex, secondIndex] = animations[i];
                    const firstIndexStyle = arrayBars[firstIndex].style;
                    const secondIndexStyle = arrayBars[secondIndex].style;
                    const color = i%3 === 0 ? SECONDARY_COLOR : MAIN_COLOR;
                    setTimeout(() => {
                        firstIndexStyle.backgroundColor = color;
                        secondIndexStyle.backgroundColor = color;
                    }, ANIMATION_SPEED_MS*i);
                }
                else {
                    setTimeout(() => {
                        const [firstIndex, newHeight] = animations[i];
                        const firstIndexStyle = arrayBars[firstIndex].style;
                        firstIndexStyle.height = `${newHeight}px`;
                    }, ANIMATION_SPEED_MS*i);
                }
            }
            setTimeout(resolve, ANIMATION_SPEED_MS*animations.length);
        });
    }

    quickSort() {
        return new Promise((resolve) => {
            const animations = getQuickSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const changeColor = i%3 !== 2;
                if (changeColor) {
                    const [firstIndex, secondIndex] = animations[i];
                    const firstIndexStyle = arrayBars[firstIndex].style;
                    const secondIndexStyle = arrayBars[secondIndex].style;
                    const color = i%3 === 0 ? SECONDARY_COLOR : MAIN_COLOR;
                    setTimeout(() => {
                        firstIndexStyle.backgroundColor = color;
                        secondIndexStyle.backgroundColor = color;
                    }, ANIMATION_SPEED_MS*i);
                }
                else {
                    setTimeout(() => {
                        const [firstIndex, newFirstHeight, secondIndex, newSecondHeight] = animations[i];
                        const firstIndexStyle = arrayBars[firstIndex].style;
                        const secondIndexStyle = arrayBars[secondIndex].style;
                        firstIndexStyle.height = `${newFirstHeight}px`;
                        secondIndexStyle.height = `${newSecondHeight}px`;
                    }, ANIMATION_SPEED_MS*i);
                }
            }
            setTimeout(resolve, ANIMATION_SPEED_MS*animations.length);
        });
    }

    heapSort() {
        return new Promise((resolve) => {
            const animations = getHeapSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const changeColor = i%3 !== 2;
                if (changeColor) {
                    const [firstIndex, secondIndex] = animations[i];
                    const firstIndexStyle = arrayBars[firstIndex].style;
                    const secondIndexStyle = arrayBars[secondIndex].style;
                    const color = i%3 === 0 ? SECONDARY_COLOR : MAIN_COLOR;
                    setTimeout(() => {
                        firstIndexStyle.backgroundColor = color;
                        secondIndexStyle.backgroundColor = color;
                    }, ANIMATION_SPEED_MS*i);
                }
                else {
                    setTimeout(() => {
                        const [firstIndex, newFirstHeight, secondIndex, newSecondHeight] = animations[i];
                        const firstIndexStyle = arrayBars[firstIndex].style;
                        const secondIndexStyle = arrayBars[secondIndex].style;
                        firstIndexStyle.height = `${newFirstHeight}px`;
                        secondIndexStyle.height = `${newSecondHeight}px`;
                    }, ANIMATION_SPEED_MS*i);
                }
            }
            setTimeout(resolve, ANIMATION_SPEED_MS*animations.length);
        });
    }

    bubbleSort() {
        return new Promise((resolve) => {
            const animations = getBubbleSortAnimations(this.state.array);
            for (let i = 0; i < animations.length; i++) {
                const arrayBars = document.getElementsByClassName('array-bar');
                const changeColor = i%3 !== 2;
                if (changeColor) {
                    const [firstIndex, secondIndex] = animations[i];
                    const firstIndexStyle = arrayBars[firstIndex].style;
                    const secondIndexStyle = arrayBars[secondIndex].style;
                    const color = i%3 === 0 ? SECONDARY_COLOR : MAIN_COLOR;
                    setTimeout(() => {
                        firstIndexStyle.backgroundColor = color;
                        secondIndexStyle.backgroundColor = color;
                    }, ANIMATION_SPEED_MS*i);
                }
                else {
                    setTimeout(() => {
                        const [firstIndex, newFirstHeight, secondIndex, newSecondHeight] = animations[i];
                        const firstIndexStyle = arrayBars[firstIndex].style;
                        const secondIndexStyle = arrayBars[secondIndex].style;
                        firstIndexStyle.height = `${newFirstHeight}px`;
                        secondIndexStyle.height = `${newSecondHeight}px`;
                    }, ANIMATION_SPEED_MS*i);
                }
            }
            setTimeout(resolve, ANIMATION_SPEED_MS*animations.length);
        });
        
    }

    async sortArray(idx) {
        // eval issues a warning, so disabling that warning with next line
        // eslint-disable-next-line
        await eval(array_of_algorithms[idx]);
        const len = this.state.array.length;
        let previous = 0;
        for (let i = 0; i < len; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if (previous <= this.state.array[i]) {
                const curIndexStyle = arrayBars[i].style;
                setTimeout(() => {
                    curIndexStyle.backgroundColor = FINAL_COLOR;
                }, ANIMATION_SPEED_MS*i);
                previous = this.state.array[i];
            }
        }
        setTimeout(() => {
            const arrayBars = document.getElementsByClassName('array-bar');
            for (let i = 0; i < this.state.array.length; i++) {
                arrayBars[i].style.backgroundColor = MAIN_COLOR;
            }
        }, ANIMATION_SPEED_MS*len + 2000);
    }

    render() {
        const {array} = this.state;
        return (
            <div className = "visualizer">
                <div className = "header">
                    <div className = "title">Kenya's Sorting Visualizer</div>
                    <Button onClick={() => this.resetArray()}>Generate New Array</Button>
                    <Button onClick={() => this.sortArray(0)}>Selection Sort</Button>
                    <Button onClick={() => this.sortArray(1)}>Merge Sort</Button>
                    <Button onClick={() => this.sortArray(2)}>Quick Sort</Button>
                    <Button onClick={() => this.sortArray(3)}>Heap Sort</Button>
                    <Button onClick={() => this.sortArray(4)}>Bubble Sort</Button>
                </div>
                <div className = "array-container">
                    {array.map((value, idx) => (
                        <div
                            className="array-bar"
                            key = {idx}
                            style = {{
                            backgroundColor: MAIN_COLOR,
                            height: `${value}px`,
                        }}></div>
                    ))}
                </div>
            </div>
        );
    }
}

function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}






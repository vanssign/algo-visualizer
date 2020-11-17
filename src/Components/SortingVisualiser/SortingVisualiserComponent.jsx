import React from 'react';
import { getMergeSortAnimations } from "../../Algorithms/MergeSort";
import { getBubbleSortAnimations } from "../../Algorithms/BubbleSort";
import { getInsertionSortAnimations } from "../../Algorithms/InsertionSort";
import{getSelectionSortAnimations} from '../../Algorithms/SelectionSort';
import { getQuickSortAnimations } from "../../Algorithms/QuickSort";
import './SortingVisualiser.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 120;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 15;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'rgba(0, 0, 0, 0.1)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'grey';

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
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 300));
    }
    this.setState({array});
  }

  mergeSort() {
    // Handles displaying merge sort animations
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const ifColorChange = i % 3 !== 2;
      if (ifColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    // Handles displaying quick sort animations
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparison1"
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  insertionSort() {
    // Handles displaying insertion sort animations
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparison1"
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort() {
    // Handles displaying insertion sort animations
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange === true) {
        const color =
          animations[i][0] === "comparison1"
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    // Handles displaying bubble sort animations
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      //if the first element of the one row is comparsion1 or comparision2 then set ColorChange true
      const isColorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
        //gte all the elements .array-bar
      const arrayBars = document.getElementsByClassName("array-bar");
      if (isColorChange) {
        //color change found?
        const color =
          animations[i][0] === "comparison1"
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
            //at first comparsion new animation array with color secondary color
            
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [, barIndex, newHeight] = animations[i];
        if (barIndex === -1) {
          continue;
        }
        const barStyle = arrayBars[barIndex].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


  render() {
    const {array} = this.state;

    return (
        <div className="container">
        <div className="row">
        <div className="col-12 col-md-8">
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        </div>
        </div>
        <div className="col-12 col-md-4">
        <div className="btn-container">

       <div><button className="btn btn-light" onClick={() => this.resetArray()}>Generate New Array</button></div>
       <div><button className="btn btn-light" onClick={() => this.bubbleSort()}>Bubble Sort</button></div>
      </div>
      <div><button className="btn btn-light" onClick={() => this.insertionSort()}>Insertion Sort</button></div>
       
       
        <div><button className="btn btn-light" onClick={() => this.mergeSort()}>Merge Sort</button></div>
        <div><button className="btn btn-light" onClick={() => this.quickSort()}>Quick Sort</button></div>
       
      </div>
      </div>
      </div>
    );
  }
}


export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}



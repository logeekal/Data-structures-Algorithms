import { getRandomNumberArray } from "./../../../utils/index";
import SelectionSort from "./../SelectionSort";
import BubbleSort from "../BubbleSort";
import MergeSort from './../MergeSort';

export const TEST_CASES = [
  [],
  getRandomNumberArray(1),
  getRandomNumberArray(10),
  getRandomNumberArray(20000),
  new Array(2000).fill(2)
];

export const TESTS = [
  {
    name: "Selection Sort",
    fn: SelectionSort
  },
  {
    name: "Bubble Sort",
    fn: BubbleSort
  },{
      name: "Merge Sort",
      fn: MergeSort
  }
];


import { getRandomNumberArray } from './../../../utils/index';
import { TEST_CASES, TESTS } from './SortingTestCases';
import SelectionSort from '../SelectionSort';
import { expect, assert } from 'chai';
import BubbleSort from '../BubbleSort';

describe('Running sorting tests',function(){
    TESTS.map(testCase => {
        describe(testCase.name,()=>{
            TEST_CASES.map((arrayToBeSorted, index) => {
                test(`Running test case ${index+1} with array Length ${arrayToBeSorted.length}`, ()=>{
                    let unsorted = arrayToBeSorted.slice();
                    let expectedResult =  unsorted.slice().sort((a,b)=> {return a-b});
                    let result = testCase.fn(unsorted.slice());
                    expect(result).to.be.deep.equal(expectedResult);
                    assert.notStrictEqual(result, unsorted);
                });
            });
        });
    });
});



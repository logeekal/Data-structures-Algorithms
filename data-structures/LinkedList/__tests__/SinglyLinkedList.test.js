import { assert, expect } from 'chai';
import SinglyLinkedList from '../SinglyLinkedList';
import { getRandomNumberArray }  from '../../../utils'


describe('Testing SinglyLinkedList', ()=>{

    it('Creation of LinkedList from a value ', ()=>{
        let initialValue = 4
        let newSLL =  new SinglyLinkedList(initialValue);

        assert.strictEqual(initialValue, newSLL.start.value);
        assert.strictEqual(initialValue, newSLL.end.value);
        assert.strictEqual(1, newSLL.length);
    });

    test('Empty value throws an expection', ()=> {
        expect(()=>{
            let newSLL =  new SinglyLinkedList();
        }).to.throw('At least 1 value is needed to initiate a linked List node.')
    })


    
    test('Initialize LinkedList with an array',()=> {
        let initialArray = [1,5,6,78,9,0,4,23,2];
        let arrayLength = initialArray.length;
        let newSLL =  new SinglyLinkedList(initialArray);

        assert.strictEqual(initialArray[0], newSLL.start.value);
        assert.strictEqual(initialArray[arrayLength-1], newSLL.end.value);
        assert.strictEqual(newSLL.length, arrayLength );
    });

    test('Get LinkedList in an Array',()=> {
        let len = 2000;
        let initialArray = getRandomNumberArray(len);
        // console.log(initialArray.length
        let newSLL =  new SinglyLinkedList(initialArray);
        // let LLArray = newSLL.toArray();

        assert.strictEqual(initialArray[0], newSLL.start.value);
        assert.strictEqual(initialArray[len-1], newSLL.end.value);
        assert.strictEqual(newSLL.length, len );
        // assert.sameOrderedMembers(LLArray, initialArray)

    })
})
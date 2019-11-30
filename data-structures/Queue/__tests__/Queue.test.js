import Queue from './../Queue';
import { expect, assert } from 'chai';



describe('Testing Single Queues', ()=>{

    test('Enqueuing in a queue',()=>{
        let queue = new Queue();
        let newElement = 6;
        queue.enqueue(newElement);
        expect(queue.toArray()).to.be.deep.equal([newElement]);
    });

    test('Dequeing an element',()=>{
        let queue = new Queue();

        let newElements = [4,5,6,7,78];
        for (let element of newElements){
            queue.enqueue(element);
        }

        let dequeued =  queue.dequeue();
        assert.strictEqual(dequeued,newElements[0]);
        assert.strictEqual(queue.count,newElements.length-1);

    });

    test('Peeking an element',()=>{
        let queue = new Queue();

        let newElements = [4,5,6,7,78];
        for (let element of newElements){
            queue.enqueue(element);
        }

        let peeked =  queue.peek();
        assert.strictEqual(peeked,newElements[0]);
        assert.strictEqual(queue.count,newElements.length);
    });

    test('Peeking after dequeing', ()=>{
        let queue = new Queue();

        let newElements = [4,5,6,7,78];
        for (let element of newElements){
            queue.enqueue(element);
        }
        queue.dequeue();
        let peeked =  queue.peek();
        assert.strictEqual(peeked,newElements[1]);
        assert.strictEqual(queue.count,newElements.length-1);
    });

    test('Is Queue empty', ()=>{
        let queue = new Queue();

        let newElements = [4,5,6,7,78];
        for (let element of newElements){
            queue.enqueue(element);
        }
        for(let counter = 0; counter< newElements.length; counter++){
            queue.dequeue();
        }
        expect(queue.isEmpty()).to.be.true;
    });
    
})
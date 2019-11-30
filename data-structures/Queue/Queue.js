export default class Queue {
    
    /**
     * 
     * @param {number} size Manadatory parameter to initiate Queue of a particular size 
     */
    constructor(){

        this.queue = [];
        this.front = 0;
        this.back =  -1;

        this.count = 0;
    }

    enqueue(value){
        this.queue.push(value);
        this.back++;
        this.count++;
    }

    dequeue(){
        if(this.front > this.back){
            throw new Error('Nothing to Dequeue');
        }
        this.front++;
        this.count--;
        return this.queue[this.front-1];
    }

    isEmpty(){
        return this.front > this.back;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.queue[this.front];
    }


    toArray(){
        return this.queue.slice(this.front, this.back+1);
    }



}
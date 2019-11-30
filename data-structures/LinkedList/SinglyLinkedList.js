class SinglyLinkedListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }

    isEqual(node){
        return node.value === this.value;
    }

}


export default class SinglyLinkedList{

    constructor(value){
        if(!value){
            throw new Error('At least 1 value is needed to initiate a linked List node.')
        }

        if(value instanceof Array){
            this.fromArray(value);
        }else{
            let node = new SinglyLinkedListNode(value);

            this.start = node;
            this.end = node;
            this.length = 1
        }

    }

    append(value) {
        let node = new SinglyLinkedListNode(value);
        this.start.next = node;
        this.end = node;

        this.length += 1;
    }

    removeNodeByIndex (index)  {
        let counter = 0;
        if(index >= length){
            throw new Error('Index out of bounds');        }
        if(index === 0){
            if(this.length >  1){
                this.start = this.start.next;
                return
            }

            this.start = null;
            this.end = null;
            
        }

        let currentNode = this.start;
        while (currentNode.next !== this.end){
            if (counter === index - 1){
                currentNode.next = currentNode.next.next;
                if (counter === this.length -1){
                    this.end =  currentNode;
                } 
                return;
            }
            currentNode = currentNode.next;
            counter++;
        }

        this.length = this.length - 1;
    }

    getIndex(value) {
        let counter = 0 ;
        let result = -1;

        let currentNode = this.start;
        while(currentNode.next){
            if(currentNode.value ===  value){
                result = counter;
                return result;
            }

            currentNode = currentNode.next;
            counter++;
        }

        return result;
    }

    toArray() {
        let result = [];

        let currentNode = this.start;

        while(currentNode.next){
            result.push(currentNode.value);
        }

        return result;
    }

    fromArray  (arrayOfValues) {
        let newNode;
        if(!this.length){
            this.length = 0;
        }
        arrayOfValues.forEach((value, index) => {
            newNode = new SinglyLinkedListNode(value);
            if(index === 0 && this.length === 0){
                this.start = newNode;
                this.end = newNode;
                this.length++;
            }else{
                this.append(value);
            }
        })
    }

    prepend(value) {

        let newNode =  new SinglyLinkedListNode(currentNode.value);  

        newNode.next = this.start;

        this.start = newNode;
        this.length ++ ;
    }

    reverse() {
        let resultSLL = new SinglyLinkedList(this.start.value);


        let currentNode =  this.start.next;
        while(currentNode.next){
            this.prepend(currentNode.value);
        }
        return resultSLL;
    }

    
}
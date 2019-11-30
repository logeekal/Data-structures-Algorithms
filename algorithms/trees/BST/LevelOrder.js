// Also called as Breadth First Search

import BSTree from "./../../../data-structures/Trees/BSTree";
import Queue from "./../../../data-structures/Queue/Queue";

/**
 *
 * @param {BSTree} tree Tree on which travesal needs to carried on.
 * 
 * @return {Array} Array of the value of all the nodes in Level Order traversal
 */
export function LevelOrderTraversal(tree) {
    let result = [];

    let LOQueue =  new Queue();

    let currentNode = tree.root;

    
    LOQueue.enqueue(currentNode);

    while(!(LOQueue.isEmpty())){
        let newVal =  LOQueue.peek();

        if(newVal.left){
            LOQueue.enqueue(newVal.left)
        }

        if(newVal.right){
            LOQueue.enqueue(newVal.right)
        }

        result.push(LOQueue.dequeue().value);
    }

    return result;
    
}

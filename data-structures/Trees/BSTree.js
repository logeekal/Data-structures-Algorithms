import BTreeNode from './BTreeNode'

export default class BSTree {
    /**
     * Pass any primitive or BTreeNode object to instantiate a tree.
     * @param {string | number | BTreeNode} value 
     */
    constructor(value){
        // console.log(value instanceof BTreeNode);
        if (value instanceof BTreeNode){
            this.createFromNode(value);
        }else{
            this.root = this.createNode(value);
        }
    };


    createNode(value){
        return new BTreeNode(value);
    }

    createFromNode(node){
        // console.log(`creating from node : ${node}`);
        this.root = node;
    }

    /**
     * Add primitive item in Binary search treee.
     * @param {primitive value needs to be added} value 
     */
    addItem(value){
        // console.log(`Now inserting ${value} in subtree`);
        // console.log(this);
        let newTree =  new BSTree(value);
        let subTree;
        if (value <= this.root.value){
            //traverse left tree
            if(!this.root.left){
                this.root.left = newTree.root;
                return;
            }else{
                subTree = new BSTree(this.root.left)
            }

        }else{
            //traverse right tree
            if(!this.root.right){   
                this.root.right = newTree.root;
                return;
            }
            subTree = new BSTree(this.root.right)
        }
      
        return subTree.addItem(value);
    }


    /**
     * This method is used to insert values of an array in an existing tree. this method has option
     * to be balanced after insertion
     * @param {Array} inputArray Array that is required to inserted in an existing tree
     * @param {Boolean} balanced Should tree be balanced after insertion. Default: false
     */
    insertArray(inputArray, balanced=false){
        for(let counter=0; counter<inputArray.length; counter++){
            this.addItem(inputArray[counter]);
        }
    }

    /**
     *  This method returns the reference to the Node which matches the value, 
     *  else it returns undefined.     * 
     * @param {number |  string} value  Value that is required to be searched. 
     * 
     * @returns {BTreeNode} node Reference to the node which matches the value;
     */
    search(value){

    }

    
    /**
     * 
     * @param {('LO'|'IO'|'PRO'|'PSO')} mode Mode which should be used to print the value. 
     * 
     */
    print(mode='LO'){
        switch(mode){
            case 'LO':
                this._printLO();
        }
    }


    _printLO(level=0){
        //Breadth first search
        let result = [];
        let sameLevelNodes = [];
        let currentNodes = [this.root.left, this.root.right]

        result.push(this.root.value);


    }


    inOrder(){
        let result = []
        console.log('---------------------')
        console.log(this);
        if(this.root.left){
            result.push(...this.inOrder(new BSTree(this.root.left)));
        }
        result.push(this.root.value);
        if(this.root.right){
            result.push(...this.inOrder(new BSTree(this.root.right)));
        }
        return result;
    }


    /**
     * 
     * This method helps in deleting the value. If value is not found, it returns false 
     * else it results true. 
     * 
     * If there are multiple similar values in the tree, this method will need to be
     * called multiple times
     * 
     * @param {string | number} valueTobeDeleted Value that is needed to be deleted from the tree;
     */
    delete(valueTobeDeleted){
        let subtree;
        let temp;
        // console.log(this)
        if(this.root.value > valueTobeDeleted){
            if(this.root.left){
                subtree = new BSTree(this.root.left)
                this.root.left = subtree.delete(valueTobeDeleted);
                
            }
            return this.root;
        }else  if (this.root.value < valueTobeDeleted){
            if(this.root.right){
                subtree = new BSTree(this.root.right);
                this.root.right = subtree.delete(valueTobeDeleted);
            }
            return this.root;
        }

        if(this.root.value === valueTobeDeleted){
            //if it is leaf
            if(this.root.isLeaf()){
                // this.root = null;
                return null;
            }else if (!(this.root.left)){
                // this.root = this.root.right;
                return this.root.right;

            }else if (!(this.root.right)){
                // this.root = this.root.left;
                return this.root.left;
            }else{
                subtree =  new BSTree(this.root.right);
                temp = subtree.getLowest();
                this.root.value = temp.value;
                let modifiedTree = subtree.delete(temp.value);
                this.root.right =  modifiedTree;
                return this.root;
            }
        }
    }




    /**
     * gives the highest value in a particular tree
     * @returns {BTreeNode}
     */
    getHeighest(){
        if(!this.root.right){
            return this.root;
        }

        let subtree =  new BSTree(this.right)
        return subtree.getHeighest();
    }
    
    /**
     * Gives the lowert value in a particular tree
     * 
     * @returns {BTreeNode}
     */
    getLowest(){
        if(!(this.root.left)){
            return this.root;
        }

        let subtree =  new BSTree(this.root.left)
        return subtree.getLowest();
    }


    static treeToObject(tree){
        let treeObj =  {};
        // console.log(`Printing tree`);
        // console.log(tree);
        treeObj.value =  tree.root.value;
        
        treeObj.left = tree.root.left ? BSTree.treeToObject(new BSTree(tree.root.left)) : null;
        
        treeObj.right= tree.root.right ? BSTree.treeToObject(new BSTree(tree.root.right)) : null;

        return treeObj; 
    }

    /**
     * Creates a Binary Search tree from an array. It is not balanced by default, you can use 
     * balanced switch to make sure that it is balanced;
     * 
     * @param {Array} array Pass only an Array object to be converted to a tree
     * @param {Boolean} balanced Should method balance the tree after creation
     */
    static fromArray(array, balanced){
        if(!(array instanceof Array)){
            throw new TypeError('Provided input is not an Array')
        }

        let outputTree = new BSTree(array[0]);

        outputTree.insertArray(array.slice(1))
        return outputTree;
    }
}
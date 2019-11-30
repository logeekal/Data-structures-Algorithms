export default class BTreeNode {
    constructor( value){
        if(value === undefined){
            throw new Error('Node value is required initiating the node.')
        }
        this.value = value;
        this.left =  undefined;
        this.right = undefined;
    }


    /**
     * Checks if the given node is leaf or not.
     * 
     * @return {Boolean}
     */
    isLeaf(){
        if(this.left || this.right){
            return false;
        }
        return true;
    }

    
}
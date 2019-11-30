import BSTree from "../BSTree"
import { expect, assert } from 'chai';
import BTreeNode from './../BTreeNode';
import { getRandomNumberArray } from './../../../utils/index';

describe('Testing Binary Search Trees',()=>{

    test('Creating a tree with a value',()=>{
        let value =  4;
        let tree = new BSTree(value);
        assert.strictEqual(tree.root.value, value);
        expect(tree.root.left).to.be.undefined;
        expect(tree.root.right).to.be.undefined;
    });

    test('Creating a tree with a Binary tree Node', ()=>{ 
        let value = 4;
        let bTreeNode = new BTreeNode(value);
        let tree = new BSTree(bTreeNode);
        assert.strictEqual(tree.root.value, value);
        expect(tree.root.left).to.be.undefined;
        expect(tree.root.right).to.be.undefined;
    });

    test('Adding an item to Binary Search Tree\'s root right node', ()=> {
        let rootValue = 4;
        let toBeInserted = 10;

        let tree = new BSTree(rootValue);
        tree.addItem(toBeInserted);
        assert.strictEqual(tree.root.value, rootValue);
        expect(tree.root.left).to.be.undefined;
        expect(tree.root.right.value).to.be.equal(toBeInserted);
    });

    test('Adding an item to Binary Search Tree\'s root left node', ()=> {
        let rootValue = 4;
        let toBeInserted = 1;

        let tree = new BSTree(rootValue);
        tree.addItem(toBeInserted);
        assert.strictEqual(tree.root.value, rootValue);
        expect(tree.root.right).to.be.undefined;
        expect(tree.root.left.value).to.be.equal(toBeInserted);
    });

    test('Getting tree as an object',()=> {
        let rootValue = 4;
        let leftValue = 1;
        let rightValue = 10;

        let result = {
            value: 4,
            left:{ 
                 value: 1, 
                 left: null, 
                 right: null
                }, 
            right: { 
                value: 10, 
                left: null, 
                right: null
            }
        }
        let tree = new BSTree(rootValue);
        tree.addItem(leftValue);    
        tree.addItem(rightValue);
        let treeObj = BSTree.treeToObject(tree);
        expect(treeObj).to.be.deep.equal(result);
    });

    test('Insert Elements in an existing tree with an array',()=>{
        let rootValue = 4;
        let insertionArray = [4,5,7,10,2,3,0]

        let resultObj = {
            value: 4,
            left: {
                value:4,
                left: {
                    value: 2,
                    left: {
                        value: 0,
                        left: null,
                        right: null,
                    },
                    right: {
                        value: 3,
                        left:null,
                        right: null,
                    }
                },
                right: null,
            },
            right:{
                value:5,
                left: null,
                right: {
                    value: 7,
                    left: null,
                    right: {
                        value: 10,
                        left: null,
                        right: null,
                    }
                }
            }
        };

        let tree = new BSTree(rootValue);
        tree.insertArray(insertionArray);
        let treeObj =  BSTree.treeToObject(tree);
        expect(treeObj).to.be.deep.equal(resultObj);

    });

    //Inorder traversal test missed;

    test('Deleting an Element from the tree',()=>{ 
        let rootValue = 4;
        let insertionArray = [5,7,10,6,4.5,2,3,0];
        let expectedResult = {
  "value": 4,
  "left": {
    "value": 2,
    "left": {
      "value": 0,
      "left": null,
      "right": null
    },
    "right": {
      "value": 3,
      "left": null,
      "right": null
    }
  },
  "right": {
    "value": 5,
    "left": {
      "value": 4.5,
      "left": null,
      "right": null
    },
    "right": {
      "value": 7,
      "left": {
        "value": 6,
        "left": null,
        "right": null
      },
      "right": null
    }
  }
}

        let tree = new BSTree(rootValue);
        tree.insertArray(insertionArray);
        tree.delete(10);

        expect(BSTree.treeToObject(tree)).to.be.deep.equal(expectedResult);

    })
    
})
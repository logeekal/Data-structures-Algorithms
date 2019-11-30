import { LevelOrderTraversal } from './../BST/LevelOrder';
import BSTree from './../../../data-structures/Trees/BSTree';
import { assert, expect } from 'chai';


describe('Testing Level Order Traversal/Breadth first Search',()=>{

    test('LO Traversal',()=>{
        let treeData = [4,5,7,4.5,2,0,3,6,10];
        let tree = BSTree.fromArray(treeData);

        let expectedResult = [4,2,5,0,3,4.5,7,6,10];

        let actualResult =  LevelOrderTraversal(tree);
        // console.log(JSON.stringify(BSTree.treeToObject(tree)));
        // console.log(actualResult);
        expect(actualResult).to.be.deep.equal(expectedResult);
    })
})
import GraphEdge from './GraphEdge';

export default class GraphNode{

    constructor(value){
        this.value = value; //values inside graph node.
        this.edges = [];    //array of GraphEdges Object.
    }

    this.addEdge = toNode => {
        let edge = new GraphEdge(this, toNode);
        this.edges.push(edge);
    }

    this.removeEdge = toNode => {
        for (let edge of this.edges){
            if(edge.edgeExists(this, toNode)){
                edge.removeEdge(this, toNode);
            }
        }
    }

    this.isEqual = node => {
        this.value === node.value
        return true;
    }
}
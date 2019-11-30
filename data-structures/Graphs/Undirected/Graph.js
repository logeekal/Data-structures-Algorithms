import GraphNode from './GraphNode';

export default class Graph{
    /**
     * 
     * A graph consist of a set of connected nodes.
     * Each node needs to have set of edges that should be connect to another vertex or node.
     * 
     * 
     */

     constructor(value, isDirected=true){
        this.vertices = [];
        this.edges = []
        
        this.addVertex(value);
     }

     this.addVertex = value  => {
        let node  = new GraphNode(value);
        this.vertices.push(node);
     }

     this.deleteVertex = value => {
        let newVertex =  new GraphNode(value);
        
        // We will check if vertices have it and if yes.
        // we will remove it.
        this.vertices.filter(vertex=>{
            //checking if the vertex is event there.
            if(vertex.isEqual(newVertex)){
                
            }
        });




     }
}
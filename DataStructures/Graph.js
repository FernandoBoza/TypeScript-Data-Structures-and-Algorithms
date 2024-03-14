
class Graph {
    adjacencyList = {}

    add(vertex){
        if(!this.adjacencyList[vertex])  this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        if(!!vertex1 && !!vertex2) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1,vertex2){
        if(!!vertex1 && !!vertex2) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(ver => ver !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(ver => ver !== vertex1);
        }
    }

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length){
            const adjVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjVertex)
        }
        delete this.adjacencyList[vertex];
    }
}

const g = new Graph();
g.add("Miami")
g.add("LA")
g.add("NYC")
g.add("London")
g.add("Paris")
g.addEdge('LA', 'Miami')
g.addEdge("London", 'Paris')
g.addEdge("Miami", 'Paris')
g.addEdge("NYC", 'Miami')
g.addEdge("NYC", 'Paris')
g.addEdge("NYC", 'London')
g.addEdge("NYC", 'LA')
g.removeEdge('Paris', 'Miami')
g.removeVertex('NYC');

console.log(g.adjacencyList)

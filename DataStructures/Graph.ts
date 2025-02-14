type Vertex = string;

export default class Graph<T> {
    constructor(public adjacencyList = {}) {}

    public addVertex = (vertex: Vertex): void => {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    public addEdge = (vertex1: Vertex, vertex2: Vertex) => {
        if(
            this.adjacencyList[vertex1] &&
            this.adjacencyList[vertex2] &&
            !this.adjacencyList[vertex1].includes(vertex2) &&
            !this.adjacencyList[vertex2].includes(vertex1)
        ) {
            this.adjacencyList[vertex2].push(vertex1)
            this.adjacencyList[vertex1].push(vertex2)
        }
    }

    public deleteEdge = (vertex1: Vertex, vertex2: Vertex) => {
        if(
            this.adjacencyList[vertex1].includes(vertex2) &&
            this.adjacencyList[vertex2].includes(vertex1)
        ){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        }
    }

    public deleteVertex = (vertex: Vertex) => {
        if(this.adjacencyList[vertex]) delete this.adjacencyList[vertex]
        for (const vertexKey in this.adjacencyList) {
            if(this.adjacencyList[vertexKey].includes(vertex)){
                this.adjacencyList[vertexKey] = this.adjacencyList[vertexKey].filter(v => v != vertex);
            }
        }
    }

    public DFS_recursive = (vertex: Vertex) => {
        let results = [],
            visited = {};

        let dfs = (vertex: Vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            results.push(vertex)
            this.adjacencyList[vertex].forEach(v => {
                if(!visited[v]) return dfs(v)
            })
        }
        dfs(vertex)
        return results
    }
}

const g = new Graph();
g.addVertex("Miami")
g.addVertex("LA")
g.addVertex("NYC")
g.addVertex("London")
g.addVertex("Paris")
g.addEdge('LA', 'Miami')
g.addEdge("London", 'Paris')
g.addEdge("Miami", 'Paris')
g.addEdge("NYC", 'Miami')
g.addEdge("NYC", 'Paris')
g.addEdge("NYC", 'London')
g.addEdge("NYC", 'LA')
g.deleteEdge('Paris', 'Miami')
g.deleteVertex('NYC');

console.log(g.adjacencyList)
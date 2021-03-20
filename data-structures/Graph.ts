type Vertex = string

export default class Graph {
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

    public DFS_iterative(vertex: Vertex) {
        let callStack = [];
        callStack.push(vertex)
        while(callStack.length >= 1) {
            let v = callStack.pop();
        }
    }
}

let g = new Graph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');

g.DFS_recursive('A')
g.DFS_iterative('A')

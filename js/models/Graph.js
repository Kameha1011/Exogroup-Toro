class Graph {
  #graph;
  #isDirected;
  constructor(isDirected = false) {
    this.#graph = {};
    this.#isDirected = isDirected;
  }

  hasVertex(vertex) {
    return vertex in this.#graph;
  }

  #vertexExists(vertex) {
    if (!vertex in this.#graph) {
      throw new Error("vertex not found");
    }
  }

  addVertex(vertex) {
    if (vertex in this.#graph) {
      throw new Error("vertex already exists");
    }
    this.#graph[vertex] = {};
  }

  addEdge(vertex1, vertex2, weight = 1) {
    this.#vertexExists(vertex1);
    this.#vertexExists(vertex2);

    this.#graph[vertex1][vertex2] = weight;

    if (!this.#isDirected) {
      this.#graph[vertex2][vertex1] = weight;
    }
  }

  getNeighbours(vertex) {
    this.#vertexExists(vertex);
    return Object.keys(this.#graph[vertex]);
  }

  getEdgeWeight(vertex1, vertex2) {
    this.#vertexExists(vertex1);
    this.#vertexExists(vertex2);

    return this.#graph[vertex1][vertex2];
  }

  // If the graph is directed only checks if vertex1 is connected to vertex2
  arevertexsConnected(vertex1, vertex2) {
    this.#vertexExists(vertex1);
    this.#vertexExists(vertex2);

    return vertex2 in this.#graph[vertex1];
  }

  deleteVertex(vertex) {
    this.#vertexExists(vertex);

    delete this.#graph[vertex];

    for (const v in this.#graph) {
      if (vertex in this.#graph[v]) {
        delete this.#graph[v][vertex];
      }
    }
  }

  deleteEdge(vertex1, vertex2) {
    this.#vertexExists(vertex1);
    this.#vertexExists(vertex2);

    delete this.#graph[vertex1][vertex2];

    if (!this.#isDirected) {
      delete this.#graph[vertex2][vertex1];
    }
  }

  [Symbol.iterator]() {
    const vertex = Object.keys(this.#graph);
    let index = 0;

    return {
      next: () => {
        if (index < vertex.length) {
          return { value: vertex[index++], done: false };
        }
        return { done: true };
      },
    };
  }
}

export default Graph;

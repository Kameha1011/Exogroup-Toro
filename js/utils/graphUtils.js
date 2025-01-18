import { MOVIES } from "../constants.js";
import Graph from "../models/Graph.js";

/**
 * Builds a directed graph from a predefined list of movies.
 * Each movie is represented as a vertex, and edges are created
 * between movies based on their "next" property.
 *
 * @returns {Graph} The constructed graph with movies as vertices and their relationships as edges.
 */
export function buildGraph() {
    const graph = new Graph(true);
  
    for (const movie of MOVIES) {
      if (!graph.hasVertex(movie.name)) {
        graph.addVertex(movie.name);
      }
  
      for (const nextMovie of movie.next) {
        graph.addVertex(nextMovie);
        graph.addEdge(movie.name, nextMovie, 1);
      }
    }
  
    return graph;
  }

export function getNextMovies(graph, movie) {
    return graph.getNeighbours(movie);
  }
  
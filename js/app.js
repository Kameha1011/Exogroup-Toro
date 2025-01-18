import { QUESTIONS } from "./constants.js";
import { asignSelectionEvents, renderMovies } from "./moviesSelection.js";
import { renderStageIndicator, updateQuestion, updateQuestionIndicator } from "./questionIndicator.js";
import { buildGraph } from "./utils/graphUtils.js";

const state = {
  currentQuestion: 0,
  graph: buildGraph(),
  actual_movies: ["blonde", "the_gray_man", "minions"],
};

function main() {
  renderStageIndicator();
  renderMovies(state.actual_movies);
  asignSelectionEvents(state);
  updateQuestion(QUESTIONS[state.currentQuestion], state.currentQuestion);
  updateQuestionIndicator(state.currentQuestion);
}

main();

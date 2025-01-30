import { QUESTIONS, MOVIES } from "./constants.js";
import { asignSelectionEvents, renderMovies } from "./moviesSelection.js";
import { renderStageIndicator, updateQuestion, updateQuestionIndicator } from "./questionIndicator.js";

const state = {
  movies: MOVIES,
  currentQuestion: 0,
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

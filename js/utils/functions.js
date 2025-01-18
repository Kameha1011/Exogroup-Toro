import { QUESTIONS} from "../constants.js";
import { updateCTA } from "../cta.js";
import { updateMovies } from "../moviesSelection.js";
import { updateQuestion, updateQuestionIndicator, updateStages } from "../questionIndicator.js";

export function isQuestionaryCompleted(currentQuestion) {
  return currentQuestion === QUESTIONS.length;
}

/**
 * Updates the DOM based on the given state.
 *
 * @param {Object} state - The current state of the application.
 * @param {Array} state.actual_movies - The list of actual movies.
 * @param {number} state.currentQuestion - The index of the current question.
 */
export function updateDOM(state) {
  updateMovies(state.actual_movies, state.currentQuestion);
  updateQuestionIndicator(state.currentQuestion);
  updateQuestion(QUESTIONS[state.currentQuestion], state.currentQuestion);
  updateStages(state.currentQuestion);
  updateCTA(state.currentQuestion);
}

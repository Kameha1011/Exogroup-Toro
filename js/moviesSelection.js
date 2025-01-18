import { IMDB_URLS } from "./constants.js";
import { setCtaUrl } from "./cta.js";
import { isQuestionaryCompleted, updateDOM } from "./utils/functions.js";
import { getNextMovies } from "./utils/graphUtils.js";

/**
 * Renders a list of movies into the DOM.
 *
 * @param {string[]} movies - An array of movie names to be rendered.
 */
export function renderMovies(movies) {
  const movieWrapper = document.querySelector(".selection__options-wrapper");
  movieWrapper.innerHTML = "";
  for (const movie of movies) {
    movieWrapper.innerHTML += `
      <div class="selection__option" id="${movie}">
              <img
                class="selection__option-image"
                src="/assets/images/${movie}.webp"
                alt="${movie}"
              />
            </div>
      `;
  }
}

/**
 * Assigns click event listeners to movie selection options.
 * When a movie option is clicked, it updates the state with adjacent movies,
 * increments the current question counter, and updates the DOM.
 *
 * @param {Object} state - The state object containing the current state of the application.
 * @param {Array} state.graph - The graph representing the movie relationships.
 * @param {Array} state.actual_movies - The array to be updated with adjacent movies.
 * @param {number} state.currentQuestion - The current question counter to be incremented.
 */
export function asignSelectionEvents(state) {
  const movieOptions = document.querySelectorAll(".selection__option");

  for (const movie of movieOptions) {
    movie.addEventListener("click", () => {
      state.actual_movies = getNextMovies(state.graph, movie.id);
      state.currentQuestion++;
      setCtaUrl(IMDB_URLS[movie.id]);
      updateDOM(state);
    });
  }
}

/**
 * Updates the movie elements in the DOM based on the provided movies array and the current question.
 *
 * @param {Array<string>} movies - An array of movie identifiers.
 * @param {number} currentQuestion - The index of the current question in the questionnaire.
 */
export function updateMovies(movies, currentQuestion) {
  const moviesElement = document.querySelectorAll(".selection__option");
  const selectionWrapper = document.querySelector(
    ".selection__options-wrapper"
  );

  if (isQuestionaryCompleted(currentQuestion)) {
    selectionWrapper.classList.add("hide");
  } else {
    for (let i = 0; i < moviesElement.length; i++) {
      moviesElement[i].id = movies[i];
      const img = moviesElement[i].querySelector("img");
      img.src = `/assets/images/${movies[i]}.webp`;
      img.alt = movies[i];
    }
  }
}

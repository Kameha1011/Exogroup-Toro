import { QUESTIONS } from "./constants.js";
import { isQuestionaryCompleted } from "./utils/functions.js";

/**
 * Updates the question displayed in the selection element.
 *
 * @param {string} question - The new question to display.
 * @param {number} currentQuestion - The index of the current question.
 */
export function updateQuestion(question, currentQuestion) {
  const questionElement = document.querySelector(".selection__question");
  if (isQuestionaryCompleted(currentQuestion)) {
    questionElement.classList.add("hide");
  } else {
    questionElement.innerHTML = question;
  }
}

/**
 * Updates the question counter display with the current question number.
 *
 * @param {number} currentQuestion - The index of the current question (0-based).
 */
function updateQuestionCounter(currentQuestion) {
  const actualQuestion = document.querySelector("#actual_question");
  actualQuestion.innerHTML = `${currentQuestion + 1} of ${QUESTIONS.length}`;
}

/**
 * Updates the stages in the header based on the current question index.
 *
 * @param {number} currentQuestion - The index of the current question.
 */
export function updateStages(currentQuestion) {
  const stages = document.querySelectorAll(".header__stage");
  stages.forEach((stage, index) => {
    if (index === currentQuestion) {
      stage.classList.add("header__stage_active");
    } else {
      stage.classList.remove("header__stage_active");
    }
  });
}

/**
 * Updates the question indicator based on the current question.
 * If the questionnaire is completed, hides the question indicator.
 * Otherwise, updates the question counter and stages.
 *
 * @param {number} currentQuestion - The current question number.
 */
export function updateQuestionIndicator(currentQuestion) {
  const questionIndicator = document.querySelector(".header__counter-wrapper");
  if (isQuestionaryCompleted(currentQuestion)) {
    questionIndicator.classList.add("hide");
  } else {
    updateQuestionCounter(currentQuestion);
    updateStages(currentQuestion);
  }
}

/**
 * Renders the stage indicators in the header.
 * Clears the existing stage indicators and creates a new one for each question in the QUESTIONS array.
 */
export function renderStageIndicator() {
    const stagesWrapper = document.querySelector(".header__stages-wrapper");
    stagesWrapper.innerHTML = "";
    for (let i = 0; i < QUESTIONS.length; i++) {
      stagesWrapper.innerHTML += "<span class='header__stage'></span>";
    }
  }
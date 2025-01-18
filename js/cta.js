import { isQuestionaryCompleted } from "./utils/functions.js";

/**
 * Sets the href attribute of the element with the class "cta__link" to the specified URL.
 *
 * @param {string} url - The URL to set as the href attribute of the CTA link.
 */
export function setCtaUrl(url) {
    const cta = document.querySelector(".cta__link");
    cta.href = url;
  }
  
  /**
   * Updates the Call-To-Action (CTA) element based on the provided URL and current question.
   * If the questionnaire is not completed, the function returns without making any changes.
   *
   * @param {string} url - The URL to set for the CTA.
   * @param {Object} currentQuestion - The current question object to check if the questionnaire is completed.
   */
export function updateCTA(currentQuestion) {
    if (!isQuestionaryCompleted(currentQuestion)) {
      return;
    }
    const ctaWrapper = document.querySelector(".cta");
    ctaWrapper.classList.remove("hide");
    ctaWrapper.classList.add("show");
  }
  
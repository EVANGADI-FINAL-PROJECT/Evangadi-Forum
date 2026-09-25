import { apiClient } from '../core/api.client.js';

function getMessage(error, fallback) {
  return (
    error.response?.data?.msg ||
    error.response?.data?.message ||
    error.response?.data?.errors?.[0]?.msg ||
    fallback
  );
}

async function getQuestions(params = {}) {
// Task: Dashboard Page
  // TODO: Request the question list and return the API response.
  // Write the task implementation here.
}

async function searchQuestionsSemantic(query, options = {}) {
// Task: Dashboard Page
  // TODO: Request semantic search results and return the API response.
  // Write the task implementation here.
}

async function getSingleQuestion(questionHash) {
// Task: Question Detail Page
  // TODO: Request a single question and its answers.
  // Write the task implementation here.
}

async function createQuestion(payload) {
// Task: Post Question Page
  // TODO: Submit a new question and return the API response.
  // Write the task implementation here.
}

async function generateQuestionDraftCoach(payload) {
// Task: Post Question Page
  // TODO: Request AI Draft Coach feedback.
  // Write the task implementation here.
}

async function assessAnswerFit(questionHash, answerText) {
// Task: Question Detail Page
  // TODO: Request AI Answer Fit Evaluation.
  // Write the task implementation here.
}

async function getSimilarQuestions(questionHash, options = {}) {
// Task: Question Detail Page
  // TODO: Request similar questions for the current question.
  // Write the task implementation here.
}

export const questionService = {
  getQuestions,
  searchQuestionsSemantic,
  getSingleQuestion,
  createQuestion,
  generateQuestionDraftCoach,
  assessAnswerFit,
  getSimilarQuestions,
};

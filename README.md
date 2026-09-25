# Evangadi Forum — Clean Restart Repository

This repository is a **learning restart** of the final Evangadi Forum project. The previous completed implementation was used only as the structural reference. Task implementations have been removed so each student can rebuild and commit their assigned work.

## Rules for this restart

- Keep the existing file/folder structure unless the task requires a new file.
- Keep existing imports unless your implementation genuinely requires an additional import.
- Keep function/component names and existing route names.
- Keep the JSX/HTML skeleton and CSS class names where they were provided.
- Every reset location contains a `// Task: ...` comment with the **full task name**.
- Do not copy the old implementation from the previous repository.
- Each student should create a branch, implement their task, commit it, push it, and open a PR.

## Task → affected files

### Milestone 1 — Authentication

| Task | Affected files |
|---|---|
| **Register User** | `backend/src/api/auth/controller/auth.controller.js`; `backend/src/api/auth/service/auth.service.js`; `backend/src/api/auth/validations/auth.validation.js` |
| **Login User** | `backend/src/api/auth/controller/auth.controller.js`; `backend/src/api/auth/service/auth.service.js`; `backend/src/api/auth/validations/auth.validation.js` |
| **Axios + Auth Service** | `frontend/src/services/core/api.client.js`; `frontend/src/services/auth/auth.service.js` |
| **Auth Page UI** | `frontend/src/pages/Auth/Auth.jsx`; `frontend/src/pages/Auth/Auth.module.css` |
| **AuthContext + ProtectedRoute** | `frontend/src/contexts/AuthContext.jsx`; `frontend/src/components/ProtectedRoute/ProtectedRoute.jsx`; `frontend/src/components/ProtectedRoute/ProtectedRoute.module.css` |
| **Public Landing Page** | `frontend/src/pages/Landing/Landing.jsx`; `frontend/src/pages/Landing/Landing.module.css` |

### Milestone 2 — Questions & Answers

| Task | Affected files |
|---|---|
| **Create Question & Auto-Embed** | `backend/src/api/question/controller/question.controller.js`; `backend/src/api/question/service/question.service.js`; `backend/src/api/question/service/vector.service.js`; `backend/src/api/question/validation/question.validation.js`; `backend/src/utils/ai/embedding.js` |
| **List Questions** | `backend/src/api/question/controller/question.controller.js`; `backend/src/api/question/service/question.service.js`; `backend/src/api/question/validation/question.validation.js` |
| **Get Single Question Details** | `backend/src/api/question/controller/question.controller.js`; `backend/src/api/question/service/question.service.js`; `backend/src/api/question/validation/question.validation.js` |
| **Semantic Search Questions** | `backend/src/api/question/controller/question.controller.js`; `backend/src/api/question/service/question.service.js`; `backend/src/api/question/service/vector.service.js`; `backend/src/api/question/validation/question.validation.js`; `backend/src/utils/ai/embedding.js` |
| **Find Similar Questions** | `backend/src/api/question/controller/question.controller.js`; `backend/src/api/question/service/question.service.js`; `backend/src/api/question/service/vector.service.js`; `backend/src/api/question/validation/question.validation.js` |
| **Create Answer** | `backend/src/api/answer/controller/answer.controller.js`; `backend/src/api/answer/services/answer.service.js`; `backend/src/api/answer/validation/answer.validation.js` |
| **AI Question Draft Coach** | `backend/src/api/question/controller/question.controller.js`; `backend/src/api/question/service/geminiTextCoach.service.js`; `backend/src/api/question/validation/question.validation.js` |
| **AI Answer Fit Evaluation** | `backend/src/api/question/controller/question.controller.js`; `backend/src/api/question/service/question.service.js`; `backend/src/api/question/validation/question.validation.js`; `backend/src/utils/ai/gemini.js` |
| **Layout Shell** | `frontend/src/components/Layout/Layout.jsx`; `frontend/src/components/Layout/Layout.module.css`; `frontend/src/components/Navbar/Navbar.jsx`; `frontend/src/components/Navbar/Navbar.module.css`; `frontend/src/components/Sidebar/Sidebar.jsx`; `frontend/src/components/Sidebar/Sidebar.module.css` |
| **Dashboard Page** | `frontend/src/pages/Dashboard/Dashboard.jsx`; `frontend/src/pages/Dashboard/Dashboard.module.css`; `frontend/src/services/question/question.service.js`; `frontend/src/components/QuestionCard/QuestionCard.jsx` |
| **Post Question Page** | `frontend/src/pages/PostQuestion/PostQuestion.jsx`; `frontend/src/pages/PostQuestion/PostQuestion.module.css`; `frontend/src/services/question/question.service.js`; `frontend/src/components/MarkdownEditor/MarkdownEditor.jsx` |
| **Question Detail Page** | `frontend/src/pages/QuestionDetail/QuestionDetail.jsx`; `frontend/src/pages/QuestionDetail/QuestionDetail.module.css`; `frontend/src/services/question/question.service.js`; `frontend/src/services/answer/answer.service.js`; `frontend/src/components/MarkdownEditor/MarkdownEditor.jsx` |
| **My Questions Page** | `frontend/src/pages/MyQuestions/MyQuestions.jsx`; `frontend/src/pages/MyQuestions/MyQuestions.module.css`; `frontend/src/services/question/question.service.js`; `frontend/src/components/QuestionCard/QuestionCard.jsx` |

### Milestone 3 — Knowledge Base (RAG)

| Task | Affected files |
|---|---|
| **Upload & Process RAG Document** | `backend/src/api/rag/controller/rag.controller.js`; `backend/src/api/rag/service/rag.service.js`; `backend/src/api/rag/validation/rag.validation.js`; `backend/src/utils/rag/chunk.js`; `backend/src/utils/ai/embedding.js` |
| **Semantic Search in RAG Document** | `backend/src/api/rag/controller/rag.controller.js`; `backend/src/api/rag/service/rag.service.js`; `backend/src/api/rag/validation/rag.validation.js`; `backend/src/utils/rag/vector.js`; `backend/src/utils/ai/embedding.js` |
| **AI Query Grounded in RAG Document** | `backend/src/api/rag/controller/rag.controller.js`; `backend/src/api/rag/service/rag.service.js`; `backend/src/api/rag/validation/rag.validation.js`; `backend/src/utils/rag/vector.js`; `backend/src/utils/rag/answer.js` |
| **Get RAG Document Metadata** | `backend/src/api/rag/controller/rag.controller.js`; `backend/src/api/rag/service/rag.service.js`; `backend/src/api/rag/validation/rag.validation.js` |
| **Stream RAG Document PDF** | `backend/src/api/rag/controller/rag.controller.js`; `backend/src/api/rag/service/rag.service.js`; `backend/src/api/rag/validation/rag.validation.js` |
| **List My RAG Documents** | `backend/src/api/rag/controller/rag.controller.js`; `backend/src/api/rag/service/rag.service.js` |
| **Delete RAG Document** | `backend/src/api/rag/controller/rag.controller.js`; `backend/src/api/rag/service/rag.service.js`; `backend/src/api/rag/validation/rag.validation.js` |
| **RAG Documents Page** | `frontend/src/pages/RagDocuments/RagDocuments.jsx`; `DocumentList.jsx`; `DocumentListItem.jsx`; `RagAskAI.jsx`; `RagPreview.jsx`; `RagSearch.jsx`; `StatusBadge.jsx`; `RagDocuments.module.css`; `frontend/src/services/rag/rag.service.js`; `frontend/src/components/RagAnswerBody/RagAnswerBody.jsx` |

**Important:** CSS files and shared components are listed where the task's UI is expected to use or modify them. The restart does not require students to rewrite CSS unless the task documentation says so.

## Git workflow

1. Clone the new repository.
2. Create a branch named after your task, for example `feature/t05-login-user`.
3. Implement only your assigned task.
4. Test your work locally.
5. Commit with a useful message, for example `feat: implement login user`.
6. Push the branch.
7. Open a Pull Request into `main`.
8. Do not push directly to `main`.

## Important shared-file warning

Several tasks intentionally share controller/service files. Before coding, coordinate with the other student working in the same file. Do not replace another student's function or merge their work blindly.

## Task specifications

The original task documentation is stored under `task-specifications/`. Read the relevant task document before implementing the code.

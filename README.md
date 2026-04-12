# Kanban Task Management App

A fully functional Kanban-style task management application for organising tasks across three columns: Todo, Doing, and Done.

This project demonstrates dynamic data fetching, localStorage persistence, modular JavaScript architecture, and responsive UI design.

---

## Live Demo

[Kanban Task Management App](https://mughammads-kanban-project.netlify.app/)

---

## Project Presentation

[Placeholder for video link]

---

## Features

### API Data Fetching

- Fetches initial tasks dynamically from an external API
- Displays a loading message while data is being retrieved
- Shows an error message if the fetch fails

### Data Persistence

- Saves tasks to localStorage
- Loads tasks from storage on page reload
- Maintains task state and structure across sessions

### Task Management

- Create new tasks with a title, description, status, and priority
- Edit task details via a modal
- Delete tasks with a confirmation prompt
- All updates reflect immediately in the UI and in storage

### Task Organisation

Tasks are grouped into three columns: Todo, Doing, and Done. Column counters update dynamically as tasks move between states.

### Priority System

- Tasks carry priority levels: High, Medium, or Low
- Priority is visually indicated on each task card
- Tasks are automatically sorted High to Low within each column
- Sort order persists after page refresh

### Sidebar and Navigation

- Toggleable sidebar that can be shown or hidden
- Mobile-accessible menu from the header
- Consistent behaviour across desktop and mobile

### Theme Toggle

- Switch between Light Mode and Dark Mode
- Theme preference is saved in localStorage
- Works across all screen sizes

---

## Technologies

- HTML5
- CSS3 (Flexbox, Grid, Responsive Design)
- JavaScript (ES6 Modules)
- localStorage API
- Fetch API
- Netlify (Deployment)

---

## Project Structure

├── scripts/
│ ├── api/ # API fetching and data handling logic
│ ├── tasks/ # Task creation, modification, and management logic
│ ├── ui/ # DOM rendering, modal interactions, and interface updates
│ ├── utils/ # Utility functions, including local storage operations
│ └── main.js # Application initialization and module orchestration
├── index.html # Primary HTML document
├── styles.css # Application styling and theme definitions
├── PROJECT-BRIEF.md # Original project requirements and specifications
└── README.md # Application documentation

---

## Key Implementation Details

**Modular architecture** - Code is split into focused modules for scalability and maintainability. Each module handles a single responsibility, keeping concerns cleanly separated.

**State management** - Tasks are managed through localStorage and kept in sync with UI updates, so no data is lost between sessions.

**Dynamic rendering** - The UI updates in response to task changes without requiring a full page reload.

---

Author: Mughammad Case

---

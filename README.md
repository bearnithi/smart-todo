# Smart TODO

Smart TODO is a simple task management application built with Angular.

Visit the live demo: [Smart TODO Demo](https://smart-tasks.vercel.app/)

## Table of Contents

- [Smart TODO](#smart-todo)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Build](#build)
  - [Testing](#testing)
  - [Dependencies and Technologies](#dependencies-and-technologies)

## Introduction

Smart TODO is a angular application designed to help you manage your tasks efficiently. Wit allows you to add, edit, and mark tasks as completed.

## Setup

To run Smart TODO locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bearnithi/smart-todo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd smart-todo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run start
   ```

5. Open your browser and visit `http://localhost:4200/` to view Smart TODO.

## Usage

1. **Add a Task:** Enter your task in the input field and press "Add Task" or hit Enter.
2. **Mark as Completed:** Check the checkbox next to a task to mark it as completed.
3. **Edit a Task:** Click the edit button to modify the task title and due date.
4. **Delete a Task:** Click the delete button to remove a task from the list.

## Build

To build the Smart TODO app for deployment, use the following commands:

```bash
npm install
npm run build
```

This will create a dist/ directory containing the production-ready files.

## Testing

Smart TODO uses Jasmine and Karma for unit testing. To run the tests, use:

```bash
npm run test
```

## Dependencies and Technologies

Smart TODO is built with the following dependencies and technologies:

- Angular
- Bootstrap
- Bootstrap Icons
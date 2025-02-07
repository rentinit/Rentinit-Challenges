# Live Coding Challenge: Rick And Morty Challenge

## Overview

Welcome to the live coding challenge for the Senior React Developer position. In this challenge, you are tasked with enhancing a **Live Search Component**:

### Interview Format

1. **Introduction (5 minutes)**

   - Brief introductions and explanation of the interview's format.

2. **Live Coding Challenge (35 minutes)**

   - This segment focuses on technical skills, design decisions, and the ability to discuss trade-offs and alternative approaches.

3. **Behavioral Interview Questions (15 minutes)**

   - A set of open-ended questions designed to gauge how the candidate handles code reviews, technical disagreements, architectural decision-making, mentoring, and continuous learning.

4. **Wrap-Up & Q&A (5 minutes)**
   - Provide time for the candidate to ask questions about Rentinit and the team.

### Requirements

- Update the SearchComponent to do the following:
  - Display search result from the api in a grid based on the user's query.
  - Show a spinning loader when the user is waiting for search results.
  - Handle api errors gracefuly and show and error message to the user.
- Bonus Points:
  - Implement input debouncing to reduce unnecessary API calls.
  - Implement cancellation of previous API calls.
  - Improve structure of the code.

Note:

- The implementation of the RickAndMortyApi already exists and has a method searchCharacters which can be used to get the search results.
- The ui components and styling for the error banner, loading spinner and characters grid already exist in the search component, so you don't need to worry about styling.

### Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rentinit/Rentinit-Challenges.git
   ```

2. **Checkout the branch:**

   ```bash
   git checkout rick-and-morty-challenge
   ```

3. **Install Dependancies:**

   ```bash
   npm install
   ```

4. **Run Dev Server:**

   ```bash
   npm run dev
   ```

# Angular Travel Planner

## Overview

**Angular Travel Planner** is an Angular-based application designed to help users visualize their trips in a timeline format. Users can enter a start and end location, and the app displays each trip segment with a unique design:
- **Continued Trips:** When the start point of a trip matches the end point of the previous trip, a straight line is drawn.
- **Non-Continued Trips:** If the trip does not continue from the last endpoint, a connecting line with an arrow is shown.
- **Consecutive Repeated Trips:** Trips with the same start and end points are displayed on a different level (Level 2) for clear distinction.

In addition to adding trips, users can now edit or delete existing trips. Every addition, edit, and deletion is logged, making it easier to track changes during the planning process. The application automatically converts full location names to a three-letter code and adjusts the layout responsively to accommodate any number of trips.

## Features

- **User Input Form:** Collects start and end locations.
- **3-Letter Code Conversion:** Automatically generates a three-letter code for each location.
- **Dynamic Trip Visualization:**
  - Continued trips are rendered with a straight line.
  - Non-continued trips are rendered with an arrow on the connecting line.
  - Repeated trips (identical start and end) are offset to Level 2.
- **Responsive Timeline:** The timeline adjusts based on the number of trips and the available container dimensions.
- **Edit and Delete Functionality:**
  - **Edit:** Modify an existing trip's start or end points.
  - **Delete:** Remove a trip from the timeline.
- **Logging:** Every trip addition, edit, and deletion is logged to help with debugging and tracking changes.
- **Clean and Modern UI:** Utilizes Angular components, SCSS for styling, and Flexbox for layout.

## Technologies

- **Angular:** Framework for building the single-page application.
- **TypeScript:** Primary language for Angular components.
- **HTML & SCSS:** For markup and styling.
- **Angular CLI:** Tooling for project setup, development, and build.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v10 or higher)
- [Angular CLI](https://angular.io/cli) (Install globally using `npm install -g @angular/cli`)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/angular-travel-planner.git
   cd angular-travel-planner

# Static Content Challenge - Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture](#architecture)
3. [Installation and Setup](#installation-and-setup)
4. [Using the Application](#using-the-application)
5. [API](#api)
6. [Deployment](#deployment)

## Introduction

This application is a solution for the Static Content Challenge, a simple content management system (CMS) that serves web pages based on markdown files. The application is built with JavaScript using React on the frontend and Node.js on the backend.

### Key Features

- Rendering of markdown content as HTML
- URL structure that reflects the folder structure
- Responsive and styled design
- API documentation with Swagger
- Flexible configuration through environment variables

## Architecture

### Project Structure

```
/
├── src/ # Source code
│ ├── config/ # Application configuration
│ ├── content/ # Markdown content files
│ ├── controllers/ # Application controllers
│ ├── middleware/ # Custom middleware
│ ├── public/ # Static files
│ ├── routes/ # Route definitions
│ ├── services/ # Application services
│ ├── tests/ # Tests
│ ├── utils/ # Utilities
│ ├── app.js # Express configuration
│ ├── server.js # Server entry point
│ └── template.html # HTML template
├── .env # Environment variables (local)
├── .env.example # Example environment variables
├── package.json # Dependencies and scripts
└── DOCUMENTATION.md # This file
```

### Data Flow

1. User requests a URL (e.g., `/about-page`)
2. Server looks for the corresponding markdown file (`content/about-page/index.md`)
3. Markdown content is converted to HTML
4. Generated HTML is inserted into the template (`template.html`)
5. Complete page is returned to the user

### Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React (Vite)
- **Markdown Processing**: Marked.js
- **API Documentation**: Swagger/OpenAPI
- **Testing**: Jest, Supertest

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Environment configuration:
   - Copy the example file
   - Edit the `.env` file according to your environment:
     ```
     PORT=3001
     APP_PUBLIC_URL=http://localhost:3001
     ```

### Environment Variables

| Variable       | Description                                                       | Default Value         |
| -------------- | ----------------------------------------------------------------- | --------------------- |
| PORT           | Port on which the server will run                                 | 3001                  |
| APP_PUBLIC_URL | Public URL of the application (includes protocol, host, and port) | http://localhost:3001 |

## Using the Application

### Starting the Server

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm start
```

### Running Tests

```bash
npm test
```

### Content Structure

Content is organized in folders within the `src/content/` directory. Each folder must contain an `index.md` file with content in markdown format.

Example:

```
src/content/
├── about-page/
│ └── index.md
├── blog/
│ ├── june/
│ │ ├── company-update/
│ │ │ └── index.md
│ │ └── index.md
│ └── index.md
└── index.md
```

### Adding New Content

To add a new page:

1. Create a new folder in `src/content/` (or subfolder)
2. Add an `index.md` file with content in markdown
3. Access the corresponding URL (e.g., `/new-folder`)

No code changes are required to add new pages.

## API

### Main Endpoints

| Method | Route         | Description                                                |
| ------ | ------------- | ---------------------------------------------------------- |
| GET    | `/*`          | Returns the HTML page corresponding to the requested route |
| GET    | `/api/routes` | Returns a list of all available content routes             |
| GET    | `/api-docs`   | API documentation (Swagger)                                |

### Response Codes

| Code | Description                                      |
| ---- | ------------------------------------------------ |
| 200  | OK - The request has been processed successfully |
| 404  | Not Found - The requested content was not found  |
| 500  | Internal Server Error - Internal server error    |

## Deployment

The application is currently deployed and available at:
**[https://static-content-challenge-server.onrender.com](https://static-content-challenge-server.onrender.com)**

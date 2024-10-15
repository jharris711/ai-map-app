# AI MAP APP

## Overview

AI MAP APP is a web application that leverages AI to provide various map-related functionalities. The app includes features such as local guides, travel planning, and geographical data analysis.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Python
- Django

### Installation

- **Clone the repository:**

  ```sh
  git clone https://github.com/your-repo/ai-map-app.git
  cd ai-map-app
  ```

- **UI Setup:**

  1. **Install Node dependencies:**

     ```sh
     cd ui
     nvm use
     npm install
     ```

  2. **Start the Vite dev server:**

     ```sh
     npm run dev
     ```

  3. **Go to [localhost:5173](http://localhost:5173) in your browser**

- **Backend Setup:**

  1. **Create a VENV:**

     ```sh
     cd backend
     python -m venv venv
     ```

  2. **Install the Python dependencies:**

     ```sh
     pip install -r requirements.txt
     ```

  3. **Run the Django server:**

     ```sh
     python manage.py runserver
     ```

  4. **Go to [localhost:8000](http://localhost:8000) in your browser to view the API admin**

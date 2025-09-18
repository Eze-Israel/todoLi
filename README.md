 To-Do List App with 3D 

A simple To-Do List Web Application built with Next.js (App Router) and Tailwind CSS, enhanced with a 3D interactive experience powered by React Three Fiber (Three.js).

This project was developed as an assessment task to demonstrate UI implementation, state management, and creativity with 3D.

 Features

 Add, complete, and delete tasks

 Task persistence with local state (no backend required)

 Modern UI styled with Tailwind CSS, based on the provided Figma design

 Uses Next.js App Router with React Server & Client Components appropriately

 Interactive 3D experience using React Three Fiber:

Optionally: rotating cube, task progress visualization, or 3D background

      Tech Stack

Next.js 15 (App Router)

React

Tailwind CSS

React Three Fiber

Three.js

 Project Structure
todoList/
│── app/
│   ├── globals.css           Tailwind base styles
│   ├── layout.tsx            Root layout
│   ├── page.tsx              Main To-Do page
│   └── components/          
│       ├── Header.tsx
│       ├── TodoInput.tsx
│       ├── TodoList.tsx
│       ├── TodoItem.tsx
│       ├── ThreeDWidget.tsx # React Three Fiber 3D twist
│
│── public/                  assets
│── package.json
│── tailwind.config.ts
│── tsconfig.json

⚡ Getting Started
1. Clone the repo
git clone  https://github.com/Eze-Israel/todoLi.git
cd todoLi

2. Install dependencies
npm install
# or
yarn install

3. Run development server
npm run dev


App will be running at: http://localhost:3000

4. Build for production
npm run build
npm run start

 3D Twist Options

 3D progress visualization (e.g., stars lighting up or a 3D progress bar)

🌌 3D animated background

📦 Deployment

Easily deployable to Vercel
:

vercel

📜 Submission Requirements

 GitHub repository link     #

 Live deployed Vercel link   #


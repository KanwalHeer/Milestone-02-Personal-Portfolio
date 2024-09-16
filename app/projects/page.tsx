import React from 'react';
import Card from './card/card';

export default function Projects() {
  return (
    <div className="p-8 bg-[#000505] min-h-screen">
      <h1 className="text-gray-300 text-3xl mb-2 mt-6 pb-2 text-center">My Projects</h1>
      <p className="text-gray-400 text-xl mb-8 text-center">
        Explore some of the projects I have created. Each project showcases different aspects of my skills and interests in software development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         
      <Card
          heading="Full Stack TodoApp"
          text="A comprehensive Todo application designed to manage tasks efficiently. Features include task creation, editing, and deletion. Designed with a user-friendly interface and optimized for both mobile and desktop."
          link="https://next-js-fullstack-todo-app-sigma.vercel.app/"
           image="/p3.png"
        />
        <Card
          heading="Blog Post"
          text="An engaging number guessing game that challenges players to guess a randomly generated number within a certain range. Features include score tracking and different difficulty levels to enhance the gaming experience."
          link="https://milestone-03-blog-post-rq1e.vercel.app/"
            image="/p2.png"
        />
        <Card
          heading="E-Commerce Website"
          text="A simple and effective word counter tool that provides real-time word and character count. Ideal for writers and students to keep track of their text length easily while working on documents or essays."
          link="https://milestone-03-project.vercel.app/"
            image="/p4.png"
        />

       <Card
          heading="Resume Builder"
          text="A comprehensive Todo application designed to manage tasks efficiently. Features include task creation, editing, and deletion. Designed with a user-friendly interface and optimized for both mobile and desktop."
          link="https://hackathon-lilac-nu.vercel.app/"
           image="/p3.png"
        />
        <Card
          heading="User Authentication"
          text="An engaging number guessing game that challenges players to guess a randomly generated number within a certain range. Features include score tracking and different difficulty levels to enhance the gaming experience."
          link="https://milestone-04-assignments.vercel.app/"
            image="/p2.png"
        />
        <Card
          heading="Birthday Card generator"
          text="A simple and effective word counter tool that provides real-time word and character count. Ideal for writers and students to keep track of their text length easily while working on documents or essays."
          link="https://task-03-birthday-card.vercel.app/"
            image="/p4.png"
        />

        <Card
          heading="Todo App"
          text="A comprehensive Todo application designed to manage tasks efficiently. Features include task creation, editing, and deletion. Designed with a user-friendly interface and optimized for both mobile and desktop."
          link="https://todoapp1234.vercel.app/todo"
           image="/p3.png"
        />
        <Card
          heading="Number Guessing Game"
          text="An engaging number guessing game that challenges players to guess a randomly generated number within a certain range. Features include score tracking and different difficulty levels to enhance the gaming experience."
          link="https://number-guessing-game-nextjs.vercel.app"
            image="/p2.png"
        />
        <Card
          heading="Word Counter"
          text="A simple and effective word counter tool that provides real-time word and character count. Ideal for writers and students to keep track of their text length easily while working on documents or essays."
          link="https://word-counter-app-in-nextjs.vercel.app"
            image="/p4.png"
        />
        <Card
          heading="Weather App"
          text="A weather forecasting application that displays current weather conditions and forecasts for various locations. Utilizes external APIs to fetch weather data and provides an intuitive interface for users."
          link="https://task-02-weather-app.vercel.app/"
            image="/p1.png"
        />
        <Card
          heading="GitHub User App"
          text="An application that allows users to search for GitHub profiles and view their repositories, followers, and other details. Provides a clean and easy-to-navigate interface for interacting with GitHub data."
          link="https://githubuser-peach.vercel.app"
            image="/p5.png"
        />
        <Card
          heading="Currency Converter"
          text="A versatile currency converter tool that allows users to convert amounts between different currencies. Includes up-to-date exchange rates and supports a wide range of currencies from around the world."
          link="https://currency-converter-five-delta.vercel.app"
            image="/p6.png"
        />
      </div>
    </div>
  );
}

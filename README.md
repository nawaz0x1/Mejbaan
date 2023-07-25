# Mejbaan

![Mejbaan Logo](https://i.ibb.co/mtX9Sjx/Web-capture-25-7-2023-195629-localhost.jpg)

Mejbaan is a surplus food sharing web application aimed at reducing food waste and combating hunger. The app enables users to share their extra food items with those in need, thereby contributing to the United Nations' Sustainable Development Goal of "Zero Hunger."

## Table of Contents

- [Introduction](#introduction)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Acknowledgments](#acknowledgments)

## Introduction

Mejbaan is a project developed for the Global NGO Executive Committee (GNEC) hackathon with a mission to address the critical issue of food wastage and hunger in the world. More than one-third of all food produced is wasted, while millions of people suffer from hunger and malnutrition every day. This web app aims to bridge this gap by creating a platform where individuals can share their surplus food items, and NGOs or volunteers can collect and distribute the food to those in need.

## Problem Statement

Approximately 2.5 billion tonnes of food are wasted annually, while around 828 million people suffer from hunger on a daily basis. The Mejbaan project tackles this issue by providing a user-friendly platform for surplus food sharing, enabling people to make a meaningful impact in their communities.

## Features

- **User Registration and Authentication**: Users can sign up and log in securely to their accounts, ensuring a personalized experience.

- **Surplus Food Listing**: Users can list the surplus food items they wish to donate. They can provide details such as the type of food, quantity, and expiry date (if applicable).

- **Location-based Search**: Mejbaan uses GPS/Location Services to provide accurate locations and distances between food donors and potential recipients.

## Technologies Used

- Front-end:

  - JavaScript
  - React.js
  - Next.js
  - Tailwind CSS
  - [Appwrite](https://appwrite.io) (Open-source Backend as a Service) for user authentication and data storage.

- Back-end (handled by Appwrite):

  - Database: MongoDB

- API Integration:
  - Geolocation API (Browser)

## How to Use

1. Clone the repository: `git clone https://github.com/nawaz0x1/mejbaan.git`
2. Install dependencies: `npm install`
3. Set up environment variables for Appwrite configuration.
4. Run the application: `npm run dev`

## Acknowledgments

I extend my gratitude to the Global NGO Executive Committee (GNEC) for organizing the hackathon and promoting initiatives towards achieving the United Nations' Sustainable Development Goals. Special thanks to the mentors, judges, and volunteers for their support and encouragement throughout this project.

Together, let's make a difference in the fight against hunger! 🌱🌍🍲

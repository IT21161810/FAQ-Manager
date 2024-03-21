# FAQ-Manager


# Frontend React App
This repository contains a frontend React application built using Vite and Material-UI.

- Table of Contents
Getting Started

- Prerequisites
Installation
Development Server
Building
Linting
Preview
Deployment
Dependencies
Contributing
License
Getting Started
- Prerequisites
- Before running this project, ensure you have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from Node.js official website.

# Installation

# 1.Clone the repository:

https://github.com/IT21161810/FAQ-Manager.git

# 2.Navigate to the project directory:

cd frontend

# 3.Install dependencies:

npm install

# Development Server
To start the development server, run:

npm run dev

# SETUP Backend

This repository contains the backend implementation for the FAQ Manager application using Spring Boot

Introduction
Technologies Used
Prerequisites
Getting Started
Installation
Configuration
Usage
Contributing
License

# Introduction
The FAQ Manager backend is built using Spring Boot, providing RESTful APIs to manage frequently asked questions. It interacts with a MySQL or Microsoft SQL Server database using Spring Data JPA for data persistence.

# Technologies Used

Spring Boot: Framework for creating stand-alone, production-grade Spring-based applications.
Spring Data JPA: Part of the larger Spring Data project, it makes it easy to implement JPA-based repositories.
MySQL Connector/J: Connector for MySQL databases.
Microsoft SQL Server JDBC Driver: Driver for Microsoft SQL Server databases.
Project Lombok: Library to reduce boilerplate code in Java classes.
JUnit: Testing framework for Java.

# Prerequisites
Before running this project, ensure you have the following installed:

Java Development Kit (JDK) version 17 or higher
Maven
MySQL or Microsoft SQL Server database (according to your choice)

# Getting Started
- Installation
Clone the repository:
https://github.com/IT21161810/FAQ-Manager.git

- Navigate to the project directory:
cd backend

# Build the project using Maven:

mvn clean install

# Configuration
- Set up your database connection properties in application.properties file located at src/main/resources:

spring.datasource.url=jdbc:mysql://localhost:3306/faqmanager
spring.datasource.username=rour password
spring.datasource.password=your password
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect

# Usage
- Start the Spring Boot application:
- mvn spring-boot:run

- The application will start on port 8080 by default. You can access the API endpoints at http://localhost:8080.

# Explore the available endpoints for managing FAQ data.

Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or bug fixes.

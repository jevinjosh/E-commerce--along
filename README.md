Milestone 1: Project Overview
Ecommerce-Follow-Along is a standard e-commerce website designed to provide a seamless online shopping experience for a wide range of users. The platform allows customers to browse products, add them to a cart, and securely make purchases. It also includes features like user authentication, product search and filtering, and order tracking.

The goal of this project is to create a functional and user-friendly e-commerce application that covers all essential aspects of online shopping, including managing products, orders, and users.

Key Features:

Product Catalog: Browse and search through a variety of products effortlessly.

User Authentication: Secure login and registration system for personalized user experiences.

Shopping Cart: Add, update, or remove items before proceeding to checkout.

Order Management: Track orders, view order history, and handle payments securely.

Admin Panel: Manage products, orders, and users with administrative controls.

Tech Stack:
Front-End: React — for building an interactive and responsive user interface.

Back-End: Node.js with Express — for server-side logic and API handling.

Database: MongoDB — for efficient storage and retrieval of product, user, and order data.


Why This Project?

This project aims to simulate the development of a real-world e-commerce platform while giving hands-on experience with the MERN stack. It’s a great way to understand the interplay between the front-end, back-end, and database, while solving a common user problem: making online shopping simple and enjoyable.

Milestone 2: Project Setup and Login Page:
Description:
In Milestone 2, I focused on structuring the project and setting up the frontend and backend for the e-commerce application. This milestone involved configuring the development environment, creating a functional login page, and laying the foundation for future API integrations.

What I Learned:
Project Folder Structure: I organized the project files into separate directories for the frontend (React) and backend (Node.js), streamlining the development process. React Frontend Setup: I initialized a React app to handle the user interface, ensuring a smooth foundation for building the app's frontend.

Node.js Backend Setup: I set up a basic Node.js server to handle backend functionality, preparing for API integration in later milestones.

Tailwind CSS Integration: I configured Tailwind CSS to enable utility-based, responsive styling throughout the project.

Login Page Development: I created the first user interface of the e-commerce platform—a functional and styled login page—allowing users to securely log into the platform.

Key Features:
Folder Structure: Organized files into frontend and backend directories for better management.

Login Page: A functional login page for users to access the platform securely.

Styling: Used Tailwind CSS to style the application with modern, responsive design principles.

Milestone 3: Project Setup for Backend
Description:
I focused on setting up the backend for the e-commerce application. This milestone involved organizing the backend code, connecting the application to MongoDB, setting up a Node.js server, and implementing basic error handling to ensure smooth operation.

What I Learned
Backend Folder Structure: I organized the backend code into a structured hierarchy, with separate folders for routes, controllers, models, and middleware.

Server Setup: I initialized a Node.js server using Express and configured it to listen on a designated port, ready to handle incoming API requests.

MongoDB Integration: I connected the application to MongoDB, ensuring efficient data storage and retrieval.

Error Handling: I implemented basic error handling to provide clear messages for debugging and better user feedback when something goes wrong.

Key Features:
Backend Organization: Set up a clean folder structure for organizing backend files.

Server Initialization: Configured a basic Node.js server using Express.

Database Connection: Successfully integrated MongoDB for data management.

Error Handling: Added basic error handling for smoother server operation.

Milestone 4: Creating User Model and Controller
Description:
I expanded the backend functionality of the e-commerce application by introducing user data management and file uploads. This involved creating a User Model and Controller, as well as configuring Multer for handling file uploads like profile pictures.

What I Learned:
User Model Creation: Designed a blueprint for user data, specifying fields like name, email, and password using a MongoDB schema.

User Controller: Implemented logic to manage user-related operations, such as adding new users and retrieving their information. File Uploads with Multer: Configured Multer to handle and store file uploads securely, enabling the application to accept user-uploaded images.

Key Features:
User Model: Defined the structure for user data in the database using MongoDB schemas.

User Controller: Managed server-side operations related to users, like handling requests for user registration or retrieval.

File Uploads: Enabled file upload functionality, allowing users to upload profile pictures that are stored on the server.

Milestone 5: Sign-Up Page Implementation
Overview
In this milestone, we focused on enhancing the frontend by building the Sign-Up Page and setting up routes to handle the user sign-up process smoothly.

Learning Outcomes 🎯
By completing this milestone, we:

Created the frontend UI for users to register by filling out their details.

Implemented form validation to ensure user inputs (like email and password) met the required criteria before submission.

Sign-Up Page
The Sign-Up page allowed users to enter their details to create an account. This page included fields for:

Name

Email

Password

It provided users with a structured way to submit their information, which was then sent to the server for processing.

Form Validation
Form validation was implemented to ensure users entered correct and properly formatted information.

Email addresses were validated to match a standard email format.

Passwords were checked to meet security criteria (e.g., minimum length).

Invalid inputs were restricted to prevent errors and ensure the backend received clean data.

Milestone 6: Backend Signup Endpoint Implementation
Overview
In this milestone, we focused on developing the backend for the Signup page, ensuring that user data is securely stored in the database.

Learning Outcomes
By completing this milestone, we:

Learned how to encrypt passwords before saving them.

Stored complete user data securely in the database.

Key features:
Encrypting the Password

Used bcrypt to hash the user's password during signup.

Stored the hashed password in the database instead of plain text.

Storing Complete User Data

Saved all user details (e.g., name, email, etc.) securely in the database.

Ensured the password remained encrypted.

Milestone 7:
Overview
This milestone focused on implementing a backend endpoint for user login. The main objectives were to validate user credentials and verify the encrypted password stored in the database.

Steps for Milestone 7
Created Login Endpoint:
Accepted user credentials (email/username and password).

Retrieved the corresponding user from the database.

Validated Password:
Used bcrypt to hash the entered password.

Compared it with the stored hashed password for authentication.

Milestone 8: Product Card Component and Homepage
Overview
This milestone focused on creating a frontend card component for products and designing a homepage to display these cards for each product.

Learning Goals:
Learned how to create a card component.

Learned how to display those cards on the products page.

Created a reusable card component for displaying product details.

Used props to pass product information dynamically.

Implemented array mapping to render multiple product cards.

Designed a structured homepage layout usinG TAILWIND CSS.

Milestone 9:
Learning Goals
Learn how to create a form to collect product details Learn how to take multiple images as input

Key Points
The form will be used to input product details, which will be saved in the database and displayed on the product home page
The form should support uploading multiple product images

Milestone 10: Creating a Mongoose Schema and Endpoint
Learning Goals
Learned how to write a product schema using Mongoose
Learned how to create an endpoint to validate and store product details in MongoDB
Key Points
Product Schema
Defined the structure of product data, including fields like name, description, price, and image URL
Ensured proper validation, such as required fields and correct data types
Endpoint Creation
Built a POST endpoint to receive product data
Validated and stored the product details in MongoDB

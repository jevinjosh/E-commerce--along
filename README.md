#Milestone 1:#
Overview:
ShopEase is a robust e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It is designed to offer users a seamless shopping experience, providing easy browsing, secure transactions, and personalized recommendations. This project is a practical implementation of full-stack development concepts.

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


#Milestone 2#:
Description
In Milestone 2, I focused on structuring the project and setting up the frontend and backend for the e-commerce application. This milestone involved configuring the development environment, creating a functional login page, and laying the foundation for future API integrations.

What I Learned
Project Folder Structure: I organized the project files into separate directories for the frontend (React) and backend (Node.js), streamlining the development process.
React Frontend Setup: I initialized a React app to handle the user interface, ensuring a smooth foundation for building the app's frontend.
Node.js Backend Setup: I set up a basic Node.js server to handle backend functionality, preparing for API integration in later milestones.
Tailwind CSS Integration: I configured Tailwind CSS to enable utility-based, responsive styling throughout the project.
Login Page Development: I created the first user interface of the e-commerce platform—a functional and styled login page—allowing users to securely log into the platform.
Key Features
Folder Structure: Organized files into frontend and backend directories for better management.
Login Page: A functional login page for users to access the platform securely.
Styling: Used Tailwind CSS to style the application with modern, responsive design principles.

#Milestone 3#
Project Description
In Milestone 3, I focused on setting up the backend for the e-commerce application. This milestone involved organizing the backend code, connecting the application to MongoDB, setting up a Node.js server, and implementing basic error handling to ensure smooth operation.

What I Learned
Backend Folder Structure: I organized the backend code into a structured hierarchy, with separate folders for routes, controllers, models, and middleware.
Server Setup: I initialized a Node.js server using Express and configured it to listen on a designated port, ready to handle incoming API requests.
MongoDB Integration: I connected the application to MongoDB, ensuring efficient data storage and retrieval.
Error Handling: I implemented basic error handling to provide clear messages for debugging and better user feedback when something goes wrong.

Key Features
Backend Organization: Set up a clean folder structure for organizing backend files.
Server Initialization: Configured a basic Node.js server using Express.
Database Connection: Successfully integrated MongoDB for data management.
Error Handling: Added basic error handling for smoother server operation.

#Milestone 4#

 user-uploaded images.
# Ecommerce-Follow-Along
#Milestone 4#

Description
In Milestone 4 I expanded the backend functionality of the e-commerce application by introducing user data management and file uploads. This involved creating a User Model and Controller, as well as configuring Multer for handling file uploads like profile pictures.

What I Learned
User Model Creation: Designed a blueprint for user data, specifying fields like name, email, and password using a MongoDB schema.

User Controller: Implemented logic to manage user-related operations, such as adding new users and retrieving their information.
File Uploads with Multer: Configured Multer to handle and store file uploads securely, enabling the application to accept user-uploaded images.

Key Features

User Model: Defined the structure for user data in the database using MongoDB schemas.

User Controller: Managed server-side operations related to users, like handling requests for user registration or retrieval.

File Uploads: Enabled file upload functionality, allowing users to upload profile pictures that are stored on the server.

Submission Summary
Code Push: All code changes have been pushed to the GitHub repository used for previous milestones.

Repository Accessibility: The repository is publicly accessible.

README Update: Added a summary of Milestone 4 progress to the README file.

File Upload Support: Successfully configured Multer for handling and storing user-uploaded images.




#Milestone 5#
Sign-Up Page and Form Validation

Key Features:
Sign-Up Page: Developed a user-friendly registration page.
Form Validation: Implemented validation for user inputs.

Tech stack:

Frontend: React

*Milestone 6:*
  This milestone focus on the password Encryption and User Data Storage

  Key Features

       1)Password Encryption: Used bcrypt to hash passwords.
       2)User Data Storage: Saved user data securely in the user inputs.

 Tech stack used :
   - Backend : node.js

   *Milestone 7:*
  In this milestone we are going to create a backend endpoint for user and  the focus is on validating user credentials and verifying the encrypted password stored in the database.



Key features:
   1)validate user credentials during login:
Protect User Data: Keeps passwords safe even if the database is compromised.
Privacy: Ensures passwords aren't stored in plain text.
Compliance: Meets security standards like GDPR and PCI-DSS.
Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

   2) compare the encrypted password with the user’s input:
User Enters Credentials:

The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

Tech stalk:
 Backend : bcryptjs.


*Milestone 8:*
In this milestone,  we will create a frontend card component for products and design a homepage to display these cards for each product.

Key features:
  1) create a card component:
Showcase Products Effectively: Presents product details in a clear and visually appealing way.
Reusable Design: Can be used across multiple pages or sections of the app.
Improved User Experience: Makes it easy for users to browse and interact with products.
Organized Layout: Keeps the homepage clean and structured.
  2) display those cards on the products page:
Create a Dynamic Component: Design a single card component that accepts product details as props.
Use Mapping: Use array mapping to iterate over the product list and render a card for each product.
Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.
Maintain Consistency: Ensure the layout remains uniform for all products.



Tech stack :
Frontend: react

# Milestone 9 : In this milestone, we will create a Createproduct page using react.
Key features:
We can add and remove images from the webpage.
We can preview images.
We can add our names and descriptions on it.
We can specify content based on category.
We can specify tags.
We can specify prices range.
We can include our preferred stock.
We can add our e-mail.
Tech Stack : React

## Milestone 10: Updated models/product.js controller/product.js Createproductjs

# Controller/Product.js:

This Express.js route handles the creation of a new product. It validates the product data, 
checks if the user exists in the database, and ensures that at least one image is uploaded.
 If validation passes, the product is saved to the database and a success message is returned.

# model/Product.js

This code defines a Mongoose schema for a "Product" model in MongoDB. It specifies fields such as 
name, description, category, tags, price, stock, email, and images, with validation rules to ensure
 that required data is provided. Additionally, it includes automatic timestamping for creation and modification times.
  The schema is then used to create and export the Product model.

# src/Creatproduct.js

The CreateProduct component is a form for creating a new product. Here's a quick breakdown of its key features:

State Management: Uses useState to manage the form data for name, description, category, tags, price, stock, and email, along with image handling (images and previewImages).
File Handling: Allows users to upload multiple images, which are previewed before submission. The images are added to the form data using FormData.
Form Submission: When the form is submitted, the data is sent to the backend using axios. If the request is successful, a success message is displayed, and the form is reset. If there's an error, an alert is shown.
Category Options: Provides a set of predefined categories for the product (Electronics, Fashion, Books, and Home Appliances).



*Milestone 11 - Dynamic Home Page with MongoDB Integration*

In this milestone, we focused on making the home page dynamic by fetching and displaying product data stored in MongoDB. 
The objective was to write a backend endpoint that retrieves all saved product data and sends it to the frontend.
On the frontend, we implemented a function to request this data and dynamically render it using the previously created product card component. 
This milestone helped in understanding how to extract data from MongoDB, send it through an API endpoint, receive it in the frontend,
and display it efficiently using components. By completing this, we have successfully built a dynamic product listing system that 
enhances user interaction and improves the functionality of our application.

*Milestone 12 - My Products Page with User-Based Filtering*

In this milestone,we developed the My Products page, which displays only the products added by the logged-in user based on their email. 
We achieved this by writing a backend endpoint that filters product data in MongoDB using the user's email and sends only the relevant 
products to the frontend. On the frontend, we implemented a function to fetch this filtered data and dynamically render it using the 
existing product card component.This milestone provided valuable experience in filtering data based on specific constraints, handling 
API requests efficiently, and dynamically displaying user-specific content. Successfully completing this step enhances the personalization
of the application, allowing users to manage their own products seamlessly. 


*Milestone 13 : In this miletone, we will add an functionality to edit the uploaded products.*

*Key feautures :*
 We will add edit button and then write and backend endpoint to update the new details inside MongoDB database. How to write an endpoint that will update the existing data in MongoDB. How to auto fill the form with previous data and give option to edit. Summary : Write an endpoint that will receive new data and update the existing data inside MondoDB. In frontend we will add an edit button to the product card. When click on edit we will send the data to form and make it auto fill and have option to edit those data and save. Tech Stack : React - frontend - components - MyProduct.jsx Backend - controller - product.js



*Milestone 14 :In this milestone, we will add an functionality to delete button to the product data and write and backend endpoint to delete the product with the use of ID.*

*Key feautures:*
 How to write an endpoint that delete the product with specific ID from MongoDB. Wrote an endpoint that will Delete the data form MongoDB using ID. In frontend we will add an delete button to the product card. When click on delete button we will send the product id to server endpoint. Summary : We created an delete option in myproducts Tech Stack : React - frontend - component - MyProduct.jsx Backend - controller - product.js



*Milestone 15 :In this milestone, we will create and Navbar component and add nav component to every screen.*

*Key feautures:*
 Create an new Nav component with links to all pages: Home, My-products, Add product, Cart. Made the Navbar responsive to all screen sizes. We added the nav component to all the pages and make the navigations to all this pages smooth and easy. 
 
 *Summary :* We created a NavBar component where we can access different pages directly just creating a button instead of changing the URL. And also we made the NavBar responsive according to device (..like Desktop and Mobilephone). Tech Stack : React - frontend - src - components - NavBar.jsx React - frontend - pages - Cart.jsx
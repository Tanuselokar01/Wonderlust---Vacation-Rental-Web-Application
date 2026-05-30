#Wonderlust - Vacation Rental Web Application

Overview
Wonderlust is a full-stack vacation rental web application inspired by platforms like Airbnb. The platform allows users to browse, create, edit, and manage vacation property listings through an intuitive and responsive interface.
The application is built using the MERN backend stack components (MongoDB, Express.js, Node.js) with EJS for server-side rendering. It provides secure user authentication, session management, image uploads, and complete CRUD functionality for property listings.

Features
User Authentication & Authorization
* User registration and login system using Passport.js.
* Secure password hashing and authentication.
* Session management using Express Session and Connect-Mongo.
* Protected routes to ensure only authorized users can modify their listings.

Property Listing Management
* Create new vacation rental listings.
* View detailed information about listed properties.
* Edit existing property details.
* Delete property listings.
* Store listing data efficiently using MongoDB and Mongoose.

Image Upload & Storage
* Upload property images through Cloudinary integration.
* Secure image storage and retrieval.
* Dynamic image rendering for listings.

Review System
* Users can add reviews and ratings for listed properties.
* Review management with proper validation.
* Relationship mapping between listings and reviews.

Responsive User Interface
* Mobile-friendly and responsive design.
* Clean property cards with images and pricing details.
* Easy navigation across listings and user pages.

Search & Pricing Display
* Browse available rental properties.
* Display rental prices in Indian Rupees (INR).
* Organized property information for better user experience.

Tech Stack
Frontend
* HTML5
* CSS3
* Bootstrap
* EJS

Backend
* Node.js
* Express.js

Database
* MongoDB
* Mongoose

Authentication & Security
* Passport.js
* Passport-Local
* Express Session
* Connect-Mongo

Cloud Services
* Cloudinary

Project Architecture
* MVC (Model-View-Controller) Architecture
* RESTful Routing
* Middleware-based Authentication
* MongoDB Data Modeling with Mongoose

Key Learnings
Through this project, I gained hands-on experience in:
* Building full-stack web applications.
* Designing RESTful APIs.
* Database modeling with MongoDB.
* Authentication and authorization implementation.
* Session and cookie management.
* Cloud-based image storage.
* Deploying production-ready web applications.

Future Enhancements
* Advanced property search and filters.
* Location-based search using maps.
* Booking and reservation system.
* Wishlist functionality.
* Payment gateway integration.
* User profile management.

Installation
1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add:
```env
ATLASDB_URL=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
SECRET=your_session_secret
```

4. Start the application:
```bash
node app.js
```
or

```bash
nodemon app.js
```

5. Open:
```text
http://localhost:8080
```

Author
Tanu Selokar
Full Stack Developer | Node.js | Express.js | MongoDB | JavaScript


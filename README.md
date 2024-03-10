<p align="center">
  <a href="" rel="noopener">
 <img src="./client/public/images/2.png" alt="Project logo"></a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/render-published-darkgreen.svg)]()

</div>

---
## Table of Contents
- [The project demands](#the-project-demands)
- [Main Feature](#main-feature)
- [Participants](#participants)
- [Instructions for GitHub Collaborations](#instructions-for-github-collaborations)
    - [Pre Requirements](#pre-requirements)
        - [Cloning the project from GitHub](#cloning-the-project-from-github)
        - [Server Setup](#server-setup)
        - [Uploading Changes to the GitHub Project](#uploading-changes-to-the-github-project)
        - [Check Status and Branches](#check-status-and-branches)
        - [Commit Changes](#commit-changes)
        - [Push Changes to Your Branch](#push-changes-to-your-branch)
        - [Setting Up Remote Repository](#setting-up-remote-repository)
        - [Pulling Changes from the Main Branch](#pulling-changes-from-the-main-branch)
        - [Merging Your Branch to Main](#merging-your-branch-to-the-main-branch)
        - [Deleting Unnecessary Branches](#deleting-unnecessary-branches)
        - [Creating a New Branch](#creating-a-new-branch)
- [Technology Stack](#technology-stack)
- [MERN Full Stack Project Structure](#mern-full-stack-project-structure)
- [MongoDB and Mongoose Schema Example](#mongodb-and-mongoose-schema-example)
- [API Endpoints Collection](#api-endpoints-collection)
- [Bcryptjs](#bcryptjs)
- [Deployment](#deployment-on-render)


## The project demands

  <p> Creating a fictional travel agency website with a booking system using the <a href="https://www.mongodb.com/mern-stack"> MERN Stack</a> (MongoDB, Express.js, React.js, and Node.js).
      <br> 
</p>

## Main Feature

The booking app enables users to effortlessly reserve accommodations in different cities and countries, offering a seamless way to find and book rooms tailored to their travel needs.

## Participants
| Main Role                        | Name                       |
|----------------------------------|----------------------------|
| Scrum Master                     | Ahmed Benmouh              |
| GitHub Assistant                 | Jose Oldemar Chaves Urbina |
| Trello Assistant & Documentation | Victoria Vavulina          |

All participants were actively engaged in the development of both the front-end and back-end components.

## Instructions for GitHub Collaborations

- **GitHub Link**: [View GitHub](https://github.com/Bee4rt/helppomatka)

These instructions will get you a copy of the project running on your local machine for development and testing purposes.

### Pre Requirements:

Please download Git for your computer from the following link:
[Git Downloads.](https://git-scm.com/downloads)

Similarly, download Node.js for your computer from the following link:
[Node.js Downloads.](https://nodejs.org/en/download/)

### Cloning the Project from GitHub:

Follow these steps to clone the project from GitHub:

#### Create a New Folder:

Begin by creating a new empty folder for your project.

#### Navigate to the Folder:

Open your terminal and move to the folder you created:

    cd folderYouCreated

#### Clone the Repository:

Clone your GitHub repository into the folder:

    git clone yourGitHubRepositoryLink

#### Confirm Successful Cloning:

Verify that the cloning process was successful:

    git status

#### Access Cloned Repository:

Enter the directory containing the cloned repository:

    cd nameOfClonedRepository

By following these steps, you'll successfully clone the project from GitHub and set it up in your local environment.

### Server Setup:
To quickly set up and run both the frontend and backend servers, follow these steps:

#### For Frontend:
Navigate to the client directory:

    cd client

Install dependencies:

    npm install

Start the development server:

    npm run dev

#### For Backend:
Move to the api directory:

    cd api

Install dependencies:

    npm install

Start the backend server:

    npm start

By following these instructions, both the frontend and backend servers will be up and running in development mode, allowing you to work on your application seamlessly.

### Uploading Changes to the GitHub Project:

#### Follow these steps every time you update the project:

**Note:** Always create a local backup in a new folder before pushing or pulling changes from GitHub. Work on your branch to prevent conflicts in the repository.

#### Check Main Branch Status:

Before adding your own code, ensure the main branch is up-to-date:

    git checkout main
    
    git pull

#### Switch to Your Branch:

Return to your own branch or create a new one:

    git checkout yourBranchName

or

    git checkout -b yourBranchName

### Check Status and Branches:

Verify the status of your branch and check available branches:

    git status
    
    git branch

#### Edit Code:

Make necessary changes in your branch.

### Commit Changes:

Commit all changes once:

    git add .
    
    git commit -a -m "Description of your changes"

### Push Changes to Your Branch:

Push your changes to your branch:

    git push

### Setting Up Remote Repository:

If git push gives an error, set up the remote repository:

    git push --set-upstream origin yourBranchName

or

    git push -u origin yourBranchName

### Pulling Changes from the Main Branch:

If you need to sync your branch with the main branch:

    git checkout yourBranchName

    git pull origin main

Resolve any conflicts, if present.

### Merging Your Branch to the Main Branch:

Merge your branch changes into the main branch:

    git checkout main
    
    git pull
    
    git merge yourBranchName
    
    git push

### Deleting Unnecessary Branches:

List and delete unnecessary branches:

    git branch

    git branch -d yourBranchName

Verify the deletion:

    git branch

### Creating a New Branch:

If needed, create a new branch:

    git checkout -b yourBranchName

By following these steps, you can effectively manage changes and collaboration on the GitHub project.

## Technology Stack
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [React](https://react.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [CSS](https://www.w3schools.com/Css/) - Stylesheets for Styling
- [React Bootstrap](https://react-bootstrap.github.io/) - Styling Framework
- [Postman](https://www.postman.com/) - APIs Testing Tool
- [JSON Web Token](https://jwt.io/) - Securing APIs
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Hashing Passwords
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance Optimization

## MERN Full Stack Project Structure

```sh
project/
│
├── api/                                    # Backend Node.js application
│   ├── controllers/                        # Route handlers/controllers
│   │   ├── userController.js               # Example: Controller for user-related routes
│   │   └── ...                             # Other controllers
│   ├── models/                             # Database models (Mongoose schemas)
│   │   ├── userModel.js                         # Example: Mongoose schema for User model
│   │   └── ...                             # Other model schemas
│   ├── node_modules/                       # Node.js dependencies (generated)
│   ├── routes/                             # Express.js route definitions
│   │   ├── userRoutes.js                   # Example: Routes for user-related endpoints
│   │   └── ...                             # Other route modules
│   ├── utils/                              # Utility modules
│   │   ├── error.js                        # Example: Module for handling errors
│   │   ├── verifyToken.js                  # Example: Module for verify token
│   │   └── ...                             # Other utility modules
│   ├── .env                                # Environment variables specific to the backend
│   ├── index.js                            # Entry point for Node.js / Express.js server
│   ├── package.json                        # Dependencies for the backend
│   ├── package-lock.json                   # Lock file for backend dependencies
│   └── ...                                 # Other backend files
│
├── client/                                 # Frontend React application
│   ├── node_modules/                       # Node.js dependencies (generated)
│   ├── public/                             # Static assets
│   │   └── image.svg                       # Image.svg
│   ├── src/                                # React components, styles, and scripts
│   │   ├── components/                     # Reusable UI components
│   │   │   ├── navbar/                     # Example: Navbar component
│   │   │   │   └── NavBar.jsx              # React code for Navbar component
│   │   │   └── ...                         # Other components
│   │   ├── contexts/                       # React Contexts for global state management
│   │   │   ├── AuthContext.jsx             # Example: Authentication context
│   │   │   └── ...                         # Other contexts
│   │   ├── pages/                          # React components representing different pages
│   │   │   ├── login/                      # Example: Login page
│   │   │   │   └── Login.jsx               # React code for Login page
│   │   │   └── ...                         # Other pages
│   │   ├── services/                       # Business logic layer (optional)
│   │   │   ├── Api.jsx                     # Example: API service for making HTTP requests
│   │   │   └── ...                         # Other service modules
│   │   ├── App.jsx                         # Main React application component
│   │   ├── main.jsx                        # Entry point for React application
│   │   └── ...                             # Other React-related files
│   ├── .gitignore                          # Specifies files to ignore by version control
│   ├── index.html                          # HTML template
│   ├── package.json                        # Dependencies for the frontend
│   ├── package-lock.json                   # Lock file for frontend dependencies
│   ├── README.md                           # Frontend documentation
│   ├── vite.config.js                      # Vite configuration file
│   └── ...                                 # Other frontend files
│
├── README.md                               # Project documentation
└── ...                                     # Other project files and directories
```

## MongoDB and Mongoose Schema Example

### Code Example for Using Mongoose Schema:

```javascript
import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  reserve: {
    type: String,
    default: "seen",
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema)

/*
  {
    "name": "Madame Marimelle",
    "type": "Hotel",
    "city": "Tallinna",
    "address": "Lai 19",
    "distance": "1590",
    "photos": ["1.jpeg", "2.jpeg"],
    "title": "Luxurious hotel in the city",
    "desc": "Luxury hotel",
    "rating": 4,
    "rooms": ["Sviit", "Regular"],
    "cheapestPrice": 150,
    "featured": true
  }
*/

```

## API Endpoints Collection

This document outlines the API endpoints available in the Helppomatka API collection.

### Collection Details:

- **Collection Name**: Helppomatka
- **Collection Link**: [View Collection](https://helpomatka.postman.co/workspace/25c13593-ea16-4bfa-8059-a565aaa9b970/collection/32339657-ff902470-4d21-47ec-a319-10c5c56bad18?action=share&source=collection_link&creator=32339841)

### Endpoints:

### User Management

#### REGISTER a User+

**Authentication:**
- This route creates authentication.

- **Method**: POST
- **URL**: localhost:8800/api/auth/register
- **Body**:
  ```json
  {
    "username": "Test",
    "email": "test@email.com",
    "password": "test"
  }
  ```

#### LOGIN a User+

**Authentication:**
- This route requires authentication.

- **Method**: POST
- **URL**: localhost:8800/api/auth/login
- **Body**:
  ```json
  {
    "username": "Test",
    "password": "test"
  }
  ```

#### GET a User+

- **Method**: GET
- **URL**: localhost:8800/api/users/65cb2366af7c92e80d360db5

#### GET all Users+

- **Method**: GET
- **URL**: localhost:8800/api/users/

#### UPDATE a User+

- **Method**: PUT
- **URL**: localhost:8800/api/users/65deebab75faacf09992a34d
- **Body**:
  ```json
  {
    "username": "Veronica"
  }
  ```

#### DELETE a User+

- **Method**: DELETE
- **URL**: localhost:8800/api/users/65de9e4da63f77a93d3d79ff

### Hotel Management

#### CREATE a Hotel+

- **Method**: POST
- **URL**: localhost:8800/api/hotels/
- **Body**:
  ```json
  {
    "name": "Madame Marimelle",
    "type": "Hotel",
    "city": "Tallinna",
    "address": "Lai 19",
    "distance": "1590",
    "photos": ["1.jpeg"],
    "title": "Luxurious hotel in the city",
    "desc": "Luxury hotel",
    "rating": 4,
    "rooms": [{"number":100}],
    "cheapestPrice": 150,
    "featured": true
  }
  ```

#### GET a Hotel+

- **Method**: GET
- **URL**: localhost:8800/api/hotels/find/65c7e13724f38113575ee9bd

#### GET all Hotels+

- **Method**: GET
- **URL**: localhost:8800/api/hotels/

#### UPDATE a Hotel+

- **Method**: PUT
- **URL**: localhost:8800/api/hotels/65deade942f19beacd14cecb
- **Body**:
  ```json
  {
    "name": "Maarika Lux Spa"
  }
  ```

#### DELETE a Hotel+

- **Method**: DELETE
- **URL**: localhost:8800/api/hotels/65dead7742f19beacd14ce04

#### GET Hotel Count+

- **Method**: GET
- **URL**: localhost:8800/api/hotels/countByCity?cities=Helsinki,Marrakech,Tallinna,Puerto Viejo

#### GET Featured Hotel+

- **Method**: GET
- **URL**: localhost:8800/api/hotels?featured=true

### Room Management

#### CREATE a Room+

- **Method**: POST
- **URL**: localhost:8800/api/rooms/65e1b52872f249fb206128f8
- **Body**:
  ```json
  {
    "title": "Asunto • 60m² • 1 huonetta •",
    "desc": "Tässä huoneistossa on makuuhuone, taulu-tv ja täysin varustettu keittiö, jossa on astianpesukone, uuni, astianpesukone, mikroaaltouuni ja jääkaappi.",
    "price": 55,
    "maxPeople": 3,
    "roomNumbers": [{"number":100}]
  }
  ```

#### GET a Room+

- **Method**: GET
- **URL**: localhost:8800/api/hotels/room/65c7e13724f38113575ee9c2

#### GET all Rooms+

- **Method**: GET
- **URL**: localhost:8800/api/rooms/

#### UPDATE a Room+

- **Method**: PUT
- **URL**: localhost:8800/api/rooms/65dea4c880df1439cdf0f1f6
- **Body**:
  ```json
  {
    "price": 1000
  }
  ```

#### DELETE a Room+

- **Method**: DELETE
- **URL**: localhost:8800/api/rooms/65cb2b62af7c92e80d360e5d/65c7e13724f38113575ee9bd

### Reservation Management

#### CREATE a Reservation+

- **Method**: POST
- **URL**: localhost:8800/api/reservations/
- **Body**: 
```json
{
    "reservationNumber": "reservationNumber",
    "userId": "60d3b41c8534a223d8f68889",
    "hotelId": "60d3b41c8534a223d8f68890",
    "roomId": "60d3b41c8534a223d8f68891",
    "checkInDate": "2022-07-01T00:00:00.000Z",
    "checkOutDate": "2022-07-10T00:00:00.000Z",
    "guestCount": 2,
    "totalPrice": 200,
    "status": "confirmed"
}
```
#### GET a Reservation+

- **Method**: GET
- **URL**: localhost:8800/api/reservations/find/65e9c00c4b4c7c8ead711cfb
- 
#### GET all Reservations+

- **Method**: GET
- **URL**: localhost:8800/api/reservations/

#### GET Reservations by User

- **Method**: GET
- **URL**: localhost:8800/api/reservations/myreservations

#### UPDATE a Reservation+

- **Method**: PUT
- **URL**: localhost:8800/api/reservations/65eaee110c7e9a8a5ca6daa2
- **Body**:
  ```json
  {
    "guestCount": 5
  }
  ```
#### DELETE a Reservation+

- **Method**: DELETE
- **URL**: localhost:8800/api/reservations/65eaee110c7e9a8a5ca6daa2

## Bcryptjs

- **Read More About Bcryptjs**: [View here](https://www.npmjs.com/package/bcryptjs)

### Code Example for Using Bcrypt:

```javascript
import bcrypt from "bcryptjs";

// REGISTER a User
export const register = async (req, res, next) => {
    try {
        // Salting & Hashing
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // CREATING a New User
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password: hash,
        });

        await newUser.save();
        res.status(200).send("User has been created.");
    } catch (err) {
        next(err);
    }
};

```

## Deployment on Render

[![Status](https://img.shields.io/badge/render-published-darkgreen.svg)]()

- **Website Link**: [View Website](https://helppomatka-1.onrender.com/)

Deploying a full-stack project on Render involves several steps, both for the backend and frontend components. Render provides a seamless platform for hosting both parts of your application, offering automatic deploys, SSL certificates, and more. Here's a brief overview of how to deploy a full-stack project on Render:

### Backend Deployment on Render:

1. **Prepare Your Backend**:
    - Ensure your backend code is in a Git repository (GitHub).
    - Make sure your application listens on the port provided by the `PORT` environment variable.

2. **Create a New Web Service on Render**:
    - Log in to your Render account and click on "New +," then select "Web Service."
    - Choose the Git repository where your backend code is stored.
    - Configure your build settings:
        - For Node.js apps, Render automatically detects the build command and start command, but you can customize them.

3. **Set Environment Variables**:
    - If your application requires environment variables (like database URLs, secret keys), add them in the "Advanced" section during setup.

4. **Deploy**:
    - Once configured, click "Create Web Service." Render will build and deploy your backend, providing a `.onrender.com` URL for access.

### Frontend Deployment on Render:

1. **Prepare Your Frontend**:
    - Ensure your frontend code is also in a Git repository.
    - Build your project locally to make sure it compiles without errors (e.g., using `npm run build` for React apps).

2. **Create a New Static Site on Render**:
    - In your Render dashboard, click on "New +" and select "Static Site."
    - Select the Git repository of your frontend project.
    - Configure the build settings:
        - Set the build command (e.g., `npm run build` for React apps).
        - Set the publication directory (e.g., `build` for React apps).

3. **Environment Variables**:
    - If your frontend needs environment variables (like backend API URLs), you can add them during setup.

4. **Deploy**:
    - Click "Create Static Site." Render will build and deploy your frontend, providing a URL for access.

5. **Configure Backend API Access**:
    - If your frontend needs to access your backend, ensure you use the backend service URL provided by Render in your API requests. You might need to set this URL as an environment variable in your frontend.

6. **Domain Configuration (Optional)**:
    - Once both parts are deployed, you can configure custom domains via Render's dashboard for both your frontend and backend, providing a cohesive experience for your users.

### Final Steps:

- **Test Your Application**: Visit the URLs provided by Render to ensure both the frontend and backend are working as expected.
- **Continuous Deployment**: Render supports automatic deployment on git push, so you can set up continuous deployment for both parts of your application.

This overview provides a streamlined process for deploying full-stack applications on Render.
The specific steps might vary based on the technology stack you're using (e.g., Node.js, React), but the general process remains the same.
Ensure to consult Render's documentation for detailed guides and troubleshooting.

[🔝 Back to the Table of Contents](#table-of-contents)

# Project: Marvel Character Full-Stack Application

**Part 1 - Setting up the Backend**

For this module project you create a React frontend that will connect to a MySQL/Flask backend.  Before you create the frontend of this project, you will need to have the backend setup.  This should be review from the backend modules.  Here are the things that need to happen:

**1. Create the database for the project**

* Create folder to save all the files for the backend and call it **"backend"**
* Open up MySQL Workbench and log into your MySQL connection
* Create a new schema (database) named  **"marvel" ** - * make sure this is named/spelled correctly!*
* Make sure the newly created schema (database) is selected (the name is bold) - *double clicking the schema will select it*
* Download **marvel_characters.sql **into the** "backend" **folder,
* Then copy and paste or open the SQL file into Workbench -  *make sure you are running this while "* ***marvel"**** is selected*
* Run the given SQL to create and populate the **"characters"** table - *there should be 10 heroes and villains with multiple columns*

**2. Run the server and connect it to the database*** We have provided a **server.py** and **requirements.txt **file

* Place those files in the **"backend"** folder as well
* Open a terminal inside of the **"backend"** folder
* Inside the folder, create a new **virtual environment** for your flask server
* Inside your virtual environment, install all of the required **packages** stored in the provided **requirements.txt** file
* Run **server.py** and make sure that the database connection is working
  - *Make sure the database login (user and password) found in ****server.py*** * match what you have setup on your machine
  - Make sure that you named the schema (database) * ***"marvel"*** * and the table * ***"characters".  ****That is what ****server.py**** uses*
* Open a browser and got to the URL of the server and access the **"/characters"** route to make sure it is up and working

**3.  Read through server.py *** Make sure you have a good idea of what end points exist, what they require, what SQL calls they make, what they return etc.

* This will help make your fetch/axios calls in the front end
* It should look very familiar to what you did in the backend core portion of the course
* Now that the server and database are setup, and you've read through them, move on to **Part 2** of this project!

---

**Part 2 - Setting up the React Frontend**

Ok now that the server is up and working, we want to create the React frontend that will interact with and allow us to perform CRUD operations on the backend.

Make sure to **plan out your project** before hand.  Think about where everything will go and how everything will function.  What components will you need?  Will they need to pass props to one another?  What is the color scheme?  How will everything be laid out?  etc.  Put all of this in your prototype/sketches of your project.  This will help you immensely during the creation process.

Here are the requirements for the React Frontend of this project:

**Prework**

* Project should have a submitted Sketch/Plan/Prototype
* Project should be styled and laid out using **React Bootstrap **
* Project must look good and function well on mobile devices as well

**Pages/Navigation*** Should have a **404 page** created and applied to the project

* Should have a **home page** (this page **should not** show all the characters)
* Project should use the **React Bootstrap Navbar** component that works in a Mobile View
* **React Router** must be used to navigate the project
* **useParams()** and **useNavigate()** must be used

**Backend Interaction*** **Axios** or **Fetch** can be used, either one is fine for the database calls

* Should be able to  **view all the characters ** (Cards could be useful here)
* Should be able to **view an individual character** and all their traits from the database
* Should be able to **create a character ****- **there should be some sort of **visual confirmation** when the character is created
* Should be able to **edit individual characters
  - **when editing a character **the form needs to be pre-populated** with the character's information
  **- **there should be some sort of **visual confirmation** when the character is updated
* Should be able to **delete individual characters
  - **there should be some sort of **visual confirmation** when the character is deleted

 **The Form(s)** * The form(s) need to be created using **React Bootstrap components** (Form.Group, Form.Label, Form.Control, etc.)

* The form(s) need to have required inputs where **React Bootstrap Verification** is applied (you decide which ones)
* The form(s) need to use a state object (in our examples we used  **formData** ) to collect the user's input
* Must have **error messages** appear if the HTTP requests fail
* Must have **loading messages **appear while the HTTP requests are happening

 **Clarifications and Things to Think About:** * You can create however many React components you feel is necessary to achieve the goals of this project

* Be aware of the event listeners and which ones you'll need and want to use
* Think about how you're going to handle the form or forms for the creating and updating of the characters
* Think about conditional rendering and when/how you might need to use it
* You are free to style this and make it look however you like.
* Be aware of color scheme, readability, ease of use, common web design principles, etc.
* Use the React Bootstrap components (Modal, Offcanvas, Alert, Carousel, etc.) in ways that make sense.  Don't use them just because, use them because they'll help/enhance the overall usability and design
* We may not have covered everything you'll need to complete this project in the lessons.  That is the life of a developer.  You may have to research/learn different things to get all of this to work
* **HINT:** To pre-populate the update form, you could use formData in conjunction with the value attribute to get this to work

When this is finished **push it up to GitHub** and  **copy and paste the link to the repo here** .

Then, take a breather, pat yourself on the back, and congrats 🎉 you just created a front end for a full-stack application!

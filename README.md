#### TravelMoire is a full CRUD project that was created to help users document their travel experiences. 
<img width="640" alt="HomePage" src="https://user-images.githubusercontent.com/103911002/171841959-14fbb1dc-5807-434d-b200-29b17dd4ff05.png">

## Technologies Used
* JavaScript 
* HTML5
* CSS3
* Google Fonts
* MongoDB
* Mongoose
* Postman
* Express.js
* Node

## MVP
* At least 1 data entity (Model) that represents main function of application.
* Full CRUD data operations on one data entry.
* Utilize MongoDB and Mongoose to store data 
* Use a CSS Stylesheet
* Deploy online 

## Schema
```
const entrySchema = new Schema({
    location: String,
    date: Date,
    title: String,
    body: String
});
```
## Controller
```
// INDEX
router.get("/", (req, res) => {
  Entry.find({}, (err, foundEntries) => {
    res.render("entries/index.ejs", {
      entries: foundEntries,
    });
  });
});

// NEW
router.get("/new", (req, res) => {
  res.render("entries/new.ejs");
});

// DELETE
router.delete("/:id", (req, res) => {
  Entry.findByIdAndDelete(req.params.id, (err, deletedEntry) => {
    res.redirect("/entries");
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  Entry.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, updatedEntry) => {
      res.redirect(`/entries/${req.params.id}`);
    }
  );
});

// CREATE
router.post("/", (req, res) => {
  Entry.create(req.body, (err, createdEntry) => {
    res.redirect("/entries");
  });
});
// });

// EDIT
router.get("/:id/edit", (req, res) => {
  Entry.findById(req.params.id, (err, foundEntry) => {
    res.render("entries/edit.ejs", {
      entry: foundEntry,
    });
  });
});

// SHOW
router.get("/:id", (req, res) => {
  Entry.findById(req.params.id, (err, foundEntry) => {
    res.render("entries/show.ejs", {
      entry: foundEntry,
    });
  });
});
```
## Index View
```
  <body>
    <main>
      <h2>Your Experiences</h2>
      <!-- Shows Experiences/Entrees in a list as they are posted -->
      <ul>
        <% for(let i = 0; i < entries.length; i++){ %>
      </ul>
      <ul>
        <!-- Grabs Entrees by ID and categorizes by location -->
        <a href="/entries/<%= entries[i]._id %>"><%= entries[i].location %></a
        ><% } %>
      </ul>
    </main>
    <h4><a href="/entries/new">Create New Post</a></h4>
  </body>
 ```       
## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 28| Prompt / Wireframe / Timeframe | Complete
|May 29| Project Approval | Complete
|May 30| Core Application Structure (HTML, CSS, etc.) | Complete
|May 31| Schema and Routes | Complete
|June 1-2| CSS Styling - MVP | Complete 
|June 3| Presentations | Complete

## Sketches
![TravelMoire WF](https://user-images.githubusercontent.com/103911002/186616415-fbc7f2fd-d17b-41dd-a7da-50c1bb709cfa.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Prompt / Wireframe / Timeframe | H | 3hrs| 3hrs | 3hrs |
| Create HTML, JS & CSS sheets and complete all needed integrations | H | 1hrs| 1hrs | 1hrs |
| Create HTML Layout | H | 3hrs| 3hrs | 3hrs |
| Pseudocode JS sheet | H | 1hrs| 0.5hrs | 0.5hrs |
| Set up Schema and Connect to MongoDB | H | 3hrs| 2hrs | 2hrs |
| Create and Test Routes| H | 3hrs| 3hrs | 3hrs |
| Set up Views| H | 3hrs| 3hrs | 3hrs |
| CSS Styling | H | 2hrs| 2hrs | 2hrs |
| Review of Functionality | H | 2hrs| 1hrs | 1hrs |
| Presentation Run Through | H | 1hrs| 1hrs | 1hrs |
| Total | H | 22hrs| 19.5hrs | 19.5hrs |

 ## Post MVP
* Mobile Friendly Design 
* User sign in and signup
* Add upload photo option 
* Rebuild using React components to match new wireframe
<img width="804" alt="TravelMoireWF" src="https://user-images.githubusercontent.com/103911002/186611637-4b97b32e-fb72-4a16-9cbf-64970f42fe25.png">

* This is the link for the new repository built using React (W.I.P.)
[Travel Moire Version 2](https://github.com/Chyannetech/TravelMoire-Frontend)

## Deployment [Project URL] 
#### View the deployed app [here.](https://travelmoire.herokuapp.com/)

## SWOT Analysis
### Strengths:
I knew what my goals were for reaching MVP and used my older projects as a reference to get things set up and functioning properly. 
### Weaknesses:
Properly executing methods in functional and class components is still an opportunity area. In addition, using the appropriate styling elements to have the application mirror the wireframes.
### Opportunities:
To reinforce all of the concepts learned in this unit and to familiarize myself further with tools such as  Material UI tools to assist with the design process.
### Threats:
Setting up the database and working with the routes took more time to complete than estimated. This placed me at risk of not meeting MVP by the deadline. There were many features and styling components that I wanted to incorporate but couldn't due to this delay. Furthermore, when encountering similar issues in the future, I would reach out to support resources to prevent being stuck for over an hour.


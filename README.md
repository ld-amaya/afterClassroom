# afterClassroom

## Stack

## Frontend
<a href ='https://reactjs.org/'>  <img src ='static/images/react.png' alt ='JavaScript' width='20px' height ='20px'> </a> &nbsp;
<a href ='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>  <img src ='static/images/javascript.svg' alt ='JavaScript' width='20px' height ='20px'> </a> &nbsp;
<a href ='https://getbootstrap.com/'>  <img src ='static/images/bootstrap.svg' alt ='bootstrap' width='20px' height ='20px'> </a> &nbsp;
<a href ='https://material-ui.com/'>  <img src ='static/images/materialsui.svg' alt ='bootstrap' width='20px' height ='20px'> </a> &nbsp;
<a href ='https://momentjs.com/'>  <img src ='static/images/momentsjs.jpeg' alt ='bootstrap' width='20px' height ='20px'> </a> &nbsp;
<a href ='https://fontawesome.com/'>  <img src ='static/images/font-awesome.svg' alt ='Font Awesome' width='20px' height ='20px'> </a> &nbsp;

### Backend
visit https://github.com/ld-amaya/testbank 


<a href ='https://nodejs.org/en/'>  <img src ='static/images/node.png' alt ='nodejs' width='20px' height ='20px'> </a> &nbsp;
<a href ='https://expressjs.com/'>  <img src ='static/images/express.jpeg' alt ='node express' width='20px' height ='20px'> </a> &nbsp;
<a href ='https://jwt.io/'>  <img src ='static/images/jwt.png' alt ='jwt' width='20px' height ='20px'> </a> &nbsp;
<a href ='https://www.postgresql.org/'>  <img src ='static/images/postgresql.svg' alt ='Postgresql' width='20px' height ='20px'> </a> &nbsp;

### API
This project sources its own data directly from an Accounting Teacher. 

> Run command on your terminal
> -   cd backend
> -   createdb testbank
> -   craetedb testbank_test
> -   psql testbank < testbank.sql


## SCRIPTS

### npm install

Installs the necessary dependencies to run the project
View dependencies and scripts on package.json for both backend and frontend

### nodemon server.js
Runs backend server on local 3001

### npm start' 
Runs frontend server on local 3000

### jest -i 
Runs integration and unit tests.

## ABOUT
We all know the pandemic brought us a new normal, and lucky for some sectors or organization who have been built to handle work-from-home or remote work. But for most of the business, especially schools from third world country like the Philippines, their current system is not at all ready.
This project is inspired in providing a solution to a school problem. afterClassroom tries to connect the student and teachers so that education can still continue to flow even remotely.
afterClassroom is an ecosystem for teachers and students where students can take practice exam using the test questions uploaded or provided by their own teachers. 
The goal of this project is much more bigger, this mvp will allow us to identify the path and prioritize functionalities that the teachers and students needs.

> NOTE:
> - This is an MVP project with one teacher and his students. This allows us to build and learn fast.
> - Temporarily, all subject included are in Accounting
> - Since this is still in MVP, only students are allowed to register. Teachers will be included in the next development cycle.

## User Flow
The following explains the program flow and its functionalities.

### User Registration / Login
Registration is needed to be able to browse the current application. Only students are allowed to regsiter in the current development since this is still on an MVP stage.

To register, a user must enter their username, password, first name, last name and email.

> There are no username duplications allowed in the registration process

<div align='center'>
    <img src='static/images/registration.png' alt= 'registration'>
</div>

The user will be automatically signed in once registered.

To login, a user must enter their username and password.

<div align='center'>
    <img src='static/images/login.png' alt= 'registration'>
</div>

### Topics

A student can select a topic and Take Exam.

<div align='center'>
    <img src='static/images/topics_student.png' alt= 'topics for students'>
</div>

A teacher has more functionality - adding, editing and deleting topics.

<div align='center'>
    <img src='static/images/topics_teacher.png' alt= 'topics for teachers'>
</div>

#### Adding / Editing Topic for teachers

<div align='center'>
    <img src='static/images/topics_add.png' alt= 'topics for teachers'>
</div>

#### Deleting Topics for teachers
Only teachers are allowed to add, edit or delete a topic. Deleting topic will delete all questions related to the topic, a popover warning will display for information.

<div align='center'>
    <img src='static/images/topic_delete.png' alt= 'topics for teachers'>
</div>

### Questions
Only teachers will have access to all the questions.

<div align='center'>
    <img src='static/images/questions.png' alt= 'topics for teachers'>
</div>

### Deleting Questions

Click the trash icon on the upper right portion of the question card to delete a question.

#### Adding / Editing Questions
To add a question, click the edit icon on the upper right portin of the question card. 
You need to select the topic, add questions, choices and click the correct answer before hitting submit.

<div align='center'>
    <img src='static/images/questions_add.png' alt= 'topics for teachers'>
</div>

### Taking Exam
Taking new exams are only applicable to the students, click the take exam on the Topics Card then click start to begin the exam.

> Currently, we are providing 10 random questions from our databank. More questions will be uploaded regularly by the teacher.

<div align='center'>
    <img src='static/images/exam.png' alt= 'topics for teachers'>
</div>

Student can navigate between questions during the exam and change answer if necessary.
Once done, the student clicks the submit button on the right top portion of the question card.

### Summary
Summary table of the exam results are available for both students and teachers. 
Only can only see their own exam results while the teacher can see all their students.

<div align='center'>
    <img src='static/images/summary.png' alt= 'topics for teachers'>
</div>

### Exam Review

The students cannot review the exam for now, the teachers can review the exam.

<div align='center'>
    <img src='static/images/exam_review.png' alt= 'topics for teachers'>
</div>




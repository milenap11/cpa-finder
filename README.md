<div id="description" align="center">
<img width="207" alt="Logo" src="https://github.com/milenap11/cpa-finder/assets/152201737/7271a809-a49b-48a8-8a45-5a3d674b2fe6"></div>

<details open>
<summary>Route Table & ERD</summary>
  
| URI | REST Route | HTTP Method | CRUD Action | 
|-----|------------|-------------|-------------|
| / | | GET | read | 
| /details/:id | index | GET | read
| /details/:id | show | GET | read
| /details/:id | new | GET | |
| /details/:id | create | POST | create |
| /details/:id | edit | GET | read |
| /details/:id | update | PUT | update |
| /details/:id | destroy | DELETE | delete |


| Key | Name | Type | 
|-----|------------|--------------|
| PK | id | AutoField | 
|  | Name | CharField | 
|  | Content | CharField | 
|  | Title | CharField | 
| FK | cpa_id | ForeignKey | 

</details>

## :art: Screenshots

<details open>
<summary>Wireframe-Home</summary>

![Home Page](https://github.com/milenap11/cpa-finder/assets/152201737/570b9b6c-95b8-480c-950a-40e342b1e47e)

</details>

<details open>
<summary>Wireframe-Details</summary>
  
![Details Page](https://github.com/milenap11/cpa-finder/assets/152201737/c09d259a-e9cb-44c2-91d2-645239a433ff)

</details>

<details open>
<summary>Home</summary>
  
![Screenshot 2024-03-05 at 4 14 23 PM](https://github.com/milenap11/cpa-finder/assets/152201737/c69649af-2c28-496a-ac76-c14a73452b9a)

</details>

<details open>
<summary>Details</summary>

![Screenshot 2024-03-05 at 4 16 01 PM](https://github.com/milenap11/cpa-finder/assets/152201737/a59d5817-5c3a-4054-b316-2fe88e119c65)

</details>

<details open>
<summary>New & Create</summary>

![Screenshot 2024-03-05 at 4 17 38 PM](https://github.com/milenap11/cpa-finder/assets/152201737/a8ae9333-321c-4ea2-9fa9-d951aa95cee9)

</details>

<details open>
<summary>Edit & Update</summary>

![Screenshot 2024-03-05 at 4 18 46 PM](https://github.com/milenap11/cpa-finder/assets/152201737/13d3d03f-c1cd-4195-8c0b-d3362aff8e54)

</details>

<details open>
<summary>Sign Up & Log In</summary>

![Screenshot 2024-03-05 at 4 19 53 PM](https://github.com/milenap11/cpa-finder/assets/152201737/bfd171de-608a-468d-9d84-4e4211f38349)

</details>

## :robot: Technologies Used

![MongoDB](https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb)  ![Express](https://img.shields.io/badge/-Express-05122A?style=flat&logo=express) ![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react) ![Node](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js) ![Heroku](https://img.shields.io/badge/-Heroku-05122A?style=flat&logo=heroku) ![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5) ![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3) ![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)

## :gear: Installation Instructions

<details>
  <summary>Installation</summary>
  <p>1.	Download PostgreSQL from https://postgresapp.com/downloads.html</p>
  <p>2.	Choose your OS and download, then move the newly downloaded application to the Applications folder.</p>
  <p>3.	Click “Initialize” to create a new server.</p>
  <p>4.	To start the server, click “start”.</p>
  <p>5.	Open your terminal and type: createdb <your desired database name></p>
  <p>6.	Type: psql</p>
  <p>7.	Type: \c <your newly created database name></p>
  <p>8.	Create the employee table:
  <pre>
    CREATE TABLE main_app_employee (
    Id SERIAL PRIMARY KEY
    employee_name VARCHAR(100),
    Department VARCHAR(100),
    Position VARCHAR(100),
    Salary DECIMAL(9, 2),
    Birthdate DATE,
    manager_id INTEGER,
    user_id SET DEFAULT NULL,
    employee_email VARCHAR(255)
    );
  </pre>
  <p>9.	Type: \copy main_app_employee FROM ‘/<path to your CSV file>/<your CSV file name>.csv’ WITH (FORMAT csv);</p>
  <p>10.	Go to neon.tech and make a new account. Alternatively, you may log in with an existing Google or GitHub account.</p>
  <p>11.	Once logged in, ensure that you stay logged in as long as you will use this database.</p>
  <p>12.	Open your terminal and input: psql -h pg.neon.tech</p>
  <p>13.	On your browser, go to https://heythere-hr-f3d27d8a0e61.herokuapp.com/</p>
  <p>14.	If you are a CEO or a president of the company, ask to the site administrator to make a superuser/admin account on your behalf.</p>
  <p>15.	If you are a manager of a department or a regular employee, you should be able to create an account using your email address.</p>
  <p>16.	You should now be able to see the imported database under the “employees” tab. If you are a superuser, you will be able to add, edit, or delete any employee, event, or PTO request. If you are a manager, you will be able to add, edit, or delete any employee who is under your supervision in your department. You will be able to edit your own information, but you will not be able to delete yourself. If you are a regular employee, you will be able to edit your own information only. As a manager or an employee, you may choose to attend any event that the employer creates on this page. You may also cancel your attendance at any time. As an employee, you may request time off by clicking “Add PTO Request” button. Once submitted, it will be automatically visible on the PTO Requests section of the website, with a “pending” status. Only the superuser/employer will be able to approve, deny, or delete this request.</p>
</details>

## :link: Links

<details open>
<summary>Deployed Link</summary>
<a href="https://cpa-finder-390658509291.herokuapp.com/">CPA Finder</a>
</details>

## :pencil: User Stories

- As someone who is need of a new CPA for advice or submit their taxes, I want to easily find one in my area, instead of relying on word of mouth.
- As someone just met at a networking event, I want to quickly see the developer's skills, so that I can recommend the person to my company or someone who I know. 
- As a non-technical HR manager, I want to quickly see the skills and experience of a candidate, so that I can evaluate whether the candidate meets the requirements for an open position at my company.
- As a mid-level engineer, I want to view a junior developer's project and read their code, so that I can evaluate their coding skills.

## :triangular_flag_on_post: Hurdles

## :dart: Next Steps

- [ ] Add logo
- [ ] Improve the look of reviews
- [ ] Add more features

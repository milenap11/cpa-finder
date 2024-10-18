# cpa-finder

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

## :art: Screenshots

<details open>
<summary>Wireframe-Home</summary>

![Home](public/assets/screenshots/home.png)
</details>

<details open>
<summary>Wireframe-Details</summary>

![Details](public/assets/screenshots/details.png)
</details>

<details open>
<summary>Home</summary>

![Home](public/assets/screenshots/home-web.png)
</details>

<details open>
<summary>Index</summary>

![Destination-index](public/assets/screenshots/index.png)
</details>

<details open>
<summary>Show</summary>

![Destination-show](public/assets/screenshots/show.png)
</details>

<details open>
<summary>New & Create</summary>

![New Destination](public/assets/screenshots/new.png)
</details>

<details open>
<summary>Edit & Update</summary>

![Edit Destination](public/assets/screenshots/edit.png)
</details>

<details open>
<summary>Second Schema - Reviews</summary>

![Create a Review](public/assets/screenshots/new-review.png)

![Create a Review](public/assets/screenshots/index-review.png)

![Create a Review](public/assets/screenshots/show-review.png)
</details>

## :robot: Technologies Used

![Node](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js) ![MongoDB](https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb)  ![Express](https://img.shields.io/badge/-Express-05122A?style=flat&logo=express) ![Heroku](https://img.shields.io/badge/-Heroku-05122A?style=flat&logo=heroku) ![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5) ![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3) ![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)

## :link: Links

<details open>
<summary>Deployed Link</summary>
<a href="https://nomad-nest-3b3484e95287.herokuapp.com/">Nomad Nest</a>
</details>

## :rocket: Walkthrough

Welcome to Nomad Nest: a site created to assist digital nomads. Pick a location and we'll help you getting settled in your new home away from home. We'll provide and book recommended stays, assist with visa requirements, offer information about transportation, co-working spaces and more. Explore our list of destinations and find reviews posted by digital nomads. Are you ready to buckle up?

## :pencil: User Stories

- As someone just met at a networking event, I want to quickly see the developer's skills, so that I can recommend the person to my company or someone who I know. 
- As a non-technical HR manager, I want to quickly see the skills and experience of a candidate, so that I can evaluate whether the candidate meets the requirements for an open position at my company.
- As a mid-level engineer, I want to view a junior developer's project and read their code, so that I can evaluate their coding skills.


<!-- ## :triangular_flag_on_post: Unsolved Problems & Hurdles

-  -->

## :dart: Next Steps

- [ ] Add logo
- [ ] Improve the look of reviews
- [ ] Add more features
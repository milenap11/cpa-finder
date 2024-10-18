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
| FK | cpa_id | ForeignKey | 


| Key | Name | Type | 
|-----|------------|--------------|
| PK | id | AutoField | 
|  | Email | CharField | 
|  | Password | CharField |  

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

![MongoDB](https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb) ![Express](https://img.shields.io/badge/-Express-05122A?style=flat&logo=express) ![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react) ![Node](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js) ![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5) ![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3) ![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript) ![Heroku](https://img.shields.io/badge/-Heroku-05122A?style=flat&logo=heroku) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css)

## :gear: Installation

<details open>
<summary>Instructions</summary>
<p>1. Start by creating a new Vite project:</p>
<pre>
npm create vite@latest my-project -- --template react
cd my-project
</pre>
<p>2.	Install Tailwind CSS:</p>
<pre>
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
</pre>
<p>3. Configure your template paths in your tailwind.config.js:</p>
<pre>
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</pre>
<p>4. Add the Tailwind directives to your CSS:</p>
<pre>
@tailwind base;
@tailwind components;
@tailwind utilities;
</pre>
<p>5. Remove all the unnecessary files (SVGs & README) and create a components folder inside src.</p>
<p>6. Move App.jsx into the src/components/App folder and rename App.jsx to index.jsx.</p>
<p>7. Move App.css into the src/components/App folder and rename App.css to styles.css.</p>
<p>8. Launch your server:</p> 
<pre>
npm run dev
</pre>
<p>9. You should see this output in your terminal:</p>
<pre>
VITE v5.1.1  ready in 558 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help

warn - No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.
warn - https://tailwindcss.com/docs/content-configuration
</pre>
<p>10. Your React app is ready to be connected to the API!</p>
</details>

## :link: Links

<details open>
<summary>Deployed Link</summary>
<a href="https://cpa-finder-390658509291.herokuapp.com/">CPA Finder</a>
</details>

## :pencil: User Stories

- As someone who is in need of a new CPA for advice or submit their taxes, I want to easily find one in my area, instead of relying on word of mouth.

## :triangular_flag_on_post: Hurdles

- Render multiple CPAs
- Display the details for each CPA
- Filter the gallery results by searching a second zipcode API

## :dart: Next Steps

- [ ] Hide Edit and Delete buttons to guest users
- [ ] Add review rating instead of number of reviews
- [ ] Add hamburger menu on small screen size
- [ ] Allow users to "Favorite" CPAs, and view a list of all their favorited CPAs
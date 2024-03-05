<div id="description" align="center">
<img width="207" alt="Logo" src="https://github.com/milenap11/cpa-finder/assets/152201737/7271a809-a49b-48a8-8a45-5a3d674b2fe6"></div>


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

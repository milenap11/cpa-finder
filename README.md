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
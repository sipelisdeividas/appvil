# Appvil - Development of mobile applications for iOS and Android platforms."


## Description:

Appvil is an application for offering web/app development services.

## Technologies Used:

- Next.js 14
- JavaScript
- MongoDB
- NextAuth / Google Provider
- Tailwind
- Shadcn
- Aceternity UI
  
## Design:

The application has 8 pages that are styled using "Tailwind CSS" design library for classes, "Shadcn" that has "Tailwind" and "Aceternity UI" ready components, for faster app design development.

### Database:

2 tables:
- Users: Stores logged-in user information such as name and email.
- Projects: Stores all projects and info about them including id, name, description, banner, project images.


### Server-Side:
Rest API: 
- Next.js server with 5 routes:
  - Auth: Auth route that provides login with "Google", creates session.
  - Contact: Contact route that handles request for sending email to email that is provided to "nodemailer".
  - Projects: Projects route that is responsible for "POST", "GET", "DELETE" methods when it comes to projects.
  - Projects/id: Projects/id route is responsible for "PUT" and "GET" methods when it comes to project by id.
  - User: After a successful login operation user route stores user info in the DB collection "users", if a user is already stored, then it only logs in.
  
### Front-End:

Front End fully developed in Next.js using the create-next-app@latest boilerplate

### Pictures of the project:

Computer Screens:

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767335/Appvil/representive_pictures/home_page_t6dvon.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767335/Appvil/representive_pictures/logged_dropdown_pc_b1sbds.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767333/Appvil/representive_pictures/contact_page_szhaj4.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767339/Appvil/representive_pictures/projects_page_abp043.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767337/Appvil/representive_pictures/project_page_nsaz0s.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767333/Appvil/representive_pictures/auth_page_gb853m.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767333/Appvil/representive_pictures/add_project_xfana7.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767338/Appvil/representive_pictures/project_preview_by_id_te1g7h.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767337/Appvil/representive_pictures/project_edit_page_vl9qy1.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767334/Appvil/representive_pictures/dashboard_page_qmccnk.png" width="1190"/>

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767336/Appvil/representive_pictures/Project_deletion_fxmfjn.png" width="1190"/>

Mobile screens:

<div align="center">
  
<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767360/Appvil/representive_pictures/mobile_pictures/home_mobile_cvrpvc.png" width="375" height="667" />

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767355/Appvil/representive_pictures/mobile_pictures/home_side_nav_hefn1s.png" width="375" height="667" />

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767357/Appvil/representive_pictures/mobile_pictures/projects_mobile_ca20g9.png" width="375" height="667" />

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767356/Appvil/representive_pictures/mobile_pictures/project_mobile_dkqhfy.png" width="375" height="667" />

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767354/Appvil/representive_pictures/mobile_pictures/contact_mobile_enizi4.png" width="375" height="667" />

<img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1715767354/Appvil/representive_pictures/mobile_pictures/dashboard_mobile_y8qfki.png" width="375" height="667" />

</div>

### Contact:

Šipelis, D. - [@Linkedin](https://www.linkedin.com/in/deividas-%C5%A1ipelis/) - sipelis.d@gmail.com

Project Live Demo: [https://appvil-eu.vercel.app/](https://appvil-eu.vercel.app/)

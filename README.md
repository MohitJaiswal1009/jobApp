<--Overview-->
This is a Job Portal Application built with modern web technologies to connect employers and job seekers. Employers can post jobs and manage applications, while job seekers can apply to jobs and submit their resumes.

Features->
Employer Functionality:
1.Register and log in as an employer.
2.Post job listings.
3.View job applications and resumes submitted by job seekers.

Job Seeker Functionality:
1.Register and log in as a job seeker.
2.Browse job listings posted by employers.
3.Apply to jobs and submit resumes.

Tech Stack->
The application is built using the MERN stack:

Frontend:
React.js: For creating a dynamic user interface.

Backend:
Express.js: For building the server and RESTful APIs.
MongoDB: For managing user data, job postings, and applications in a NoSQL database.
Cloudinary: Manages media uploads (resumes, images) securely and efficiently, using a cloud-based service to store and serve files.

Frontend Features in Detail->

1.Job Listings Page:
Displays all jobs posted by employers.

2.Job Details Page:
Displays detailed information about a selected job, such as job description, requirements, salary, and company information.
Includes an "Apply Now" button for job seekers.

3.Employer Dashboard:
Shows an overview of jobs posted by the employer and allows managing job listings and reviewing applications.

Backend Features in Detail->

1.Authentication:
JWT-based authentication for secure login and session management.
Separate authentication flows for employers and job seekers.

2.Job Management:
RESTful API routes allow employers to post jobs, update job details, and delete job listings.
Job seekers can view jobs, apply to jobs, and upload resumes.

3.Database Models:
User Model: Separate schemas for employers and job seekers, with fields for personal information, roles, and authentication tokens.
Job Model: Contains job-related information like title, description, company, location, and salary.


# Walmart Student Portal

## Project Description
A college portal to key in student first and last name as well as DOB, address and a profile photo.


## Technologies Used

* React
* Redux
* TypeScript
* Spring Data JPA
* Spring Boot
* Docker
* EC2
* S3
* H2
* JUnit
* Java11

## Features

Users can:
• Register
• Login/Logout.
• Reset their password.
   o Email token authentication.
• Modify their information.
• Upload a profile picture (using AWS: S3).
• View his own profile.
   o Including posts.

To-do list:
* Add JWTs for authentication
* View other peoples profiles

## Getting Started
   
Clone the repository: git clone https://github.com/mprecilio/WalmartInterviewProject.git
Enviornment variables required: (Please set the enviornment variables in the Dockerfile located in the ./walmart repository)
2108_EMAIL    - Email account used to use to send a reset password email
                    -Note email must allow access "Less secure app access"
2108_PASSWORD - Password associated with that email

- All the `code` required to get started can be found in the WalmartInterviewProject repository
- Images of what it should look like can be found in the screenshots directory


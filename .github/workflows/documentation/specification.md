Trello Specification
====================

## Description:
A project management tool inspired by Trello, built using Vue 3, Typescript, Vite and TailwindCSS. The app allows users to create boards, manage task and collaborate in an intuitive drag-and-drop interface.

## Target Audience:
This app targets teams, project managers, and individuals looking to organize tasks efficiently. Suitable for businesses and freelancers across various industries.

## Goals:
To provide a simplified and user-friendly project management platform that enhances productivity, organization and team collaboration.


## Use Case Overview

| Serial No | Pages             | Related Path (Page URL)    | Unique Code       | Functionality Name        | Documentation      | Automated Test | Criticity | Comments |
|-----------|-------------------|----------------------------|-------------------|---------------------------|--------------------|----------------|----------|
| 01        | Signup            | /signup                    | S-001              | User Signup               | ✅            |      | ❌              |          |
| 02        | Login             | /login                     | L-002              | User Login                | ❌            |      | ❌              |          |
| 03        | Board List        | /                          | BL-003             | Display Board List        | ❌            |      | ❌              |          |
| 04        | Board             | /board/:boardId              | B-004              | Manage Board              | ❌            |      | ❌              |          |
| 05        | Pricing           | /pricing                   | P-005              | Pricing Information       | ❌            |      | ❌              |          |
| 06        | Not Found         | /*                         | NF-006             | Page Not Found            | ❌            |      | ❌              |          |

Note: All the paths will follow the **BaseURL**: http://locahost:3000

## Use cases

### Signup Page
#### S-001 - User Signup
##### Quick Description:
- The new user creates an account.

##### Preconditions:
- The user should have no account.
- The user should have an email and password.

##### Nominal Process:
1. Navigate to `baseURL/signup`.
2. Fill the email field.
3. Fill the password field.
4. Click the 'Create account' button.
5. User is redirected to the Home page.

##### Alternative Flows:
- To receive a welcome email, the user can check the checkbox labeled 'Send me a welcome email'.

#### Postconditions:
- The user is logged in with their new account.
- The user is redirected to the Home page.
- A popup labeled 'User is logged in' appears.
- A popup labeled 'User is logged in' appears when navigating to `baseURL/signup` or `baseURL/login`.
- A popup labeled 'Email already exists' appears when trying to sign up with an existing user email.

***

### [Page Name]
#### [Unique Code] - [Use case Title]
##### Quick Description:
- [Briefly describe the purpose of this use case.]

##### Preconditions:
- [List any conditions that must be met before executing this use case.]

##### Nominal Process:
1. Navigate to `[Page URL]`.
2. [ Describe step-by-step user actions.]
3. Expected outcome or system response.

##### Alternative Flows:
- [Describe any variations or error handling flows.]

#### Postconditions:
- [What should be true after the process is completed?]

***
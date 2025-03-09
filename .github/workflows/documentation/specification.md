Trello Specification
====================

## Description:
A project management tool inspired by Trello, built using Vue 3, Typescript, Vite and TailwindCSS. The app allows users to create boards, manage task and collaborate in an intuitive drag-and-drop interface.

## Target Audience:
This app targets teams, project managers, and individuals looking to organize tasks efficiently. Suitable for businesses and freelancers across various industries.

## Goals:
To provide a simplified and user-friendly project management platform that enhances productivity, organization and team collaboration.


## Use Case Overview

| Serial No | Pages             | Related Path (Page URL)    | Unique Code       | Functionality Name        | Documentation      | Automated Test | Comments |
|-----------|-------------------|----------------------------|-------------------|---------------------------|--------------------|----------------|----------|
| 01        | Signup            | /signup                    | 01-S              | User Signup               | ❌                  | ❌              |          |
| 02        | Login             | /login                     | 02-L              | User Login                | ❌                  | ❌              |          |
| 03        | Board List        | /                          | 03-BL             | Display Board List        | ❌                  | ❌              |          |
| 04        | Board             | /board/:boardId              | 04-B              | Manage Board              | ❌                  | ❌              |          |
| 05        | Pricing           | /pricing                   | 05-P              | Pricing Information       | ❌                  | ❌              |          |
| 06        | Not Found         | /*                         | 06-NF             | Page Not Found            | ❌                  | ❌              |          |

Note: All the paths will follow the **BaseURL**: http://locahost:3000

## Use cases

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
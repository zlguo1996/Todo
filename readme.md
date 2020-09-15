# Todo Web Application

A todo web application which allows users to:
- create / delete todo items
- modify content and completion state of todo items
- reorder todo items

## Code composition
- [common folder](./services/common) stores the common data types for communication between front end and back end
- [todos folder](./services/todos) contains code for the front end
- [server folder](./services/server) contains server code for handling CRUD requests and communicate with MySQL database

## Assumptions
Since the code is a simple example for learning basic fullstack knowledge, it does not consider complex logic for data synchronization and high concurrency. The code is built based on the following assumptions of requirements:
1. All the client share one todo list. No login and classification on users.
2. Only one client read and write todo list at the same time. So no merge strategy or server push is required.
3. The list contains no more than 100 items. One item contains no more than 100 characters.

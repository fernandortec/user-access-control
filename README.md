
# User access control

### Description
In this project I created a User Access Control, using lists that define the user's permissions and roles.

The project's objective was to create an application that evaluates and controls users' access permissions.

The project was develop in: NodeJS + Typescript + TypeORM (PGSQL) + Express with JWT Auth

Postman collection:
https://www.getpostman.com/collections/eef92121b59ccb00d7af
###


### Setup:
Clone the repository
```bash
git clone https://github.com/fernandortec/user-access-control
```
Navigate to the folder

```bash
cd /user-access-control
```

Install the dependencies
```bash
yarn install | npm install
```

Start the server
```bash
yarn dev | npm run dev
```

### Observations:
While running a request there may appear a dependency injection error.
The source of the error is unknown and I could not trace it.
The ways to solve the error are: to restart the server, or delete and reinstall node_modules;


# User access control

### Description
For this project, I've created a User Access Control using lists that define the user's permissions and roles.

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
While running a request a dependency injection error may show up.
The source of this error is unknown and I could not trace it.
Possible workarounds for the error are restarting the server, or deleting and reinstalling node_modules;

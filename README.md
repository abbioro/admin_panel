# Admin Panel

This is a project I made to teach myself NPM, Express and Vue. As the project grew I decided to explore more web development topics like middleware, cookies, REST, session handling, authentication, general security (e.g. XSS), browser dev tools, and of course styling :P

## Features

- Ability to view and edit users in admin view
- Users stored in sqlite3 database
- Userlist is dynamically rendered using Vue
- Shift-click to select multiple users
- Login with authentication, only password hashes are stored using bcrypt
- Session handling
- HTTPS
- Environment vars stored in `.env`

## TODO

- [X] Set up nice dev environment with `nodemon` and stuff
- [X] Render users from DB in admin view
- [X] Allow modifying users
- [X] Shift-click to select multiple users
- [X] Cookies
- [X] HTTPS
- [X] Add sessions
- [X] Add authentication
- [ ] Refactor to Vue templates using [vue-express](https://github.com/express-vue/express-vue)
- [ ] Add minified Vue and Axios to build system
- [ ] Add DB migrations
- [ ] Add CSRF protection and other mitigations
- [ ] Create user editor/creator
- [ ] Sorting users, searching
- [ ] Roll own session code? Not sure if signing session ID is a good idea

# ticket-booking-app

GitHub repo: https://github.com/id-wiut/ticket-booking-app

Deploy link: https://ticket-booking-app-lffpe.ondigitalocean.app/tickets
WARNING: It took over an hour of time wasting to try deploying app in Glitch and I decided to deploy it in DigitalOcean which provides its own CI/CD solutions.

The app was built to make connection with users and tech support group. Users can create tickets with their issues and tech support can reply to them.

How to run the app locally:

- Download [Nodejs](https://nodejs.org)
- Make sure Node and NPM are installed and their PATHs defined
- Download the code
- Navigate to inside the project folder on terminal, where you can see a package.json file
- Do an `npm install` for installing all the project dependencies
- Then `npm start` OR `node app.js` OR `npm run dev` to get the app running on local host

**Dependencies list:**

```json
"dependencies": {
    "ejs": "^3.1.6",
    "express": "^4.17.3",
    "mongoose": "^6.2.10",
    "mongoose-unique-validator": "^3.0.0"
  },
  "devDependencies": {
    "dotenv": "^16.0.0",
    "nodemon": "^2.0.15"
```

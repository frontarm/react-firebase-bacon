Make Bacon with React & Firebase
================================

This is the companion repository to [React, Firebase & Bacon](https://frontarm.com/bacon) -- a complete guide to building a real-world app with React.

Each branch within this repository contains code for one or more steps within the course. [See an outline and installation instructions at the master branch &raquo;](https://github.com/frontarm/react-firebase-bacon)


Step 061 - Firebase functions
--------

This step makes the following changes:

- Modify `firestore.rules` to lock down the database completely
- Add the `functions` directory, with actions to post responses and get the response count
- Add [npm-run-all](https://www.npmjs.com/package/npm-run-all) to dependencies
- Modify the scripts field of `package.json`, so that running `npm start` or `yarn start` will start both the CRA and Firebase dev servers
- Add the `functions/.serviceaccount.json` file to `.gitignore` -- you'll need to add it yourself to get the example working
- Initialize Firebase functions client-side in `backend.js`
- Update the landing route to use Firebase functions when posting responses, and when fetching the latest response count

Related lessons:

- *TODO*


License
-------

Code is licensed under the MIT license. Images are not licensed.
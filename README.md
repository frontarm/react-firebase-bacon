Make Bacon with React & Firebase
================================

This is the companion repository to [React, Firebase & Bacon](https://frontarm.com/bacon) -- a complete guide to building a real-world app with React.

Each branch within this repository contains code for one or more steps within the course. [See an outline and installation instructions at the master branch &raquo;](https://github.com/frontarm/react-firebase-bacon)


Step 060 - Firestore configuration
--------

This step makes the following changes:

- Add the [firebase](https://npmjs.com/package/firebase) package as a dependency.
- Add a `firestore.rules` file that (mostly) locks down the firestore database, and tell Firebase to use it in `firebase.json`.
- Add `src/config.js`, which exports an object with the app's config, as set by your environment variables at build time.
- Add an `.env.example` file (you can rename this `.env.local` and add your Firebase configuration, to set your environment variables for config.js).
- Replace `src/backend.js` with code to initialize firestore.
- Remove code to display a response count from the Landing route, and replace the call to the `postResponse` function with a direct call to Firestore.

Related lessons:

- *TODO*


License
-------

Code is licensed under the MIT license. Images are not licensed.
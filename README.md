Make Bacon with React & Firebase
================================

This is the companion repository to [React, Firebase & Bacon](https://frontarm.com/bacon) -- a complete guide to building a real-world app with React.

Each branch within this repository contains code for one or more steps within the course. [See an outline and installation instructions at the master branch &raquo;](https://github.com/frontarm/react-firebase-bacon)


Step 062 - Counts, costs and caches
--------

This step makes the following changes:

- In the backend's `postResponse` action, increment a response counter for each successfully saved response
- Update `firestore.rules` to allow anybody to read the response count
- In the landing route, read the response count directly from firestore
- Remove the `getResponseCount` backend action, as it is no longer needed

Related lessons:

- *TODO*


License
-------

Code is licensed under the MIT license. Images are not licensed.
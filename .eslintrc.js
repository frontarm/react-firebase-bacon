module.exports = {
  "extends": "react-app",
  "rules": {
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "styled-components",
            "message": "Please import from styled-components/macro."
          }
        ],
        "patterns": [
          "!styled-components/macro"
        ]
      }
    ]
  }
}
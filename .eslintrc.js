module.exports = {
    "extends": "airbnb-base",
    globals: {
      "AFRAME": true,
      "document": true,
    },
    rules: {
      // Allow for anonymous functions in things like setTimeout()
      "func-names": "off",
      // Requiring comma-dangle makes for cleaner git diffs
      "comma-dangle": ["error", "always-multiline"],
      "object-shorthand": "off",
    }
};

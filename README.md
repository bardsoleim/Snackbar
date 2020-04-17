# Snackbar
A material design inspired snackbar for your webpage 
# Usage

  - Import the js and css file to your project
  - Call the function when needed
  ```sh
createSnackbar(message, actionText, action);
```
**message** main text that will be displayed to the user
**actionText** button text.
**action** function that the actionbutton will bind an on-click listener for, if not provided with a function it will act as an dissmiss button.

# Sample Usage
  ```sh
createSnackbar("Hello world");
createSnackbar("Hello world", "Click", foo(););
```
Snackbar will create a brief message to the user. 
A maximum number of 3 snackbars can be shown at a given time with its duration set to 5 seconds.

// Require Jquery & snackbar.css

const maxSnackBarElements = 3;
const snackbarDuration = 5000;
const snackbarHeight = 60;

function createSnackbar(message, actionText, action) { 
    
    // Counts number of already visible snackbars and removes the last added if it exceeds maxSnackBarElements
    var container = $('.snack-element');
    if (container.length >= maxSnackBarElements) {
        container[0].dismiss();
        container = $('.snack-element');
    }

    // Init snackbar container div
    const snackBarContainer = document.createElement('div');
    snackBarContainer.className = 'snackbar snack-element';

    // init textcontainer where we will display our message
    const textContainer = document.createElement('span');
    textContainer.innerHTML = message;
    snackBarContainer.appendChild(textContainer);

    // Bind dismiss function that hides the snackbar
    snackBarContainer.dismiss = function() {
        this.style.opacity = 0;
        this.classList.remove('snack-element');
        // updates the posistion of adjacent snackbars
        $(".snack-element").each(function (i, obj) {
            obj.style.bottom = snackbarHeight * i + 'px';
        });
    };

    // Init action function and action text, if no action is provided it will act as a close button
    if (actionText) {
        if (!action) {
            action = snackBarContainer.dismiss.bind(snackBarContainer);
        }
        const actionButton = document.createElement('button');
        actionButton.className = 'material-button';
        actionButton.innerHTML = actionText;
        actionButton.addEventListener('click', action);
        snackBarContainer.appendChild(actionButton);
    }

    // Sets a timer for when the dismiss function shall be called
    setTimeout(function() {
            this.dismiss();
        }.bind(snackBarContainer),
        snackbarDuration);

    // Adds a listener for the dismiss function that will remove the snackbar after the fade animation.  
    snackBarContainer.addEventListener('transitionend',
        function(event) {
            if (event.propertyName === 'opacity' && this.style.opacity === 0) {
                this.parentElement.removeChild(this);
            }
        }.bind(snackBarContainer));

    // Appends the new snackbar to the body in the document
    document.body.appendChild(snackBarContainer);
    getComputedStyle(snackBarContainer).bottom;
    snackBarContainer.style.opacity = 1;
    snackBarContainer.style.bottom = snackbarHeight * container.length + 'px';
    
};


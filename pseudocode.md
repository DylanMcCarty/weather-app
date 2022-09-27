do not use static functions that can't be updated in the event that it needs to be changed

use if statements to determine which things will run in a function 

if i have questions then im not done pseudocoding 

decide how i want to start building the code

# Questions

how am I going to display api information?
how am I going to change the page depending upon the viewport height and width? 
how am I going to alter the object output?
```
How the hell do i make the image change based on condition?
```
idea from stack overflow on how to change one input based on another
        ```
        var x = document.getElementsByTagName('input');
        inputfile = x[0];
        textbox = x[1];
        ```
```
```

# OBJECTIVE
This will be a weather app that shows the weather in a given area in the US using zip code 
the weather app will be able to scale to desktop as well as scale to phone viewport, and 
will output city, temoerature, condition, and an image to reflect the condition 
-----
# MY OWN TWISTS
I would like to display a background image as the condition reflector.








-----

# ELEMENT Breakdown

```js
CREATE div for header 
CREATE div for button and input 
CREATE div for city display 
CREATE div for temperature 
CREATE div for condtion 
CREATE div for image which populates dependent upon the condition

# LOGIC breakdown
```

```js
ASYNC fetchFunction() {
    Get api info 
        get response 
        get info i need
}        


ARRAY [
    OBJECT
    {
        API CITY
    },
    {
        API TEMPERATURE
    }
    {
        API CONDITION 
    }
    {
        changeImageBasedOnCondition
    }
]

changeImageBasedOnCondition() {
    CHECK condition of object 
    IF (condition) {
        return image
    }
}

ARRAY2 [    
    
]



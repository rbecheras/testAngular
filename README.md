# angular/express-challenge

Your challenge is to create contact form using Reactive Forms in Angular and .

## Getting Started

1. fork and clone this repo
2. `npm install`
3. `npm run start` will start a live server on localhost:4200

## Challenge
1. Create a new route at `/contact` that will lazy load a new component called `ContactComponent` (see other route examples)
   
2. Add a reactive form to the ContactComponent with the following controls:
    - `name` - string, required
    - `email` - string, required
    - `message` - string, required
    - `shouldAddToNewsletter` - boolean
3. Add error handling
4. Add success handling
5. Style the forms to be centered vertically and horizontally on the page


## Server Side
1. Create your server code with Node/Express Framework to listen to your front call. When server is launched, print every submitted form to the console only if shouldAddToNewsletter is true.
2. Test your Node/Express route with a test/test_app.ts, using any testing framework you like (mocha, chai, jest, ...)
3. Store data in MongoDb


## Bonus
- flex your html/css skills and style an interesting 404 page for the not-found.component.html
- Create a service to handle API request/response
- Create reusable components (ie. `TextFieldComponent` and `CheckboxComponent`)
- Provide some server side config file separation for dev and prod environments

## Completion 
- send a link to your repo to Mohamed: mkeita@freelance.com

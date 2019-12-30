# MEAN-challenge

Your challenge is to create contact form using Reactive Forms in Angular and the back-end side with Node/Express/Angular.

## Getting Started

1. fork and clone this repo
2. `npm install`
3. `npm run start` will start a live server on localhost:4200

## Front-End
1. Create a new route at `/contact` that will lazy load a new component called `ContactComponent` (see other route examples)
   
2. Add a reactive form to the ContactComponent with the following controls:
    - `name` - string, required
    - `email` - string, required
    - `phone number` - string, required
    - `shouldAddToNewsletter` - boolean
3. Add error handling
4. Add success handling
5. Style the forms to be centered vertically and horizontally on the page


## Back-End
(with Angular for Front-End only developpers) 
Create Angular services to make API calls, use https://jsonplaceholder.typicode.com/posts to post form data

OR (for Back-End only developpers) :

1. Create your server code with Node/Express Framework to listen to your front call. When server is launched, print every submitted form to the console only if shouldAddToNewsletter is true. Every submitted form is stored into MONGO DB.
2. Test your Node/Express route with a test/test_app.ts, using any testing framework you like (mocha, chai, jest, ...).

## Algorithmic
Write a function that use the numbers from the phone number form (space separatted) to arrange them such that they form the largest possible number and console log this number, server side. For example, given [33, 6, 10, 19, 12, 99], the largest formed number is 99633191210

## MONGO DB
Write a model to store the Contact Form data.
Write a request which returns a sorted list of all DB elements, sorted by creation history, or by email, or by "largest phone number" (see above function, writing it is not necessary to answer this question).


## Front-End Bonus
- Flex your html/css skills and style an interesting 404 page for the not-found.component.html
- Create a service to handle API request/response
- Create reusable components (ie. `TextFieldComponent` and `CheckboxComponent`)

## Back-End Bonus
- Provide some server side config file separation for dev and prod environments
- Create a node function that will be triggered each day (don't bother implementing the triggering) that will use a MongoDB request to get all contacts stored and will sequentially but asynchronously send them by group of 10 to a distant API for validation, requestind and using API SDK function distantAPI.checkPhoneNumbers([Array of Integers], clientToken). Require another maked up function from the API SDK to get the token. 

## Completion 
- send a link to your repo to 
	Mohamed: mkeita@freelance.com
	Jean-Michel : jmmas@freelance.com

MErci et bon courage !

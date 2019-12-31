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
- We need to create a function to send SMS to all contacts phone numbers, to send an SMS to any given phone number, you will use an API's SDK. Do as follows :
	1. create a MongoDB request to get all contacts stored 
	2. create the node function that will send the SMS "Hi ${contact name}!". IMPORTANT : there are api restrictions, you can make up to 10 maximum asynchronous calls to the api, wait for the answers, and then continue with the other calls (up to 10 max), sequentially. Require and use API SDK function distantAPI.sensSMS([Array of Integers], message, clientToken). Require another maked up function from the API SDK to get the token. 

## Completion 
- send a link to your repo to 
	Mohamed: mkeita@freelance.com
	Jean-Michel : jmmas@freelance.com

Merci et bon courage !

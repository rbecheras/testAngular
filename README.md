# angular-challenge

Your challenge is to create contact form using Reactive Forms in Angular.

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

## Web Service Consumer 
Create Angular services to make API calls, use https://jsonplaceholder.typicode.com/posts to post form data

## Bonus
- flex your html/css skills and style an interesting 404 page for the not-found.component.html
- Create a service to handle API request/response
- Create reusable components (ie. `TextFieldComponent` and `CheckboxComponent`)

## Completion 
- send a link to your repo to Mohamed: mkeita@freelance.com

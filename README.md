# Full-Stack JavaScript Developer Code Challenge

## How to use this repo

Make sure to install the dependencies using `npm install` beforehand.

To start the frontend & backend use `npm start`.

The frontend uses `create-react-app` as dev tool. All requests to `/api/*` are
proxied to `http://localhost:3001/` which is the port the backend listens on.

## Purpose

- Evaluate your coding abilities and experience
- Get a feel for how you would solve a problem, what you value, how you'd organize code, stylistic choices
- Understand how you design a solution

## What we'll be looking at

- Wether the solution meets requirement and how well it does
- Overall solution design
- Coding standard, comments and style
- Use of source control
- Testing

## Intructions

1. Start by forking this repo (https://github.com/justscribner/coding-challenge-full-stack-js.git) to save time on setup (or start from scratch if you wish)
2. Spend about 1-3 hours working on this (the pre-configured repo should help with that) 
3. Send us a link to a public GitHub repository with your code  (or share a private one with the username `justscribner`)

## Challenge: Flickr feed viewer and search

Write a simple web application that reads data from Flickr's public feeds and displays the images on the page to the user. Please check the Flickr API documentation from the following URL:

- Documentations: [https://www.flickr.com/services/feeds/](https://www.flickr.com/services/feeds/)
- Example Response: [https://api.flickr.com/services/feeds/photos_public.gne?format=json](https://api.flickr.com/services/feeds/photos_public.gne?format=json)

### Details

- Write a web application - backend built using JavaScript/NodeJS/ExpressJS and frontend developed using React.
- On page load the applications should load the public feed images in either a list or grid view
- The user should be able to enter a keyword in a search box and click on a search button and the app should show images with the relevant tags
- Use any other third party library of your choice if needed
- For extra points, structure the backend as the api endpoint needed was part of a much larger application that required more organization than a one file express app would

Please use any MaterialUI to make your app look better

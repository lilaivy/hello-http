<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Hello HTTP
======

## Directions

* Use the Node.js `http` module to create an http server. 
* responds with a greeting if the method is GET and url (path) is `/greeting/<name>`
  * If query string specifies `salutation` use that for the greeting salutation, otherwise `hello`
  * If name is not included, use "stranger", otherwise use name in greeting
* responds with an interesting fact about http (up to you) if the method is GET and the url (path) is `/fact`
* Respond to `/` or `index.html` by serving the contents of an `index.html` file you define.
* You can add other routes if you like
* Any other request should return status code 404 Not Found and include the text: `CANNOT <method> <path>`
* Add a `README.md` that describes how to use your API 

### Architecture and Design
* Define the listening function for your server in `lib/app.js`, but export it and create the server and listen 
in a `server.js` file at the root of your project.
* Use 'extract' function to not have all of your code live in the listening function. Try and TDD these functions first.

## Testing
* Use chai-http to test the API.

## Bonus

Feel free to add a library like `cowsay` or `figlet` to enhance your response if supplied as `?format=cowsay` query. :) 
No test necessary.

## Rubric

* HTTP Path: `3pts`
* HTTP Verb: `1pt`
* 404: `1pt`
* Serves index.html: `1pt`
* Query Handling: `2pts`
* Test Design and Setup: `2pts`

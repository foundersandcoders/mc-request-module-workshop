# Morning challenge - Build a request module

This week in your project you will be making API calls from the backend. In the past few weeks you have been making API calls from the frontend with the `fetch` method. Now that you are in the backend we would like you to learn how to make similar requests using the Node core [http module](https://nodejs.org/api/http.html). This workshop is intended to familiarise you with how backend requests are made, and practice creating your own promises.

## Learning outcome

To become familiar with making API calls from the backend using the Node core [http module](https://nodejs.org/api/http.html).

## When would I need to make an API call from the backend?

Example 1 - I want to avoid Cross Origin Resource Sharing [(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - you may have come across this in API week

Example 2 - I would like to make a request to an API that requires an API key to use - I want to keep this key secret so I can't make a request from the frontend

## The challenge

Create a function called `myRequest` which makes a request to an API url using an HTTP GET request.

It should take one argument: the url to make the request to. It should return a promise.

If the request is successful the promise should resolve with an object containing two properties:

1. `statusCode` (the status of the response)
2. `body` (the body of the response, parsed from a JSON string into an object)

If the request fails the promise should reject with the error Node provides.

**Hint**: Remember that Node bodies are _streams_, so you'll receive data in chunks.

**Hint**: You can [create your own promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Examples) using the built-in constructor:

```js
const myPromise = new Promise((resolve, reject) => {
  // if we have a successful result we can resolve with it
  resolve(result);
  // if we have an error the promise should reject
  reject(error);
});
```

To complete this challenge you will need to use the [`http.get`](https://nodejs.org/api/http.html#http_http_get_options_callback) method of the node core `http` module.

## Start here!

1. Clone this repo & run `npm install`
2. Run `npm test` in your command line to start the test watcher. The tests should fail as your function doesn't do anything yet
3. Open `app.js` and write your function!

## Bonus round

Most modern APIs will use the `https` protocol.
Try using your function with this url (`http://jsonplaceholder.typicode.com/users/1`).

```js
myRequest("http://jsonplaceholder.typicode.com/users/1")
  .then(console.log)
  .catch(console.error);
```

You should see the response logged.

If you try again using the Pokemon API (`https://pokeapi.co/api/v2/pokemon/squirtle`), you'll see that using an API url which starts with `https` will error.

Alter your `myRequest` function to check which protocol the url is using (`http` or `https`) and use the appropriate Node core module. You will need to require `https`. You can test this by uncommenting the second test in `app.test.js`.

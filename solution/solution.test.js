const tape = require("tape");
const nock = require("nock");
const _test = require("tape-promise").default;
const test = _test(tape); // add promise support to tape
const {
  myRequest,
  // uncomment the line below to test bonus solution
  // myBonusRequest,
} = require("./solution");

test("myRequest fetches data correctly", t => {
  nock("http://jsonplaceholder.typicode.com")
    .get("/users/1")
    .reply(200, {
      name: "Leanne Graham",
    });

  return myRequest("http://jsonplaceholder.typicode.com/users/1").then(
    response => {
      t.equal(
        response.statusCode,
        200,
        "the API should respond with a status code of 200"
      );
      t.deepEqual(
        response.body.name,
        "Leanne Graham",
        "the response body should contain the correct json"
      );
      t.end();
    }
  );
});

test("myRequest rejects bad requests", t => {
  return t.rejects(myRequest("abc"), "promise should reject on error");
});

if (typeof myBonusRequest !== "undefined") {
  test("myBonusRequest fetches data if API uses https", t => {
    nock("https://jsonplaceholder.typicode.com")
      .get("/users/1")
      .reply(200, {
        name: "Leanne Graham",
      });

    return myRequest("https://jsonplaceholder.typicode.com/users/1").then(
      response => {
        t.equal(
          response.statusCode,
          200,
          "the API should respond with a status code of 200"
        );
        t.deepEqual(
          response.body.name,
          "Leanne Graham",
          "the response body should contain the correct json"
        );
        t.end();
      }
    );
  });
}

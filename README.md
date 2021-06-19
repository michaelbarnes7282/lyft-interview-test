# lyft-interview-test

- A small web app that cuts strings!
- This app is hosted on https://mbarnes01-lyft-interview.herokuapp.com/

# Route

> ### POST /test

```
Expects:
    body: {
        "string_to_cut": <The string you would like to cut>
    }
```

```
Returns:
{
    "return_string": <A string containing every third letter from the original string>
}
```

- If you would like to check the functionality of the app you may run the command:

```
curl -X POST https://mbarnes01-lyft-interview.herokuapp.com/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
```

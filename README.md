# relay-commit-mutation-promise
Promise wrapper for Relay Modern's commit mutation

## Installation
```
npm install relay-commit-mutation-promise
```

## Usage with Relay Modern
```js
const commitMutation = require('relay-commit-mutation-promise');
const {graphql} = require('react-relay');

const mutation = graphql`
  mutation MarkReadNotificationMutation(
    $input: MarkReadNotificationData!
  ) {
    markReadNotification(data: $input) {
      notification {
        seenState
      }
    }
  }
`;
const variables = {
  input: {
    source,
    storyID,
  },
};

commitMutation(environment, {mutation, variables})
  .then(response => {
    // handle successful response
  })
  .catch(error => {
    const graphqlErrors = error.source.errors;
    // handle error
  });
```

Usage with Relay Modern compat layer
```js
const commitMutation = require('relay-commit-mutation-promise/compat');
```
## Accessing GraphQL errors
The error object returned in the rejected promise contains a `source` property which contains an array of the errors returned by the GraphQL server.

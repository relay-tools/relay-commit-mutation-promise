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
    // handle error
  });
```

Usage with Relay Modern compat layer
```js
const commitMutation = require('relay-commit-mutation-promise/compat');
```

## Limitations
If one or more errors are returned in the mutation payload, the promise will be rejected with the first error. You should not use this library if you need access to more than on returned error.

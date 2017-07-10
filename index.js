var Relay = require('react-relay');

function commitMutationPromise(environment, mutation, variables) {
    return new Promise(function (resolve, reject) {
        Relay.commitMutation(
            environment,
            {
                mutation,
                variables,
                onCompleted: function (payload, errors) {
                    if (errors) {
                        reject(errors[0]);
                        return;
                    }
                    resolve(payload);
                },
                onError: function (error) {
                    reject(error);
                }
            }
        );
    });
}

module.exports = commitMutationPromise;

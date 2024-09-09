/**
 * Based on Promise.withResolvers proposal
 * https://github.com/tc39/proposal-promise-with-resolvers
 */
export function promiseWithResolvers() {
    // these are assigned synchronously within the Promise constructor
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return { promise, resolve, reject };
}

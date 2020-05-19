# Vercel bug - extending ES6 classes

To reproduce:

1. Set up with `yarn install`.
2. Run `vercel dev` and see version `Vercel CLI 19.0.2-canary.4 dev (beta)` start.
3. Visit `http://localhost:3000/api/test`, and observe that the endpoint crashes with the following message: `TypeError: Class constructor ApolloServerBase cannot be invoked without 'new'`.

Whereas, when I run the same procedure using `now dev` (`Now CLI 19.0.1 dev (beta)`), the request succeeds and responds with `Server object: [object Object]`.

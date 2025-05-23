import { createAuth0Client } from '@auth0/auth0-spa-js';

  // Auth0 initialization can also live here
  (async () => {
    const auth0 = await createAuth0Client({
      domain:       'dev-7myhr3pamqsitzsy.uk.auth0.com',
      clientId:     'c9xQfg0KqjdhlECgY6KAivWSH40BJZ9w',
      redirect_uri: window.location.origin
    });
    // …
  })();

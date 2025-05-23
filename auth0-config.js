import { createAuth0Client }
  from 'https://cdn.jsdelivr.net/npm/@auth0/auth0-spa-js@2/dist/auth0-spa-js.production.esm.js';

(async () => {
  const auth0 = await createAuth0Client({
    domain:       'dev-7myhr3pamqsitzsy.uk.auth0.com',
    clientId:    'c9xQfg0KqjdhlECgY6KAivWSH40BJZ9w',
    redirect_uri: window.location.origin
  });

  document
    .querySelector('.our-instruction-button')
    .addEventListener('click', () =>
      auth0.loginWithRedirect({ screen_hint: 'signup' })
    );

  if (
    location.search.includes('code=') &&
    location.search.includes('state=')
  ) {
    await auth0.handleRedirectCallback();
    history.replaceState({}, document.title, '/');
    // redirect to your next step
    location.href = '/next-step.html';
  }
})();
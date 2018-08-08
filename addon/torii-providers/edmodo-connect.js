import Oauth2Bearer from 'torii/providers/oauth2-bearer';
import { configurable } from 'torii/configuration';

/*
 * This class implements authentication against Edmodo with the token flow.
 * */
export default Oauth2Bearer.extend({
  name: 'edmodo-connect',
  baseUrl: 'https://api.edmodo.com/oauth/authorize',
  responseParams: ['access_token'],

  redirectUri: configurable('redirectUri'),
  scope: configurable('scope', 'basic')
});


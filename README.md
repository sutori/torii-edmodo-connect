torii-edmodo-connect
==============================================================================

This is an [Edmodo Connect](https://www.edmodo.com/home) provider for [Torii](https://github.com/Vestorly/torii).

Installation
------------------------------------------------------------------------------

```
ember install torii
ember install torii-edmodo-connect
```


Usage
------------------------------------------------------------------------------

Edit `/config/environment.js` and add your Torii provider configuration:

```javascript
module.exports = function(environment) {
  // ...

  ENV['torii'] = {
    providers: {
      'edmodo-connect': {
        apiKey: 'Edmodo API key',
        redirectUri: 'http://localhost:4200/torii/redirect.html',
        scope: 'permission scopes (default: "basic")'
      }
    }
  };

  // ...
};
```

Options that can be configured:

| Option | Required | Description |
|--------|----------|-------------|
| apiKey | x | Client ID of your app |
| redirectUri | x | Redirect URI of the app for the authentication response |
| scope | | Permission scopes |


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd torii-edmodo-connect`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

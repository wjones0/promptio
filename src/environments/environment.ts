// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDEo9FcqLCr_Mg248R5ZOXsDP27-1xL5vA",
    authDomain: "telepromptio-dbe76.firebaseapp.com",
    databaseURL: "https://telepromptio-dbe76.firebaseio.com",
    projectId: "telepromptio-dbe76",
    storageBucket: "telepromptio-dbe76.appspot.com",
    messagingSenderId: "215972143136"
  }
};

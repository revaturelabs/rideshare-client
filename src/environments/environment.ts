// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://ec2-35-174-153-234.compute-1.amazonaws.com:2222'
  // apiUrl: 'http://192.168.60.54:2222'
  // apiUrl: 'http://e5a3040f.ngrok.io/'
};

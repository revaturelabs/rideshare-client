/** Represents an instance's environemnt in the event we are in production mode */
export const environment = {
  /** whater instance is in production mode (true in this case) */
  production: true,
  /** URL for the service we are relying on */
  apiUrl: 'http://ec2-35-174-153-234.compute-1.amazonaws.com:2222',
  cognitoData : {
    UserPoolId: 'us-east-1_WDI06D2wk',
    ClientId: '2lphaal777tsbnv83sum33sb78'
  }
};

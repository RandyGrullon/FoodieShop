const authConfig = {
    loginEndpoint: '/login',
    registerEndpoint: '/register',
    storageTokenKeyName: 'accessToken',
    onTokenExpiration: 'refreshToken' // logout | refreshToken
}

export default authConfig;
  
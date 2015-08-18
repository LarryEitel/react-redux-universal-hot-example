module.exports = {
  development: {
    isProduction: false,
    port: 3000,
    apiPort: 3040,
    app: {
      name: 'React Redux Example Development'
    }
  },
  production: {
    isProduction: true,
    port: process.env.PORT,
    apiPort: 3040,
    app: {
      name: 'React Redux Example Production'
    }
  }
}[process.env.NODE_ENV || 'development'];

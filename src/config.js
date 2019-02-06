global.SALT_KEY = 'password';

module.exports = {
    connectionString: process.env.URL_DB || 'mongodb://localhost:27017/security',
}
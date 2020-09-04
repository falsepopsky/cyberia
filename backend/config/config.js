const config = {
  port: process.env.BASE_PORT || 3000,
  secret: process.env.SESSION_SECRET || 'YOUR_session_secret',
  name: process.env.SESSION_NAME || 'YOUR_session_name',
};

module.exports = config;

const { Pool } = require ("pg")

module.exports = new Pool({
  user: 'postgres',
  password: 'root1234',
  host: 'localhost',
  port: '5432',
  database: 'launchstore'
})
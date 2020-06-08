const variables = {
  Api: {
    port: process.env.port || 3000,
  },
  Database: {
    // connection: process.env.connection || 'mongodb+srv://agenda:agenda@agenda-zmyh8.mongodb.net/Agenda?retryWrites=true'
    // connection: process.env.connection || 'mongodb+srv://mybookstore:mybookstore@cluster0-tfzdf.mongodb.net/test?retryWrites=true'
    connection:
      process.env.connection
      || `mongodb://sia_db:27017/${process.env.TEST_SUITE}`
      || 'mongodb://db/mybookstore',
  },
};

module.exports = variables;

const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://db_user_platzinodejs:rNhUxhpuBrjkGYja@cluster0.shxg8.mongodb.net/platzinodejs_db',
    host: process.env.HOST || 'https://localhost',
    port: process.env.PORT || 3000,
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
};

module.exports = config;
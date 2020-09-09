/* DATABASE_ADDR: `mongodb://sia_db_1:27017/` */

/*  `mongodb://localhost:27017/local` */
export default {
    DATABASE_PORT: 3000,
    DATABASE_ADDR: process.env.MONGO_URL || `mongodb://localhost:27017/local`
}
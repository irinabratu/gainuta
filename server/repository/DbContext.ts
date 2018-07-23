﻿export class DbContext {

    public static freeDb = {
        host: 'sql11.freesqldatabase.com',
        database: 'sql11197471',        
        user: 'sql11197471',
        password: 'wWqzFNeYYG'
    };

    public static herokuDb = {
        host: 'eu-cdbr-west-01.cleardb.com',
        database: 'heroku_934cf0154b7da95',
        user: 'bb1e7a54268049',
        password: 'a7ea7904'
    };

    public static freeMyDb = {
        host: 'sql11.freemysqlhosting.net',
        database: 'sql11202175',
        user: 'sql11202175',
        password: 'MkHCCbq5eR'
    };

    public static prodDb = DbContext.freeMyDb;
}

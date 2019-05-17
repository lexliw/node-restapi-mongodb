'use strict';

var config = require('./global');

//  ======[ DATABASE ]======

config.db.credential.database = 'deviceId-test';
config.db.credential.host = 'localhost';

config.db.options.createIndexes = false;
config.db.options.poolSize = 5;

//  ======[ ADDRESS ]======
config.serverIp = '0.0.0.0';
config.serverPort = 3000;
config.redisPort = 6379;

//  ======[ ADMIN ]======
config.admin.resetPasswordHost = 'localhost';
config.admin.resetPasswordRoute = null;
config.admin.resetPasswordEmail = 'admin@local.com';
config.admin.errorEmail = 'admin@local.com';

//  ======[ API ]======
config.jwtSecret = 'simpleSecret';

//  ======[ MAIL SERVICE ]======
config.mailService.mailer = {
    service: 'Gmail',
    user: 'someone@gmail.com',
    pass: 'nopass'
};

config.mailService.sendgrid = '[MOCK SENDGRID API KEY]';

config.mailService.mailgun = {
    apiKey: '[Your_Mailgun_key]',
    domain: '[Your_website_domain]'
};

module.exports = config;

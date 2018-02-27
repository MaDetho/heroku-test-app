'use strict';

const Telegram = require('telegram-node-bot'),
    tg = new Telegram.Telegram('550466086:AAHjSFVPBlV4kW3Z1gqyWfG0WSF0nSfty90', {
        worders: 1,
        webAdmin: {
            port: process.env.PORT || 7777
        }
    }),
    PingController = require('./controller/pingController');

tg.router
    .when(new Telegram.TextCommand('/ping', 'pingCommand'), new PingController);
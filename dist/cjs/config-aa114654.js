'use strict';

const config = {
  apiHostsOptions: {
    local: 'http://localhost:8080',
    dev: 'https://apidev.paycargo.com',
    test: 'https://apitest.paycargo.com',
    prod: 'https://api.paycargo.com'
  },
  appHostsOptions: {
    local: 'http://localhost:3000',
    dev: 'https://appdev.paycargo.com',
    test: 'https://apptest.paycargo.com',
    prod: 'https://app.paycargo.com'
  },
  bluesnapURL: {
    local: 'https://sandbox.bluesnap.com/web-sdk/4/bluesnap.js',
    dev: 'https://sandbox.bluesnap.com/web-sdk/4/bluesnap.js',
    test: 'https://sandbox.bluesnap.com/web-sdk/4/bluesnap.js',
    prod: 'https://sandbox.bluesnap.com/web-sdk/4/bluesnap.js'
  }
};

exports.config = config;

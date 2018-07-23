'use strict';

// For tests

module.exports = {
  handshake1: {
    version: '2b',
    status: '1b',
    reserved: '1b',
    token: '36b'
  },
  handshake2: {
    version: '2b',
    status: '1b',
    reserved: '1b',
    token: '4b'
  },
  handshake3: {
    status: '1b',
    token: '4b'
  },
  handshake4: {
    version: '2b',
    status: '2b',
    reserved: '1b',
    token: '8b'
  },
  handshake5: {
    version: '2b',
    status: '1b',
    reserved: '1b',
    token: '16b',
    someOtherToken: '64b'
  },
};

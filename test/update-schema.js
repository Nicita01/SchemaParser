'use strict';

const schemas = require(__dirname + '/schemas');
const chSchemas = require(__dirname + '/changed-scemas');
const Parser = require(__dirname + '/..');


const parser = new Parser(schemas);

parser.updateSchema('handshake', chSchemas.handshake1, '1.0.0', 'patch');
console.log(parser.getVersions('handshake'));
console.log(parser.latest.get('handshake'));

parser.updateSchema('handshake', chSchemas.handshake2, '1.0.0', 'major');
console.log(parser.getVersions('handshake'));
console.log(parser.latest.get('handshake'));

parser.updateSchema('handshake', chSchemas.handshake3, '1.0.1', 'patch');
console.log(parser.getVersions('handshake'));
console.log(parser.latest.get('handshake'));

console.log(parser.schemas);

// Failed:

parser.updateSchema('handshake', chSchemas.handshake3, '1.0.1', 'major');

'use strict';

const Parser = require(__dirname + '/..');
const schemas = require(__dirname + '/schemas.js');

const parser = new Parser(schemas);

parser.deleteSchema('handshake');
console.log(parser.latest);
console.log(parser.schemas);

parser.use('parcel');
parser.updateSchema('parcel', {}, 'patch');
parser.deleteSchema('parcel', '1.0.0');
console.log(parser.latest);
console.log(parser.schemas);

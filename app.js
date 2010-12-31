var 
connect = require('connect'),
meryl = require('meryl'),
serverModule = require('./public/script/unified-module');

meryl.plug(connect.staticProvider({root: 'public'}));

meryl.run({port: 3000, hostname: 'localhost'});
console.log(serverModule.description());
console.log('listening...');
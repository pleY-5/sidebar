// const cluster = require('cluster');

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   const numCPUs = 0;
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', () => {
//     cluster.fork();
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   require('./index.js');
// }

const cors = require('cors')
const server = require("express")();
const port = 23456;

process.env.BASEDIR = process.cwd();

server.use("/api", require("./routes"));
server.use(cors())
server.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
});

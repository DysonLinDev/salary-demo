"use strict";

const Hapi = require("@hapi/hapi");
const HapiRouter = require("hapi-router");
const HapiMySQL = require("hapi-mysql2");
const HapiCORS = require("hapi-cors");

let server = {};

const init = async () => {
  server = Hapi.server({
    port: 3006,
    host: "localhost",
  });

  return server;
};

const addPlugins = async () => {
  await server.register({
    plugin: HapiCORS,
    options: {
      origins: ["http://localhost:3000"],
      headers: ["access-control-allow-origin", "content-type"],
    },
  });

  await server.register({
    plugin: HapiMySQL,
    options: {
      settings: {
        host: "remotemysql.com",
        user: "TL16cVrhPJ",
        password: "nwDUPKfRLv",
        database: "TL16cVrhPJ",
      },
      decorate: true,
    },
  });

  await server.register({
    plugin: HapiRouter,
    options: {
      routes: "routes/*.js", // uses glob to include files
    },
  });
};

const start = async () => {
  await init();
  await addPlugins();
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

start();

module.exports.init = init;
module.exports.addPlugins = addPlugins;

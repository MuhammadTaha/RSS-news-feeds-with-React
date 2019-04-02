var loopback = require("loopback");

loopback.createModel("Feed", {
  title: "string",
  link: "string",
  pubdate: "string",
  description: "string"
});

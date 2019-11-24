module.exports = [
  {
    path: "/",
    method: "GET",
    handler: async function(request, h) {
      return h.response("hello world").code(200);
    },
  },
];

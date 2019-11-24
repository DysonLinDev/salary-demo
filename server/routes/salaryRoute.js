const Boom = require("@hapi/boom");

const saveRecord = require("../controllers/salaryRecord/saveRecord");
const validator = require("../controllers/salaryRecord/validator");

module.exports = [
  {
    path: "/salaryRecord",
    method: "POST",
    handler: async function(request, h) {
      const { payload } = request;
      const pool = request.mysql.pool;
      const isPaid = await validator.isAlreadyPaid(pool, payload);

      if (isPaid) {
        throw Boom.badRequest("Salary was already Paid");
      }

      const { insertId } = await saveRecord(pool, payload);
      payload.insertId = insertId;

      return h.response(payload).code(200);
    },
  },
];

const salaryRecord = require("../../models/salaryRecord");

function saveRecord(pool, data) {
  try {
    const result = salaryRecord.write(pool, data);

    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = saveRecord;

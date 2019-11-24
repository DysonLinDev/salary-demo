const salaryRecord = require("../../models/salaryRecord");

function getDateInfo(dateUnixTime) {
  try {
    const date = new Date(+dateUnixTime);
    const year = date.getFullYear();
    const month = date.getMonth();
    return { year, month };
  } catch (error) {
    throw error;
  }
}

async function isAlreadyPaid(pool, data) {
  try {
    const { payDate } = data;
    const result = await salaryRecord.read(pool, data);
    let isPaid = false;

    if (result.length === 0) return isPaid;

    const payDateInfo = getDateInfo(payDate);

    result.forEach(payRecord => {
      const recordDate = getDateInfo(payRecord.PayDate);

      if (
        recordDate.year === payDateInfo.year &&
        recordDate.month === payDateInfo.month
      ) {
        isPaid = true;
      }
    });

    return isPaid;
  } catch (error) {
    throw error;
  }
}

module.exports.isAlreadyPaid = isAlreadyPaid;

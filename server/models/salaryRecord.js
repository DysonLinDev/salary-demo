async function write(pool, data) {
  try {
    const [result] = await pool.query(
      `insert into SalaryRecord
    (FirstName, LastName, AnnualSalary, SuperRate, GrossIncome, IncomeTax, NetIncome, Super, Pay, PayDate)
    values ('${data.firstName}', '${data.lastName}', ${data.salary}, ${data.superRate}, ${data.grossIncome}, ${data.incomeTax}, ${data.netIncome}, ${data.super}, ${data.pay}, ${data.payDate});
    `,
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function read(pool, data) {
  try {
    const { firstName, lastName } = data;

    const [result] = await pool.query(
      `select * from SalaryRecord where FirstName = '${firstName}' and LastName = '${lastName}'`,
    );

    return result;
  } catch (error) {
    throw error;
  }
}

module.exports.write = write;
module.exports.read = read;

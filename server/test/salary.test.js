"use strict";

const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { afterEach, beforeEach, describe, it } = (exports.lab = Lab.script());
const { init, addPlugins } = require("../server");

describe("POST /salaryRecord with mock data", () => {
  let server;

  beforeEach(async () => {
    server = await init();
    await addPlugins();
  });

  afterEach(async () => {
    await server.stop();
  });

  const mockData = {
    firstName: "ss",
    lastName: "Lin",
    salary: "180000",
    superRate: "9",
    grossIncome: "123",
    incomeTax: "22",
    netIncome: "223",
    super: "21",
    pay: "33",
    payDate: Date.now(),
  };

  let mockdataId = 0;

  it("responds with 200", async () => {
    const res = await server.inject({
      method: "post",
      url: "/salaryRecord",
      payload: mockData,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    expect(res.statusCode).to.equal(200);
    mockdataId = res.payload.insertId;
  });

  it("responds with 400 when user try to save same persion in the same pay period", async () => {
    const res = await server.inject({
      method: "post",
      url: "/salaryRecord",
      payload: mockData,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    expect(res.statusCode).to.equal(400);
  });

  // remove data frome database via mockdataId
});

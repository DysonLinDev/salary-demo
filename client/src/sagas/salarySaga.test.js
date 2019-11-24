import { getTaxableFee } from "./salarySaga";

test("taxable fee for 18200 should be Zero", () => {
  expect(getTaxableFee(18200, 0, 18200, 0)).toBe(0);
});

test("taxable fee for under 18188 should be Zero", () => {
  expect(getTaxableFee(18188, 0, 18200, 0)).toBe(0);
});

test("taxable fee for 60050 should be 922", () => {
  expect(getTaxableFee(60050, 3572, 37000, 0.325)).toBe(922);
});

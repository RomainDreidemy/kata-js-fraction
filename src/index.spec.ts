import { Fraction } from ".";

describe("Test of Fraction.add(fractionA: Fraction, fractionB: Fraction)", () => {
	it("should return the sum of two fractions when numerators = 0 and denominators = 1", function () {
		//Given
		const fractionA: Fraction = new Fraction(0, 1);
		const fractionB: Fraction = new Fraction(0, 1);

		//When
		const result: Fraction = Fraction.add(fractionA, fractionB)

		//Then
		const expected: Fraction = new Fraction(0, 1);

		// expect(result.equals(expected)).toEqual(true);
		expect(result).toEqual(expected);
	});

	it("should return the sum of two fractions when numerator = 1 and denominators = 1", () => {
		//Given
		const fractionA: Fraction = new Fraction(1, 1);
		const fractionB: Fraction = new Fraction(1, 1);

		//When
		const result: Fraction = Fraction.add(fractionA, fractionB)

		//Then
		const expected: Fraction = new Fraction(2, 1);

		// expect(result.equals(expected)).toEqual(true);
		expect(result).toEqual(expected);
	});

	it("should return 2/6 for '1/6 + 1/6'", () => {
		//Given
		const fractionA: Fraction = new Fraction(1, 6);
		const fractionB: Fraction = new Fraction(1, 6);

		//When
		const result: Fraction = Fraction.add(fractionA, fractionB)

		//Then
		const expected: Fraction = new Fraction(2, 6);

		// expect(result.equals(expected)).toEqual(true);
		expect(result).toEqual(expected);
	});

	it("should return 3/6 for '1/1 + 1/3'", () => {
		//Given
		const fractionA: Fraction = new Fraction(1, 1);
		const fractionB: Fraction = new Fraction(1, 3);

		//When
		const result: Fraction = Fraction.add(fractionA, fractionB)

		//Then
		const expected: Fraction = new Fraction(4, 3);

		// expect(result.equals(expected)).toEqual(true);
		expect(result).toEqual(expected);
	});

	it("should return 5/6 for '1/2 + 1/3'", () => {
		//Given
		const fractionA: Fraction = new Fraction(1, 2);
		const fractionB: Fraction = new Fraction(1, 3);

		//When
		const result: Fraction = Fraction.add(fractionA, fractionB)

		//Then
		const expected: Fraction = new Fraction(5, 6);

		// expect(result.equals(expected)).toEqual(true);
		expect(result).toEqual(expected);
	});
})

/*
Write a program that implements the addition of fractions. Fractions must be reduced. An implementation of the greatest common divisor (GCD) is provided:

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
*/

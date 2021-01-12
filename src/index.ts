export class Fraction {
	constructor(
		private numerator: number,
		private denominator: number) { }

	static add(fractionA: Fraction, fractionB: Fraction): Fraction {
		// TODO: Réduire les fractions
		return Fraction.addWithSameDenominator(
			Fraction.multiplyNumeratorAndDenominator(fractionA, fractionB.denominator),
			Fraction.multiplyNumeratorAndDenominator(fractionB, fractionA.denominator)
		);
	}

	static addWithSameDenominator(fractionA: Fraction, fractionB: Fraction): Fraction {
		return new Fraction(fractionA.numerator + fractionB.numerator, fractionA.denominator);
	}

	static multiplyNumeratorAndDenominator(fraction: Fraction, n: number): Fraction {
		return new Fraction(fraction.numerator * n, fraction.denominator * n);
	}
}
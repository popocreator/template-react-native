import {useCallback} from 'react';
import BezierEasing from 'bezier-easing';

export default function _useBezierEasing() {
  const bezierEasing = useCallback(
    (input: number, x1: number, y1: number, x2: number, y2: number) => {
      if (input >= 0 && input <= 1) {
        const easing = BezierEasing(x1, y1, x2, y2);
        return easing(input);
      } else {
        console.log('ERROR :: The input value must be between 0.0 and 1.0');
        return 0;
      }
    },
    [],
  );

  const easeInBounce = (input: number): number => 1 - easeInBounce(1 - input);
  const easeOutBounce = (input: number): number => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (input < 1 / d1) {
      return n1 * input * input;
    } else if (input < 2 / d1) {
      return n1 * (input -= 1.5 / d1) * input + 0.75;
    } else if (input < 2.5 / d1) {
      return n1 * (input -= 2.25 / d1) * input + 0.9375;
    } else {
      return n1 * (input -= 2.625 / d1) * input + 0.984375;
    }
  };
  const easeInOutBounce = (input: number): number =>
    input < 0.5
      ? (1 - easeOutBounce(1 - 2 * input)) / 2
      : (1 + easeOutBounce(2 * input - 1)) / 2;

  return {
    // Sine
    easeInSine: (input: number) => bezierEasing(input, 0.12, 0, 0.39, 0),
    easeOutSine: (input: number) => bezierEasing(input, 0.61, 1, 0.88, 1),
    easeInOutSine: (input: number) => bezierEasing(input, 0.37, 0, 0.63, 1),
    // Quad
    easeInQuad: (input: number) => bezierEasing(input, 0.11, 0, 0.5, 0),
    easeOutQuad: (input: number) => bezierEasing(input, 0.5, 1, 0.89, 1),
    easeInOutQuad: (input: number) => bezierEasing(input, 0.45, 0, 0.55, 1),
    // Cubic
    easeInCubic: (input: number) => bezierEasing(input, 0.32, 0, 0.67, 0),
    easeOutCubic: (input: number) => bezierEasing(input, 0.33, 1, 0.68, 1),
    easeInOutCubic: (input: number) => bezierEasing(input, 0.65, 0, 0.35, 1),
    // Quart
    easeInQuart: (input: number) => bezierEasing(input, 0.5, 0, 0.75, 0),
    easeOutQuart: (input: number) => bezierEasing(input, 0.25, 1, 0.5, 1),
    easeInOutQuart: (input: number) => bezierEasing(input, 0.76, 0, 0.24, 1),
    // Quint
    easeInQuint: (input: number) => bezierEasing(input, 0.76, 0, 0.24, 1),
    easeOutQuint: (input: number) => bezierEasing(input, 0.22, 1, 0.36, 1),
    easeInOutQuint: (input: number) => bezierEasing(input, 0.83, 0, 0.17, 1),
    // Expo
    easeInExpo: (input: number) => bezierEasing(input, 0.7, 0, 0.84, 0),
    easeOutExpo: (input: number) => bezierEasing(input, 0.16, 1, 0.3, 1),
    easeInOutExpo: (input: number) => bezierEasing(input, 0.87, 0, 0.13, 1),
    // Circ
    easeInCirc: (input: number) => bezierEasing(input, 0.55, 0, 1, 0.45),
    easeOutCirc: (input: number) => bezierEasing(input, 0, 0.55, 0.45, 1),
    easeInOutCirc: (input: number) => bezierEasing(input, 0.85, 0, 0.15, 1),
    // Back
    easeInBack: (input: number) => bezierEasing(input, 0.36, 0, 0.66, -0.56),
    easeOutBack: (input: number) => bezierEasing(input, 0.34, 1.56, 0.64, 1),
    easeInOutBack: (input: number) =>
      bezierEasing(input, 0.68, -0.6, 0.32, 1.6),
    // Elastic
    easeInElastic: (input: number) => {
      const c4 = (2 * Math.PI) / 3;
      return input === 0
        ? 0
        : input === 1
        ? 1
        : -Math.pow(2, 10 * input - 10) * Math.sin((input * 10 - 10.75) * c4);
    },
    easeOutElastic: (input: number) => {
      const c4 = (2 * Math.PI) / 3;
      return input === 0
        ? 0
        : input === 1
        ? 1
        : Math.pow(2, -10 * input) * Math.sin((input * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: (input: number) => {
      const c5 = (2 * Math.PI) / 4.5;
      return input === 0
        ? 0
        : input === 1
        ? 1
        : input < 0.5
        ? -(
            Math.pow(2, 20 * input - 10) * Math.sin((20 * input - 11.125) * c5)
          ) / 2
        : (Math.pow(2, -20 * input + 10) *
            Math.sin((20 * input - 11.125) * c5)) /
            2 +
          1;
    },
    // Bounce
    easeInBounce: (input: number) => easeInBounce(input),
    easeOutBounce: (input: number) => easeOutBounce(input),
    easeInOutBounce: (input: number) => easeInOutBounce(input),
  };
}

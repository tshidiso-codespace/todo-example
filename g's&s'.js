/**
 * @callback Modify
 * @param {number} [amount] - The amount to modify the value with
 */

/**
 * @callback EmptyFn
 */

/**
 * @typedef {object} Counter - An object that keeps  internal state and allows you to increase, decrease
 * and log the value. note there is no way to access the value inside
 * @prop {Modify} increase
 * @prop {Modify} decrease
 * @prop {EmptyFn} display
 * @prop {string} label
 */

/**
 * @param {string} label - the actual value being measured
 * @returns {Counter}
 */
const createCounter = (label) => {
  let value = 1;
  let innerLabel = label;

  const increase = (amount) => {
    value += amount || 1;
  };
  const decrease = (amount) => {
    value -= amount || 1;
  };

  // eslint-disable-next-line
  const display = () => console.log(`${value} ${innerLabel}`);

  return {
    display,
    increase,
    decrease,

    get label() {
      return innerLabel;
    },
    set label(newLabel) {
      innerLabel = `${newLabel} is the label boiiiii`;
    },
  };
};

const temperature = createCounter("Celcius");
//console.log(temperature.label);
//temperature.label = "F";
console.log(temperature.label);

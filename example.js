let value = 3;

// const increase = () => {
//     value += 1
// }

// const counter = {
//     /**
//      * The actual value
//      */
//     value: 1,

//     /**
//      * Increase counter value by 1
//      */
//     increase () {
//         counter.value+= 1
//     },
//     /**
//      * Decrease counter value by 1
//      */
//     decrease () {
//         counter.value -= 1
//     },

//     /**
//      * Logs the counter value to the console
//      */
//     display() {
//         console.log(counter.value)
//     }
// }

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

  const increase = (amount) => {
    value += amount || 1;
  };
  const decrease = (amount) => {
    value -= amount || 1;
  };

  // eslint-disable-next-line
  const display = () => console.log(`${value} ${label}`);

  return {
    display,
    increase,
    decrease,
    label,
  };
};

const temperature = createCounter("Celcius");
console.log(temperature.label);
temperature.label = "F";
console.log(temperature.label);

counter.increase();
counter.decrease(10);
counter.display();

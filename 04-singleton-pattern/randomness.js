/**
 * Randomness utilities
 * @class Randomness
 */
const Randomness = (function Randomness() {
  /**
   * Unique instance
   * @type {object}
   */
  let instance;

  /**
   * init instance
   * @return {object} public api
   */
  function init() {
    /**
     * returns a random number
     * @return {number}
     * @memberof Randomness
     */
    function getRandom() {
      return Math.random();
    }

    /**
     * returns a random float number between min and max
     * @param  {number} min
     * @param  {number} max
     * @return {number}
     * @memberof Randomness
     */
    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }

    /**
     * returns a random int number between min and max
     * @param  {number} min
     * @param  {number} max
     * @return {number}
     * @memberof Randomness
     */
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * returns a random int number between min + 1 and max
     * @param  {number} min
     * @param  {number} max
     * @return {number}
     * @memberof Randomness
     */
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
      getRandom,
      getRandomFloat,
      getRandomInt,
      getRandomInRange,
    };
  }

  return {
    /**
     * Get the Singleton instance if one exists
     * or create one if it doesn't
     * @return {object}
     */
    getInstance() {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
}());

const random1 = Randomness.getInstance();
const random2 = Randomness.getInstance();

console.log(random1.getRandom === random2.getRandom);

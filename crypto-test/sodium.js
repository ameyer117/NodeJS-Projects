const sodium = require('libsodium-wrappers');

class Sodium {
    /**
     * @param {number} upperBound - Max value (exclusive)
     * Returns a uniformly random secure value from 0 - upperBound
     */
    static async getRandomNumber(upperBound) {
        await sodium.ready;
        return sodium.randombytes_uniform(upperBound)
    }
}

module.exports = Sodium
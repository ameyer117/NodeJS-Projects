const _sodium = require('libsodium-wrappers');

class Sodium {
    /**
     * @param {number} upperBound - Max value (exclusive)
     * Returns a uniformly random secure value from 0 - upperBound
     */
    static async getRandomNumber(upperBound) {
        await _sodium.ready;
        console.log(_sodium.crypto_generichash_BYTES_MAX)
        return _sodium.randombytes_uniform(0x7fffffff)
    }
}

module.exports = Sodium
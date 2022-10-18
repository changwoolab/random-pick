"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Options {
}
function randomPick(list, { cnt = 1, weights = undefined } = {}) {
    if (list.length < 1)
        throw new Error('no elements to pick');
    if (cnt > list.length)
        throw new Error('cnt is larger than list length');
    if (weights && list.length !== weights.length)
        throw new Error('list length and weights length must be same');
    const result = [];
    while (cnt--) {
        let picked;
        if (weights) {
            const probability = Math.random();
            let weightedProbability = 0;
            for (let i = 0; i < weights.length; i++)
                weightedProbability += probability * weights[i];
            for (picked = 0; picked < weights.length; picked++) {
                weightedProbability -= weights[picked];
                if (weightedProbability < 0)
                    break;
            }
            weights.splice(picked, 1);
        }
        else {
            picked = Math.floor(Math.random() * list.length);
        }
        result.push(list.splice(picked, 1)[0]);
    }
    return result;
}
exports.default = randomPick;
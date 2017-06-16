import {describe, it} from 'mocha';
import chai from 'chai';
import env from '../../env';
import Weapon from '../../../src/objects/weapon';

const assert = chai.assert;

env.gameReady.then((game) => {
    describe('Weapon', () => {
        let weapon;

        describe('constructor()', () => {
            it('generates an object', () => {
                weapon = new Weapon(game);

                assert.isObject(weapon);
            });
        });
    });
});
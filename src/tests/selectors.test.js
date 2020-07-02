import { expect } from 'chai';
import { getCompletedTodos } from '../todos/selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [{
            text: 'say hello',
            isCompleted: true,
        }, {
            text: 'say goodbye',
            isCompleted: false,
        }, {
            text: 'Climb mount everest',
            isCompleted: false,
        }];
        const expected = [{
            text: 'say hello',
            isCompleted: true,
        }];
        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});
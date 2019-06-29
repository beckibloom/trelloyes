import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';

describe('List component', () => {
    it('renders without crashing', () => {
        const section = document.createElement('section');
        const cardArray = [
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
            { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
            { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
            { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
            { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
            { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum'}
        ];
        ReactDOM.render(
        <List key={1} header='First list' cards={cardArray}/>, section);
        ReactDOM.unmountComponentAtNode(section);
    });
    it('renders the UI as expected', () => {
        const cardArray = [
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
            { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
            { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
            { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
            { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
            { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum'}
        ];
        const tree = renderer
            .create(<List key={1} header='First list' cards={cardArray} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
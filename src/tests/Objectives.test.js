import React from 'react';
import { render } from '@testing-library/react';
import Objectives from '../components/Objectives.js';
import renderer from 'react-test-renderer';


test('Objective Element test', () => {
    const component = renderer.create(
        <Objectives></Objectives>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Objectives Element to be in the document', () => {
    const { container } = render(<Objectives></Objectives>);
    expect(container.firstChild.childNodes.length).toBe(4);
})
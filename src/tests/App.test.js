import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App.js';

test('App Snapshot test', () => {
    const render = renderer.create(<App></App>)
    const element = render.toJSON();
    expect(element).toMatchSnapshot();
})
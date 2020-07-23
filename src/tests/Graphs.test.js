import React from 'react';
import { render } from '@testing-library/react';
import Graphs from '../components/componentViews/Graphs.js';

test('Graphs in the document test', () => {
    const { container } = render(<Graphs></Graphs>);
    expect(container.firstChild.classList.contains('graphs-main-container')).toBe(true);
})

test('Get Activity Test', () => {
    const { getActivity } = require('../components/componentViews/Graphs.js')
    expect(getActivity());
})

test('Get Activity Element Test', () => {
    const { getActivityView } = require('../components/componentViews/Graphs.js');
    let obj = {
        'id': 'id',
        'entityName': 'Clary',
        'objective': { 'title': 'title', 'createdDate': new Date() }
    }
    const element = getActivityView(obj);
    expect(element.props.className).toBe('individual-activity-logs');
})

test('Get Activity Element Test', () => {
    const { getChartsData } = require('../components/componentViews/Graphs.js');
    expect(getChartsData());

})
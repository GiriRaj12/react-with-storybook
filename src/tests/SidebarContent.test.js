import React from 'react';
import { render } from '@testing-library/react';
import SidebarContent from '../components/SidebarContent.js';
import renderer from 'react-test-renderer';


test('Sidebar content test', () => {
    const component = renderer.create(
        <SidebarContent toRe="/dashboard" content="Something" renderIcon="S"></SidebarContent>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test("Side bar content name to be in the document", () => {
    const { getByText } = render(<SidebarContent toRe="/dashboard" content="Something" renderIcon="S" ></SidebarContent>);
    let element = getByText(/Something/i);
    expect(element.classList.contains('sidebar-content-name')).toBe(true);
});

test("Side bar content to be in the document", () => {
    const { container } = render(<SidebarContent toRe="/dashboard" content="Something" renderIcon="S" ></SidebarContent>);
    expect(container.firstChild.classList.contains('sidebar-content')).toBe(true);
});

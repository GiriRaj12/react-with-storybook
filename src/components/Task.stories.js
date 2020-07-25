import React from 'react';
import { action } from '@storybook/addon-actions';

import Dashboard from './Dashboard';

export default {
    component: Dashboard,
    title: 'Task',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: '1',
    title: 'Dashboard',
    state: 'TASK_INBOX',
    updatedAt: new Date(),
};

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;

export const Archived = () => (
    <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />);
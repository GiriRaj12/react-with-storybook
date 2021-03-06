import React, { Suspense } from 'react';
import '../componentStyles/dashboard.scss';

function Dashboard() {
    const Objectives = React.lazy(() => import('./componentViews/Objectives.js'));

    const Graphs = React.lazy(() => import('./componentViews/Graphs'));

    return (<div className="container-background">
        <div className="user-details">
            <div className="name-conatiner">
                G
            </div>
            <span className="user-name-details">Giriraj</span>
        </div>
        <div className="objective-container">
            <Suspense fallback={"Loading..."}>
                <Objectives></Objectives>
            </Suspense>
        </div>
        <div className="external-graphs-container">
            <Suspense fallback={"Loading..."}>
                <Graphs></Graphs>
            </Suspense>
        </div>

    </div>)
}
export default Dashboard;
import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function Graphs(props) {
    const [activityLog, setActivitiyLog] = useState([]);

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        getActivity(setActivitiyLog);
        getChartsData(setChartOptions);
    }, []);

    return (<div className="graphs-main-container">
        <div className="graph-viewer">
            <div className="container-titles">
                Score Graph
            </div>
            <div className="chart-holder">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        </div>
        <div className="activity-log-viewer">
            <div className="container-titles">
                Activity Log
            </div>
            <div className="activity-logs-holder">
                {activityLog.map(e => getActivityView(e))}
            </div>
        </div>
    </div>)
}

function getActivityView(e) {

    return <div className="individual-activity-logs" key={e.id}>
        <div className="activity-log-name-holder">
            {String(e.entityName).substring(0, 1)}
        </div>
        <div className="activity-log-details-holder">
            <p className="activity-name">{e.entityName}</p>
            <p className="activity-details">{e.objective.title}</p>
            <p className="activity-date">{new Date(e.objective.createdDate).toDateString()}</p>
        </div>
    </div>
}

function getActivity(callback) {
    fetch("http://localhost:8080/activityLog")
        .then(res => res.json())
        .then(res => {
            callback(res);
        })
}

function getChartsData(callback) {
    fetch("http://localhost:8080/graphData")
        .then(res => res.json())
        .then(res => {
            let options = {
                xAxis: {
                    categories: res.message.quarter
                },
                title: {
                    text: 'OKR Chart'
                },
                series: [{
                    name: 'Objectives',
                    type: 'line',
                    data: res.message.objectiveCount,
                }, {
                    name: 'Okr Scores',
                    type: 'line',
                    data: res.message.okrScore,
                }]
            }
            callback(options);
        })
}
export default Graphs;
export { getChartsData, getActivityView, getActivity }
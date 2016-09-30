import {default as React, Component} from 'react';
import './vacancy-table.scss';

export default class VacancyTable extends React.Component{
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <figure className={'vacancy'}>
                <figcaption>
                    <h2>Foo table</h2>
                    <button className="btn btn-danger">
                        <i className="glyphicon glyphicon-remove"></i>
                    </button>
                </figcaption>
                <div className="participants-wrapper">
                    <i className="participant active glyphicon glyphicon-user"></i>
                    <i className="participant glyphicon glyphicon-user"></i>
                </div>
            </figure>);
    }
}

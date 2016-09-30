import {default as React, Component} from 'react';
import VacancyTable from '../vacancy-table';
import './vacancies.scss';

export default class Vacancies extends React.Component{
    constructor (props) {
        super(props);
    }
    render () {
        return(
            <section className="vacancies container">
                <VacancyTable />
            </section>);
    }
}

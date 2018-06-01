import React, { Component } from 'react';
import "react-table/react-table.css";
import moment from 'moment'


class ParseDate extends Component{
    
    constructor(props) {
        super(props);
        this.state = { dateValue : props.dateValue}
    }
    
    parseDate = (value) => {
        let date = moment(value);
        let dateComponent = date.utc().format('DD/MM/YYYY');
        
        return dateComponent;
    };
    
    render(){
        return <div className="columnsStyles">{this.parseDate(this.props.row) }</div>
    }
    
}

export default ParseDate;

import React, { Component } from 'react';
import "react-table/react-table.css";
import ReactTable from 'react-table';
import ShipmentService from  '../../../service/shipmentService';
import { pipeline } from  '../../../variables/variables';

class ShipmentList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            shipments: undefined
        }
    }
    
    componentDidMount() {
        let self = this;
        ShipmentService.getAll()
            .then(data => {
            self.setState({shipments:data.shipments});
        }).catch((error => {
            console.log(error)
        }));
    }

    
    render() {
        const { shipments } = this.state;
        
        return (
            <div className="orderTable">
                <ReactTable
                    data={shipments}
                    noDataText="No hay Informacion para mostrar"
                    columns={pipeline}
                    defaultPageSize={10}
                    showPaginationTop={false}
                    showPaginationBottom={true}
                    className="-striped -highlight"/>
            </div>
        );
    }
}

export default ShipmentList;

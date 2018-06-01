import React, { Component } from 'react';
import ShipmentListCmp from  './../shipment/shipmentList/shipmentListCmp'
class ShipmentCmp extends Component{

    
    render() {
        return (
            <div className="main-panel">
                <ShipmentListCmp/>
            </div>
        );
    }
}

export default ShipmentCmp;

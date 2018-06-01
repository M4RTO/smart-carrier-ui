import React, { Component } from 'react';
import "react-table/react-table.css";


class Status extends Component{
    
    constructor(props) {
        super(props);
        this.state = { row : props.row}
    
    }
    
    
    render() {
        const { row, style } = this.props;
        return (
            <div className={style ? style : "columnsStyles"}>
            <span   style={{
                color: row.value === 'draft' ? '#BDBDBD' :
                    row.value === 'processed' ? '#ffbf00' :
                        row.value === 'in_transit' ? '#DF7401' :
                            row.value === 'delivered' ? '#64FE2E' :
                                row.value === 'failed' ? '#FE2E2E' :
                                    row.value === 'cancelled' ? '#FE2E2E' :
                                        row.value === 'not_delivered' ? '#FE2E2E' : '#FE2E2E'
            }}>
              &#x25cf;
            </span> {row.value === 'draft' ? 'Borrador' :
                row.value === 'processed' ? `En Proceso` :
                    row.value === 'in_transit' ? `En Camino` :
                        row.value === 'delivered' ? 'Entregado' :
                            row.value === 'failed' ? 'Error de creación' :
                                row.value === 'cancelled' ? 'Cancelado' :
                                    row.value === 'not_delivered' ? 'No entregado' : 'Error de creación' }
          </div>
        )
    }
    
}

export default Status;

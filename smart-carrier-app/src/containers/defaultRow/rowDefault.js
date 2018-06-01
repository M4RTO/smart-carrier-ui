import React, { Component } from 'react';
class RowDefault extends Component{
    
    render() {
        const { row, id } = this.props;
    
        if(id === "carrier") {
            return ( <div style={{textTransform:  'capitalize'}}>{row.value}</div>)
        }else if (id === "service") {
            return ( <div>{row.value === 'standard' ? 'Estándar' : row.value === 'priority' ? 'Prioritario' : ''}</div>)
        }else if(id === "mode"){
            return (<div>{row.value === 'store' ? 'A sucursal' : row.value === 'address' ? `A domicilio` : ''}</div>)
        }else if(id === "cost"){
            return (<div><span>{ row.value === undefined ? '-' : " $ "  }</span>{row.value}</div>)
        }else {
            return ( <div>{row.value === undefined ? '-' : row.value }</div>)
        
        }
    }
}

export default RowDefault;

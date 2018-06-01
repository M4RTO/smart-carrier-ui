import { Redirect } from 'react-router-dom'
import React from 'react'
import ShipmentCmp from '../components/shipment/shipmentCmp'



export const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Redirect to="/shipments"/>,
    },
    {
        path: '/shipments',
        exact: true,
        name: "Shipment",
        main: ShipmentCmp
    }
];
import RowDefault from '../containers/defaultRow/rowDefault';
import ParseDate from '../containers/parseDateRow/parseDate';
import StatusRow from '../containers/statusRow/statusRow';


import React from 'react';




export const pipeline = [
    {
        Header: "ID",
        accessor: "id",
        id: "id",
        Cell: row => (
            <RowDefault row={row}/>
        ),
    },
    {
        Header: "Nº de orden",
        accessor: "reference_id",
        id: "referenceId",
        Cell: row => (
            <RowDefault row={row}/>
        ),
    },
    {
        Header: "Fecha alta",
        id: "creationDate",
        accessor: "creation_date",
        Cell: row => (
            <ParseDate row={row.value}/>
        ),
    },
    {
        Header: "Nombre y apellido",
        id: "contact",
        width: 100,
        accessor: d => d.contact.firstname + " " + d.contact.lastname,
        Cell: row => (
            <RowDefault row={row}/>)
    },
    {
        Header: "Email",
        id: "email",
        accessor: d => d.contact.email,
        width: 200,
        Cell: row => (
            <RowDefault row={row}/>),
    },
    {
        Header: "Localidad y provincia",
        id: "locality",
        width: 150,
        accessor: d => d.to.city + " " + d.to.province,
        Cell: row => ( <RowDefault row={row} />),
        
    },
    {
        Header: "Op. logístico",
        accessor: d => d.delivery.carrier,
        id: "carrier",
        Cell: row => ( <RowDefault row={row} id="carrier" />),
    },
    {
        Header: "Tipo",
        id: "service",
        accessor: d => d.delivery.service,
        Cell: row => ( <RowDefault row={row} id="service" />),
    },
    {
        Header: "Modalidad",
        id: "mode",
        accessor: d => d.delivery.mode,
        Cell: row => ( <RowDefault row={row} id="mode" />),
    },
    {
        Header: "Costo",
        accessor: "cost",
        Cell: row => (
            <RowDefault row={row} id="cost"/>)
    },
    {
        Header: "Estado",
        accessor: "status",
        id: "status",
        Cell: row => (<StatusRow row={row} />),
    },
    {
        Header: "Numero de seguimiento",
        id: "tracking_number",
        accessor: d => d.label === undefined ? '-' : d.label.tracking_number,
        Cell: row => (
            <RowDefault row={row}/>
        )
    },
];




    
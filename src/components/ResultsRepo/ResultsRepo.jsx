import * as React from 'react';

import {
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,

} from '@material-ui/core';

const ResultsRepo = (props) => {

    const {
        items,
    } = props;

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Url</TableCell>
                        <TableCell>StarGazers</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => {
                        return (
                            <TableRow key={item.stargazers_count}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell><a rel="noopener noreferrer" target="_blank"  href={item.html_url}>{item.html_url}</a></TableCell>
                                <TableCell>{item.stargazers_count}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default ResultsRepo;
import * as React from 'react';

import {
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,

} from '@material-ui/core';

// const styles = require('./ResultsUsers.scss');
import styles from './ResultsUsers.module.scss';

const ResultsUsers = (props) => {

    const {
        items,
    } = props;


    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Login</TableCell>
                        <TableCell>Gravatar</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell>Repo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => {
                        return (
                            <TableRow key={item.login}>
                                <TableCell>{item.login}</TableCell>
                                <TableCell className={styles.avatar}><img className={styles.avatar} src={item.avatar_url} alt={item.login} /></TableCell>
                                <TableCell>{item.score}</TableCell>
                                <TableCell><a rel="noopener noreferrer" target="_blank" href={item.html_url}>{item.html_url}</a></TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default ResultsUsers;
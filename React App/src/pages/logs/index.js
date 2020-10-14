import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ChatHttpServer from '../../utils/ChatHttpServer';
import ObjectIdToTimeStamp from 'objectid-to-timestamp';
import * as moment from 'moment';
import { Link } from 'react-router-dom';


function LogUser(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const result = await ChatHttpServer.logUsers()
        setUsers(result.users)
    }



    return (
        <>
            <div className="container-container-fluid">
                <header className="app-header">
                    <nav className="navbar navbar-expand-md">
                        <h4><Link to={`/users`}>Home</Link></h4>
                    </nav>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to="/logs" >Logs</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Logout</a>
                        </li>
                    </ul>
                </header>
                <main role="main" className="container content" >
                    <div className="col-md-10 m-auto">
                        {
                            <Table variant="dark" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#UserId</th>
                                        <th>Datetime</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users && users.map(user => <tr
                                        className="cursor-pointer">
                                        <td><a >{user.userid}</a></td>
                                        <td>{moment(ObjectIdToTimeStamp(user._id)).format('DD/MM/YYYY - hh:mm:ss a')}</td>
                                        <td>{user.username}</td>
                                    </tr>
                                    )}
                                </tbody>
                            </Table>
                        }
                    </div>
                </main>
            </div>
        </>
    )
}


export default LogUser;

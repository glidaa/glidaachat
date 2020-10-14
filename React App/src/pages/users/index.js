import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { userList } from './data';
import ChatHttpServer from '../../utils/ChatHttpServer';
import './Users.css';
import { Link } from 'react-router-dom';

function Users(props) {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        username: '', email: '', phone: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setUsers(userList)
    }, []);

    useEffect(() => {
        const userid = props.match.params.userid;
        if (userid) {
            setUserId(userid);

            const user = (users.find(user => user.userid == userid))
            setTimeout((user) => {
                addUser(user)
            }, 200, user);
        }
        return () => {
            setUserId(null)
        }
    }, [props.match.params])

    const addUser = (data) => {
        ChatHttpServer.addUser(data)
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleAddUser = () => {
        const _users = [...users];

        setUsers([{
            ...data,
            userid: Math.floor(Math.random() * 1000000)
        }, ..._users])
        handleClose()
    }

    const handleUserNavigate = (user) => {
        props.history.push({
            pathname: `/users/${user.userid}`,
            user: user
        })
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
                    {
                        !userId && <div className="col-md-10 m-auto text-right">
                            <Button variant="primary mt-5"
                                onClick={handleShow}
                            >Add User</Button>
                        </div>
                    }
                    <div className="col-md-10 m-auto mt-5">
                        {
                            !userId && <Table variant="dark" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#Id</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users && users.map(user => <tr
                                        key={user.id}
                                        className="cursor-pointer">
                                        <td><a className="btn btn-info stretched-link" onClick={() => handleUserNavigate(user)}>{user.userid}</a></td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                    )}
                                </tbody>
                            </Table>
                        }

                        {
                            userId && <div>
                                <h3>User added to the record</h3>
                            </div>
                        }
                    </div>
                    {/* Modal Section */}
                    <Modal
                        show={show}
                        onHide={handleClose}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add User</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control name="username" onChange={handleChange} type="text" placeholder="Username" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control name="phone" onChange={handleChange} type="phone" placeholder="Enter phone" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={handleClose} variant="secondary">Close</Button>
                            <Button onClick={handleAddUser} variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </main>
            </div>
        </>
    )
}


export default Users;

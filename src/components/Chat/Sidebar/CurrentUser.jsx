import React from 'react';
import { Dropdown } from 'react-bootstrap';
import LogoutButton from './LogoutButton';

function CurrentUser() {
    const username = localStorage.getItem('username');
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle
                    variant="success"
                    className="rounded p-2">
                    {username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item><LogoutButton/></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default CurrentUser;
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faList } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/isAdmin`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div className="sidebar p-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {/* {isAdmin ? */}
                <div>
                    <div>
                        <li>
                            <Link to="/addBlogs" className="text-white">
                                <FontAwesomeIcon icon={faList} /> <span className="font-bold">Add Blogs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageBlogs" className="text-white">
                                <FontAwesomeIcon icon={faCog} /> <span className="font-bold">Manage Blogs</span>
                            </Link>
                        </li>
                    </div>
                </div> 
                <div>
                    <div>
                        <li>
                            <Link to="/" className="text-white">
                                <FontAwesomeIcon icon={faList} /> <span className="font-bold">Return to homepage</span>
                            </Link>
                        </li>
                    </div>
                </div>
                {/* </div>} */}
            </ul>
        </div>
    );
};

export default Sidebar;
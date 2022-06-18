import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/welcome', {
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                            to="/primera-generacion"
                        >
                            Primera
                        </NavLink>


                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                            to="/segunda-generacion"
                        >
                            Segunda
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                            to="/tercera-generacion"
                        >
                            Tercera
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                            to="/cuarta-generacion"
                        >
                            Cuarta
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                            to="/quinta-generacion"
                        >
                            Quinta
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                            to="/sexta-generacion"
                        >
                            Sexta
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                            to="/septima-generacion"
                        >
                            Septima
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                            to="/octava-generacion"
                        >
                            Octava
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                            to="/buscar"
                        >
                            Search
                        </NavLink>
                    </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-info'>
                            Joansaro
                        </span>
                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        // exact
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
            </div>

        </nav>
    )
}
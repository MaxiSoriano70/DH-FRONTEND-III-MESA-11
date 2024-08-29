import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {routes} from "../utils/routes";

const Navbar = () => {
  return (
    <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
      <ul>
        <li><Link to={routes.home}>Home</Link></li>
        <li><Link to={routes.contacto}>Contacto</Link></li>
        <li><Link to={routes.notFound}>Components</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
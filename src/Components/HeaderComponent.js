import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light className="bg-light" expand="md">
        <NavbarBrand to="/">algoVisualizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink to="/home" className="nav-link">Time Comparsion Algos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/sorting-visualizer" className="nav-link">Sorting Algo Visualizer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pathfinding-visualizer" className="nav-link">Dijkstra Algo Visualizer</NavLink>
            </NavItem>
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Documentation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Sorting Algo Visualizer
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Djikstra Algo Visualizer
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Time Comparision Algos
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

import logoAMEEC from '../../assets/ameec_logo.png';

import './Navbar.css'

function NavBar() {
  
    return (
      <>
      <Navbar className="navbar-container" maxWidth="100%">
      <NavbarBrand className="navbar-brand" >
        <img src={logoAMEEC} alt="AMEEC Logo" className="logo-img" />
      </NavbarBrand>

      <NavbarContent className="navbar-content-center" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Proyecto
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Cáñamo Conecta
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Naayeri
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="navbar-content-end" justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Donar
          </Button>
        </NavbarItem>
      </NavbarContent>

      </Navbar>
      </>
    )
}
  
export default NavBar
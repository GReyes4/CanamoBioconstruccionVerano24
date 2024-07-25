import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Link as NextLink} from "@nextui-org/react";
import { useNavigate, Link } from "react-router-dom";
import logoAMEEC from '../../assets/ameec_logo.png';

import './Navbar.css'

function NavBar() {
  const navigate = useNavigate();
  
    return (
      <>
      <div className="navbar-wrapper">
        <Navbar className="navbar-container" >
        <NavbarBrand className="navbar-brand">
          <img src={logoAMEEC} alt="AMEEC Logo" className="logo-img" onClick={() => navigate("/")}/>
        </NavbarBrand>

        <NavbarContent className="navbar-content-center gap-12" justify="center">
          <NavbarItem>
            <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/nosotros">
              Nosotros
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/proyecto">
              Proyecto
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/canamo">
              Cáñamo Conecta
            </NextLink>
          </NavbarItem>
          <NavbarItem>
            <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/naayeri">
              Naayeri
            </NextLink>
          </NavbarItem>


          <NavbarItem>
            <Dropdown>
                <DropdownTrigger>
                  <NextLink className="navbar-link text-lg" color="foreground">
                    Más ▾
                  </NextLink>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>
                    <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/alianzas">
                      Alianzas
                    </NextLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/galeria">
                      Galería de fotos
                    </NextLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/donaciones">
                      Presupuesto/Donaciones
                    </NextLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/preguntas">
                      Preguntas frecuentes
                    </NextLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </NavbarItem>

          

        </NavbarContent>

        <NavbarContent className="navbar-content-end" justify="end">
          <NavbarItem>
            <button className="donar-button" onClick={() => navigate("/donaciones")}>
              Donar
            </button>
          </NavbarItem>
        </NavbarContent>

        </Navbar>
      </div>
      </>
    )
}
  
export default NavBar
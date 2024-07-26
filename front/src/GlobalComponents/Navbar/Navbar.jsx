import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Link as NextLink, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { useNavigate, Link } from "react-router-dom";
import logoAMEEC from '../../assets/ameec_logo.png';
import logoAMEECMobile from '../../assets/AmeecLogoCircular.png';

import './Navbar.css'

function NavBar() {
  const navigate = useNavigate();
  
    return (
      <>
      <div className="navbar-wrapper">
        <Navbar className="navbar-container" isBordered>
        <NavbarBrand className="navbar-brand">
          <img src={logoAMEEC} alt="AMEEC Logo" className="logo-img desktop-logo" onClick={() => navigate("/")} />
          <img src={logoAMEECMobile} alt="AMEEC Logo" className="logo-img mobile-logo" onClick={() => navigate("/")} />
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
                    <button className="dropdown-button" onClick={() => navigate("/alianzas")}>
                      <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/alianzas">
                        Alianzas
                      </NextLink>
                    </button>
                  </DropdownItem>
                  <DropdownItem>
                    <button className="dropdown-button" onClick={() => navigate("/galeria")}>
                      <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/galeria">
                        Galería de fotos
                      </NextLink>
                    </button>
                  </DropdownItem>
                  <DropdownItem>
                    <button className="dropdown-button" onClick={() => navigate("/donaciones")}>
                      <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/donaciones">
                        Presupuesto/Donaciones
                      </NextLink>
                    </button>
                  </DropdownItem>
                  <DropdownItem>
                    <button className="dropdown-button" onClick={() => navigate("/preguntas")}>
                      <NextLink className="navbar-link text-lg" color="foreground" as={Link} to="/preguntas">
                        Preguntas frecuentes
                      </NextLink>
                    </button>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="navbar-content-end" justify="end" hideIn="xs">
          <NavbarItem>
            <button className="donar-button" onClick={() => navigate("/donaciones")}>
              Donar
            </button>
          </NavbarItem>
        </NavbarContent>

        {/* Botón del menú de hamburguesa para móviles */}
        <NavbarMenuToggle className="menu-hamburguesa" aria-label="Toggle navigation" />

        {/* Menú lateral de hamburguesa para móviles */}
        <NavbarMenu>
            <NavbarMenuItem>
              <NextLink className="navbar-link text-lg" as={Link} to="/nosotros">
                Nosotros
              </NextLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NextLink className="navbar-link text-lg" as={Link} to="/proyecto">
                Proyecto
              </NextLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NextLink className="navbar-link text-lg" as={Link} to="/canamo">
                Cáñamo Conecta
              </NextLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NextLink className="navbar-link text-lg" as={Link} to="/naayeri">
                Naayeri
              </NextLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NextLink className="navbar-link text-lg" as={Link} to="/alianzas">
                Alianzas
              </NextLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NextLink className="navbar-link text-lg" as={Link} to="/galeria">
                Galería de fotos
              </NextLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NextLink className="navbar-link text-lg" as={Link} to="/donaciones">
                Presupuesto/Donaciones
              </NextLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NextLink className="navbar-link text-lg" as={Link} to="/preguntas">
                Preguntas frecuentes
              </NextLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <button className="donar-button-movil" onClick={() => navigate("/donaciones")}>
                Donar
              </button>
            </NavbarMenuItem>
          </NavbarMenu>

        </Navbar>
      </div>
      </>
    )
}
  
export default NavBar
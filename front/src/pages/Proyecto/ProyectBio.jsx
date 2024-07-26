import Navbar from '../../GlobalComponents/Navbar/Navbar.jsx';
import Footer from '../Proyecto/Footer.jsx';

import Benefits from './Benefits.jsx';
import Community from './Community.jsx';
import Contact from './Contact.jsx';
import Header from './Header.jsx';
import Objectives from './Objectives.jsx';
import People from './People.jsx';
import Proposals from './Proposals.jsx';
import Carry from './Carry.jsx';
import Construccion from './Construccion.jsx';


const ProyectBio = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Carry />
            <Construccion />
            <Objectives />
            <Proposals />
            <Benefits />
            <Community />
            <People />
            <Contact />
            <Footer/>
            
        </>
    );
}

export default ProyectBio;
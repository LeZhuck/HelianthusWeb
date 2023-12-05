import './App.css';
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import React from 'react';
import logo from './img/logoHelianthus.png';
import photo1 from './img/vitrine/photo1.png';
import photo2 from './img/vitrine/photo2.png';
import insta from './img/insta.png';
import linkdin from './img/linkdin.png';




function App() {
  return (
    <div className='h-screen w-screen overflow-x-hidden' style={{ backgroundColor: '#fff1e4' }}>
      <header style={{ backgroundColor: '#FFBD85' }} className=' px-10 mb-5'>
        <div className='flex flex-row'>
          <div className='flex items-center justify-start w-full'>
            <img src={logo} alt='Helianthus Logo' height={50} width={50} />
          </div>
          <div className='flex items-center justify-end w-full'>
            <div className='flex items-center'>
              <CiSearch className='mr-2' />
              <input type='text' placeholder='Search' />
            </div>
            <FaUser className='ml-6' />
          </div>
        </div>
      </header>
      <div className='w-full mb-6'>
        <div className='flex justify-center'>
          <h1 style={{ color: '#FFBD85' }} className='text-4xl font-serif'><strong>Helianthus</strong></h1>
        </div>
        <div className='flex justify-center'>
          <h1 style={{ color: '#272665' }} className='text-lg'><i>Il n'y a pas d'âge pour s'amuser</i></h1>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4 mb-6'>
      <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Type</text>
          <img src={photo1} alt='Helianthus Logo' height={300} width={300} />
          <text>Nom Acte n°1</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Les Diaboliques est un film français réalisé en 1954 par Henri-Georges Clouzot, sorti en 1955, inspiré du roman Celle qui n'était plus de Pierre Boileau et Thomas Narcejac.

                  Avec dans les rôles principaux Simone Signoret, Véra Clouzot, Paul Meurisse et Charles Vanel, l'histoire mélange des éléments de thriller et d'horreur. L'intrigue se concentre sur deux enseignantes, la maîtresse d'un homme marié et l'épouse légitime qui conspirent pour assassiner l'homme en question ; cependant, après que le crime a été commis, le corps du défunt disparaît et des événements étranges s'ensuivent.</i></text>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Type</text>
          <img src={photo2} alt='Helianthus Logo' height={300} width={300} />
          <text>Nom Acte n°1</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Les Diaboliques est un film français réalisé en 1954 par Henri-Georges Clouzot, sorti en 1955, inspiré du roman Celle qui n'était plus de Pierre Boileau et Thomas Narcejac.

                  Avec dans les rôles principaux Simone Signoret, Véra Clouzot, Paul Meurisse et Charles Vanel, l'histoire mélange des éléments de thriller et d'horreur. L'intrigue se concentre sur deux enseignantes, la maîtresse d'un homme marié et l'épouse légitime qui conspirent pour assassiner l'homme en question ; cependant, après que le crime a été commis, le corps du défunt disparaît et des événements étranges s'ensuivent.</i></text>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Type</text>
          <img src={photo1} alt='Helianthus Logo' height={300} width={300} />
          <text>Nom Acte n°1</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Les Diaboliques est un film français réalisé en 1954 par Henri-Georges Clouzot, sorti en 1955, inspiré du roman Celle qui n'était plus de Pierre Boileau et Thomas Narcejac.

                  Avec dans les rôles principaux Simone Signoret, Véra Clouzot, Paul Meurisse et Charles Vanel, l'histoire mélange des éléments de thriller et d'horreur. L'intrigue se concentre sur deux enseignantes, la maîtresse d'un homme marié et l'épouse légitime qui conspirent pour assassiner l'homme en question ; cependant, après que le crime a été commis, le corps du défunt disparaît et des événements étranges s'ensuivent.</i></text>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Type</text>
          <img src={photo1} alt='Helianthus Logo' height={300} width={300} />
          <text>Nom Acte n°1</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Les Diaboliques est un film français réalisé en 1954 par Henri-Georges Clouzot, sorti en 1955, inspiré du roman Celle qui n'était plus de Pierre Boileau et Thomas Narcejac.

                  Avec dans les rôles principaux Simone Signoret, Véra Clouzot, Paul Meurisse et Charles Vanel, l'histoire mélange des éléments de thriller et d'horreur. L'intrigue se concentre sur deux enseignantes, la maîtresse d'un homme marié et l'épouse légitime qui conspirent pour assassiner l'homme en question ; cependant, après que le crime a été commis, le corps du défunt disparaît et des événements étranges s'ensuivent.</i></text>
              </div>
            </div>
          </div>

        </div>


      </div>

      <div style={{ backgroundColor: '#FFFFFF' }} className=' p-5 w-full'>
        <div className='flex justify-center w-full flex-row mb-5'>
          <text className='text-2xl' style={{ color: '#272665' }}>Nous contacter : </text>
          <a href='mailto:admin@helianthus.fr' className='text-2xl' style={{ color: '#272665' }}>
            <strong> admin@helianthus.fr</strong>
          </a>
        </div>
        <div className='flex w-full  mb-5'>
          <div className='flex justify-start'>
            <img src={logo} alt='Helianthus Logo' height={100} width={100} />
          </div>
          <div className='flex justify-center w-full'>
            <div className='flex flex-col items-center mr-10'>
              <img src={insta} alt='Helianthus Logo' height={100} width={100} />
              <text style={{ color: '#272665' }}>Helianthus</text>
            </div>
            <div className='flex flex-col items-center'>
              <img src={linkdin} alt='Helianthus Logo' height={100} width={100} />
              <text style={{ color: '#272665' }}>Helianthus</text>
            </div>
          </div>
        </div>
        <div className='flex w-full justify-center'>
          <text style={{ color: '#272665' }} className='mr-5'>Politique de confidentialité</text>
          <text style={{ color: '#272665' }} className='mr-5'>Politique de cookies</text>
          <text style={{ color: '#272665' }}>CGU</text>
        </div>
      </div>

    </div>



  );
}


export default App;

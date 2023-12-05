import './App.css';
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import React from 'react';
import logo from './img/logoHelianthus.png';
import photo1 from './img/vitrine/photo1.png';
import photo2 from './img/vitrine/photo2.png';
import photo3 from './img/vitrine/photo3.png';
import photo4 from './img/vitrine/photo4.png';
import photo5 from './img/vitrine/photo5.png';
import photo6 from './img/vitrine/photo6.png';
import photo7 from './img/vitrine/photo7.png';
import photo8 from './img/vitrine/photo8.png';
import photo9 from './img/vitrine/photo9.png';
import photo10 from './img/vitrine/photo10.png';
import photo11 from './img/vitrine/photo11.png';
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
          <text>Activité Culturelle</text>
          <img src={photo1} alt='Helianthus Logo' height={300} width={300} />
          <text>Opéra</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Synopsis</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>une taverne, le poète Hoffmann, qui vient d’entendre chanter la diva Stella, raconte avant de la rejoindre l’histoire des trois femmes qu’il a aimées : Olympia, Antonia et Giulietta, trois amours contrecarrées par un mauvais génie, Lindorf. 
Sa passion pour Stella connaîtra-t-elle le même sort ? Avec cet opéra fantastique qui puise dans l’imaginaire de l’écrivain Ernst Theodor Amadeus Hoffmann, Jacques Offenbach espère démontrer qu’il n’est pas qu’un compositeur d’œuvres légères. 

Même inachevée en raison de sa mort en 1880, la partition constitue un magnifique chant du cygne et regorge de pages célèbres comme la Barcarolle ou l’air de la Poupée. Robert Carsen, qui aime à représenter le théâtre dans le théâtre, plonge le spectateur dans l’univers d’un Opéra, de la scène aux coulisses, et questionne, par cette mise en abyme vertigineuse, les notions d’anti-héros et d’idéal féminin.</i></text>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité Culturelle</text>
          <img src={photo2} alt='Helianthus Logo' height={300} width={300} />
          <text>Exposition</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Présentation</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Commencé à Rome en 1835 et poursuivi jusqu’en 1881, Le Poème de l’âme est la grande œuvre de l’artiste lyonnais Louis Janmot (1814-1892), à la fois pictural et littéraire. 

Il illustre en 34 compositions accompagnées d’un long poème le parcours initiatique d’une âme sur la Terre. Formé de deux cycles respectivement composés de 18 peintures et de 16 grands dessins, il fut qualifié par Henri Focillon, directeur du musée des Beaux-Arts de Lyon de 1913 à 1924, « d’ensemble le plus remarquable, le plus cohérent et le plus étrange du spiritualisme romantique ».</i></text>
              </div>
            </div>
          </div>

        </div>
        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité Culinaire</text>
          <img src={photo3} alt='Helianthus Logo' height={300} width={300} />
          <text>Cours de Cuisine</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Programme & Recette de cours</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Pain perdu au saumon fumé et crème légère au raifort
Un pain perdu salé et moelleux, avec sa crème légère parfumée à la racine de raifort, et de fines tranches de saumon fumé.

Parmentier de confit de canard cuit au vin rouge
Canard confit au vin rouge, servi entre deux couches de purée de patates douces onctueuse.

Crème brûlée
La seule, la vraie, l'inimitable : une crème à la vanille très onctueuse, cuite doucement et longuement au four.</i></text>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité Culinaire</text>
          <img src={photo4} alt='Helianthus Logo' height={300} width={300} />
          <text>Dégustation de Chocolat</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Vue d'ensemble</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Explorez les quartiers parisiens du Marais et du Quartier Montorgueil et visitez les boulangeries locales lors d'une visite guidée en petit groupe de 15 personnes maximum. 

Des boulangeries traditionnelles aux chocolatiers contemporains, goûtez aux saveurs de Paris - macarons, croissants, chocolat et crêpes! 

Circuit idéal pour les groupes d’amis ou pour ceux qui veulent créer un lien et qui souhaitent essayer autant de délicieuses friandises que possible.</i></text>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité Sportive</text>
          <img src={photo5} alt='Helianthus Logo' height={300} width={300} />
          <text>Cours d’Aquagym</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Vue d'ensemble</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>L’Aquagym est une activité douce qui vous permet d’apprécier la fluidité et la douceur de l’eau sur le corps. 

Dans l’eau, les impacts sont extrêmement amoindris, l’eau créant un effet d’amortisseur ce qui permet de solliciter les articulations sans engendrer de traumatisme.

Il n’est pas nécessaire de savoir nager pour pratiquer. L’ensemble des exercices proposés se réalise avec ou sans accessoires (type planches, frites, etc…)</i></text>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité Sportive</text>
          <img src={photo6} alt='Helianthus Logo' height={300} width={300} />
          <text>Renforcement musculaire</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description de la séance</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>La salle de sport "Bien-Être en Mouvement" est déterminé à créer un environnement accueillant et bénéfique pour tous les participants.
Située au cœur de Paris, cette salle de sport est fière de vous inviter à une séance spéciale d'activité physique conçue pour ceux d’entre vous qui souffre d'arthrose.  
Nous attendons avec impatience de partager ce moment de bien-être avec vous. 
Chaque exercice proposé lors de cette séance a été soigneusement sélectionné en accord avec les recommandations médicales du Dr. Dubois. Nous nous engageons à fournir une activité physique adaptée pour favoriser la mobilité et soulager les symptômes de l'arthrose.</i></text>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité du mois</text>
          <img src={photo7} alt='Helianthus Logo' height={300} width={300} />
          <text>Café Jeux de Société</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description de l'activité</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Le café avec des jeux de société est la promesse de passer un bon moment entre amis ou pour découvrir de nouvelles personnes. Ici les 600 boîtes de jeux de société sont le prétexte idéal pour prendre l’apéro : les planches d’antipasti et les desserts sur le pouce sont faits maison et la carte des sirops est gigantesque (lavande, pastèque, donut, caramel...). Les tables peuvent accueillir jusqu’à dix joueurs et un coin plus calme au fond du bar est prévu pour les parties épiques en tête à tête</i></text>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité familiale</text>
          <img src={photo8} alt='Helianthus Logo' height={300} width={300} />
          <text>Atelier Poterie</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description de l'activité</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Préparer vous à être créatif lors de cet atelier de poterie! 
Cet atelier vous offre une expérience enrichissante à vous et vos petits-enfants qui souhaitent explorer l'art séculaire de la poterie.

Sous la guidance d'un artisan potier expérimenté, vous découvrirez les secrets du tour de potier. L'artisan partagera des techniques ancestrales pour créer des bols, des tasses et des objets décoratifs uniques. 

Une fois vos œuvres terminées, elles seront cuites dans un four professionnel pour donner vie à la magie de la poterie. Chaque participant repartira avec ses créations uniques, prêtes à être exhibées avec fierté dans la maison familiale.</i></text>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité familiale</text>
          <img src={photo9} alt='Helianthus Logo' height={300} width={300} />
          <text>“Faites vos jeux”</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description de l'activité</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>14h00 - 18h00 : Jeux en Bois - Découvrez une vingtaine de grands jeux en bois, soigneusement sélectionnés pour vous offrir une expérience ludique et mémorable en famille. 

18h30 - 20h00 : Conte Symphonique "La Magie des Jouets" - Prolongez la journée avec le conte symphonique "La Magie des Jouets", une expérience musicale captivante. Quarante musiciens talentueux accompagnés d'une conteuse vous emmèneront dans une aventure magique, au son des plus grandes compositions symphoniques. Un voyage auditif à travers des pièces classiques soigneusement sélectionnées, dont la Symphonie des Jouets de Léopold Mozart, les Jeux d'enfants de Georges Bizet, et bien d'autres encore.</i></text>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité Manuelle</text>
          <img src={photo10} alt='Helianthus Logo' height={300} width={300} />
          <text>Création de Terrarium</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description de l'activité</strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Boby la Plante vous invites pour des ateliers où vous pourrez créer votre propre terrarium, une oasis verte à ramener chez vous pour embellir et végétaliser votre intérieur !
Avec l'aide experte du guide Smaïn, apprenez les techniques de composition végétale et découvrez comment assembler votre propre petit écosystème.

Selon vos préférences et votre espace, sélectionnez la taille de votre bulle en verre : medium, large ou XXL. Créez une pièce unique qui s'adapte parfaitement à votre style.

Ces mini-jungles ne demandent pas beaucoup d'entretien, ce qui les rend parfaites même pour ceux qui n'ont pas la main verte. Profitez de la verdure sans le stress de l'entretien intensif.</i></text>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center  items-center shadow-2xl rounded m-1 p-1' style={{ backgroundColor: "#EDDDCE", transition: "background-color 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D1B59B")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDDCE")} >
          <text>Activité Manuelle</text>
          <img src={photo11} alt='Helianthus Logo' height={300} width={300} />
          <text>Atelier Mosaïque</text>
          <div className='flex justify-start w-full'>
            <div className='px-8'>
              <text><strong>Description de l’atelier </strong></text>
              <div className='overflow-y-auto ' style={{ maxHeight: '100px' }}>
                <text><i>Delphine vous ouvre les portes de son atelier et vous invite à découvrir l'art de la mosaïque lors de ce cours spécialement conçus pour les débutants.
Que vous soyez novice ou artiste en herbe, ces cours sont idéaux pour tous ceux qui souhaitent s'initier à la mosaïque. Pas besoin de compétences préalables, juste de la patience et de la volonté de créer quelque chose de spécial.

Delphine, votre guide artistique, vous accueillera chaleureusement dans son espace créatif. Elle vous guidera à travers chaque étape du processus, partageant sa passion et sa pédagogie pour que chacun se sente à l'aise, quel que soit son niveau artistique.

Places limitées, veuillez réserver le plus tôt possible.</i></text>
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
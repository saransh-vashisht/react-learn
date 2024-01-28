// import reactImg from "./assets/react-core-concepts.png";
// // above line will also be rendered by the react dom

import { CORE_CONCEPTS } from "./data.js";
// we put curly braces around the named exports that we are exporting the thing into

import Header from "./components/header.jsx";
// we have here exported the header component into our app.jsx file to be used in it and we will have to use the same name as our function for it

import CoreConcept from "./components/CoreConcept.jsx";

// Outputting dynamic values using react
// const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }
// Outputting dynamic values using react

// function Header() {
//   // Now we will add dynamic values separately from return so that our code looks cleaner
//   const description = reactDescriptions[genRandomInt(2)];

//   // our first component
//   return (
//     // the code in below this was earlier in app component we have divided it in another function
//     <header>
//       {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
//       {/* using images with above method is not optimal as they might get lost in the build process */}
//       {/* more optimal way -->see import image before seeing below line*/}
//       <img src={reactImg} alt="Stylized atom" />

//       <h1>React Essentials</h1>
//       <p>
//         {description} React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   );
// }

// we will use it to explain props in the app component
// props is the parameter that will be used to define our items

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// function CoreConcept({image,title,description}){
//   return(
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }
// here we have shorten the use of props being repeated by using the javascript destructuring 
//  in the destructuring we simply target the different properties of incoming object by name so we will have to use the same properties we are setting as the props. 
// we will have to use same name as those in curly braces below

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* we are using props to reuse this concept here or same component here and also we are using additional js array to use the data but we can see this work is quite lengthy*/}
            {/* above method is longer method to access values and use key value pairs */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            {/* here we have used the spread operator from the js which will spread all the key value pairs and map them with their respective props to show the output of the code */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;


// now we will separate the file into the various components based on various  functionalities  , therefore we can have the file structure simplified  for ourselves
// it is the standard structure
// we rarely have two components together only in the case when they are very closely related to each other such that we can't use them separately 
// we will store the various files in the components sub folder for ourselves
//  we will give the components  the same name as the component name in which we are storing the file in the 
// 
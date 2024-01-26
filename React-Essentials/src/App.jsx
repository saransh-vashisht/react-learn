import reactImg from "./assets/react-core-concepts.png";
// above line will also be rendered by the react dom

import { CORE_CONCEPTS } from "./data.js";
// we put curly braces around the named exports that we are exporting the thing into


// Outputting dynamic values using react
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
// Outputting dynamic values using react

function Header() {
  // Now we will add dynamic values separately from return so that our code looks cleaner
  const description = reactDescriptions[genRandomInt(2)];

  // our first component
  return (
    // the code in below this was earlier in app compoent we have divided it in another function
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      {/* using images with above method is not optimal as they might get lost in the build process */}
      {/* more optimal way -->see import image before seeing below line*/}
      <img src={reactImg} alt="Stylized atom" />

      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// we will use it to explain props in the app component
// props is the parameter that will be used to define our items

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
            {/* we are using props to reuse this concept here */}
             <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
             <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
             <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

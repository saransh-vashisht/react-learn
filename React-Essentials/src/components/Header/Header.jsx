// we have set the header.jsx and header.css file into the separate folder for the  extra clarity in the code process

import "./Header.css";
// we need to import the header.css file to be processed and used to provide the styling the code.


import reactImg from "../../assets/react-core-concepts.png";
// double ../ means that we are going up the two levels in this folder tbh 
// we have used the .. slash in this value to go first into components folder and then go in assets
// above line will also be rendered by the react dom

// Outputting dynamic values using react
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
// Outputting dynamic values using react

// and now to make this header function usable in the app.jsx folder we need to use the export keyword and the export default keyword
export default function Header() {
  // Now we will add dynamic values separately from return so that our code looks cleaner
  const description = reactDescriptions[genRandomInt(2)];

  // our first component
  return (
    // the code in below this was earlier in app component we have divided it in another function
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

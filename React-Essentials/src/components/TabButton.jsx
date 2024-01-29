// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

// above is the way using simple props

export default function TabButton({children}) {
    return (
      <li>
        <button>{children}</button>
      </li>
    );
  }

//   here we have done using the object destructuring

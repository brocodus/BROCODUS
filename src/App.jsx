// // import Home from '../src/components/Home'
// // import Navbar from '../src/components/Navbar'
// // import { useEffect } from "react";
// // import styles from "./App.module.css";

// // export default function App() {
// //   useEffect(() => {
// //     const navbar = document.querySelector(".navbar");
// //     const home = document.querySelector("#home");

// //     if (navbar && home) {
// //       home.style.marginTop = navbar.offsetHeight + "px";
// //     }
// //   }, []);

// //   return (
// //      <div className={styles.appContainer}>
// //        <div className="overlay"></div>
// //       <Navbar />
// //       <section id="home">
// //         <Home />
// //       </section>
// //     </div>
// //   );
// // }

import Home from '../src/components/Home'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const home = document.querySelector("#home");

    if (navbar && home) {
      home.style.marginTop = navbar.offsetHeight + "px";
    }
  }, []);

  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
         <Footer />
      </section>
  </>
  );
}

// import Home from '../src/components/Home'
// import Navbar from '../src/components/Navbar'
// import { useEffect } from "react";
// import styles from "./App.module.css";

// export default function App() {
//   useEffect(() => {
//     const navbar = document.querySelector(".navbar");
//     const home = document.querySelector("#home");

//     if (navbar && home) {
//       home.style.marginTop = navbar.offsetHeight + "px";
//     }
//   }, []);

//   return (
//     <div className={styles.appContainer}>
//       <Navbar />
//       <section id="home">
//         <Home />
//       </section>
//     </div>
//   );
// }

import Image from "next/image";
import Navbar from "./components/Nabvar";
import Hero from "./components/Hero";
import Cards from "./components/Card";
import ShowCard from "./components/ShowCard";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <ShowCard />
      <Cards />
    </div>
  );
}

// import Image from "next/image";
// import Nabvar from "./components/Nabvar";
// import Hero from "./components/Hero";

// export default function Home() {
//   return (
//     <div>
//       <Nabvar />
//       <Hero />
//       {/* <Nabvar></Nabvar> */}
//     </div>
//   );
// }

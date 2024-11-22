import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <main className="flex flex-wrap justify-center gap-4 p-4">
      <div className="w-full sm:w-[280px] h-[200px] text-black">
        <Image
          //   src={Card}
          src={require("../../../public/images/firstCard.jpg")}
          alt="First-Card"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div className="w-full sm:w-[280px] h-[200px] text-black">
        <Image
          src={require("../../../public/images/secondCard.jpg")}
          alt="Second-Card"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>

      <div className="w-full sm:w-[280px] h-[200px] text-black">
        <Image
          src={require("../../../public/images/thirdCard.jpg")}
          alt="Third-Card"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </main>
  );
};

export default Cards;

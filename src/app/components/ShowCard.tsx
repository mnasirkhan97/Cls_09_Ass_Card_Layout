import React from "react";
import Image from "next/image";

const ShowCard = () => {
  return (
    <main className="flex flex-wrap justify-center gap-4 p-4">
      <div className="w-full sm:w-[430px] h-[350px]">
        <Image
          className="rounded-lg w-full h-full object-cover"
          src={require("../../../public/images/kamrantessori.jpg")}
          alt="Kamran-tessori"
          // width={100}
          // height={100}
        />
      </div>

      <div className="w-full sm:w-[430px] h-[350px]">
        <Image
          className="rounded-lg w-full h-full object-cover"
          src={require("../../../public/images/fourthCard.jpg")}
          alt="Fourth-Card"
          // width={100}
          // height={100}
        />
      </div>
    </main>
  );
};

export default ShowCard;

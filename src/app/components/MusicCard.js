"use client";
import Image from "next/image";
function MusicCard({ image, title, onClick, clicked }) {
  const styleTrue = "border-green-400";
  const styleDefault = "border-white";
  return (
    <div
      className={` border-2 w-fit p-4 text-center rounded-lg cursor-pointer ${
        clicked ? styleTrue : styleDefault
      }`}
      onClick={() => onClick(title)}
    >
      <Image src={image} alt="song image" width={150} height={150} />
      <p>{title}</p>
    </div>
  );
}
export default MusicCard;

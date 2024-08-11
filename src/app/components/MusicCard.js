import Image from "next/image";
function MusicCard({ image, title }) {
  return (
    <div className="border-white border-2 w-fit p-4 text-center rounded-lg cursor-pointer">
      <Image src={image} alt="song image" width={150} height={150} />
      <p>{title}</p>
    </div>
  );
}
export default MusicCard;

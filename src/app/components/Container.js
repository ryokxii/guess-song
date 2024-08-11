import MusicCard from "./MusicCard";

export default function Container() {
  const song = undefined;
  const choices = [
    {
      id: 1,
      image: "/kenCover.jpg",
      title: "Yale",
    },
    {
      id: 2,
      image: "/kenCover.jpg",
      title: "Yale",
    },
    {
      id: 3,
      image: "/kenCover.jpg",
      title: "Yale",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      Music
      <div className="flex flex-row gap-20 mt-20">
        {choices.map((music) => {
          <MusicCard image={music.image} title={music.title} />;
        })}
      </div>
    </div>
  );
}

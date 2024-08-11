"use client";
import MusicCard from "./MusicCard";
import { useState } from "react";

function Container() {
  const [click, setClick] = useState(null);
  const choices = [
    {
      id: 1,
      image: "/kenCover.jpg",
      title: "1",
    },
    {
      id: 2,
      image: "/kenCover.jpg",
      title: "2",
    },
    {
      id: 3,
      image: "/kenCover.jpg",
      title: "3",
    },
  ];

  function CardClicked(title) {
    console.log(title);
    setClick(title);
  }

  return (
    <div className="flex flex-col items-center">
      Music
      <div className="flex flex-row gap-20 mt-20">
        {choices.map((music) => (
          <MusicCard
            image={music.image}
            title={music.title}
            key={music.id}
            onClick={CardClicked}
            clicked={click === music.title}
          />
        ))}
      </div>
    </div>
  );
}
export default Container;

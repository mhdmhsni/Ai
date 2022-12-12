import { useEffect, useState } from "react";
import Difficulties from "../components/Difficulties";
import Title from "../components/Title";

const Root = () => {
  const [playMusic, setPlayMusic] = useState<boolean>(false);

  useEffect(() => {
    setPlayMusic(true);
  }, []);

  return (
    <>
      <Title />
      <h2 className="text-center">CHOOSE THE DIFFICULTY</h2>
      <Difficulties />
      <audio
        id="menuBackgroundMusic"
        loop={true}
        autoPlay={playMusic}
        src="vintage-sci-fi-computer-sound-effect.mp3"
      />
    </>
  );
};

export default Root;

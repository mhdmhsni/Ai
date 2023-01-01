import DifficultyList from "../components/DifficultyList";
import Title from "../components/Title";

const Root = () => {
  return (
    <>
      <Title />
      <h2 className="text-center">CHOOSE THE DIFFICULTY</h2>
      <DifficultyList />
    </>
  );
};

export default Root;

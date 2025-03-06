import KeyboardKey from "./KeyboardKey";

interface Props {
  array: string[];
}

const Keyboard = ({ array }: Props) => {
  const onClickHandler = () => console.log("pressed!");
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {array?.map((key: string) => (
        <KeyboardKey key={key} nameKey={key} onClickHandler={onClickHandler} />
      ))}
    </div>
  );
};

export default Keyboard;

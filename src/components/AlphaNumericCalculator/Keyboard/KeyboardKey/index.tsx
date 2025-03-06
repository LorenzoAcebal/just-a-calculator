import { Card } from "../../../Card";

interface Props {
  nameKey: string;
  onClickHandler: () => void;
}

const KeyboardKey = ({ nameKey = "n/a", onClickHandler }: Props) => {
  return (
    <div onClick={onClickHandler}>
      <Card customClass="keyboardKey">{nameKey}</Card>
    </div>
  );
};

export default KeyboardKey;

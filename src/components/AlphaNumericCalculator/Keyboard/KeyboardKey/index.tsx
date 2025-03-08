import { Card } from "../../../Card";

interface Props {
  nameKey: string;
  onClickHandler: (nameKey: string) => void;
}

const KeyboardKey = ({ nameKey = "n/a", onClickHandler }: Props) => {
  return (
    <div onClick={() => onClickHandler(nameKey)}>
      <Card customClass="keyboardKey">{nameKey}</Card>
    </div>
  );
};

export default KeyboardKey;

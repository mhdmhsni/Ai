import { FC, MouseEventHandler } from "react";

type defaultProps = {
  /**
   * Whether to show the card content or not
   */
  revealed: boolean;
};

type Props = {
  /**
   * number to render as card's value
   */
  cardNumber: number;

  cardClickHandler: MouseEventHandler<HTMLDivElement>;
} & Partial<defaultProps>;

const Card: FC<Props> = ({ revealed = true, cardNumber, cardClickHandler }) => {
  return (
    <div
      onClick={(e) => cardClickHandler(e)}
      className={`card ${!revealed && cardNumber ? "card-hidden" : ""}`}
    >
      {cardNumber ? cardNumber : ""}
    </div>
  );
};

export default Card;

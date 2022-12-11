import { FC } from "react";

type defaultProps = {
  /**
   * hide the number after how many milliseconds
   */
  hideAfter: number;
};

type Props = {
  /**
   * number to render as cards's value
   */
  cardNumber: number;
} & Partial<defaultProps>;

const Card: FC<Props> = ({ hideAfter = 10, cardNumber }) => {
  return <div className="card">{cardNumber}</div>;
};

export default Card;

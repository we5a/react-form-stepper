import { type FC } from "react";
import cn from "classnames";
import { TextField } from "@mui/material";

import styles from "./CreditCardBlock.module.scss";

const CreditCardBlock: FC = () => {
  return (
    <div className={styles.cardBlock}>
      <div className={styles.inputElement}>
        <label htmlFor="card-number">Card number:</label>
        <TextField id="card-number" size="small" type="number" />
      </div>

      <div className={cn(styles.inputElement)}>
        <label htmlFor="cvv">CVV:</label>
        <TextField
          className={styles.cvvField}
          id="cvv"
          size="small"
          type="number"
        />
      </div>
    </div>
  );
};

export default CreditCardBlock;

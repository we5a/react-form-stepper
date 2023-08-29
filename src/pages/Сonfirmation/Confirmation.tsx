import { type FC } from "react";
import styles from "./Confirmation.module.scss";
import { TextField, Typography, Button } from "@mui/material";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router";

const Confirmation = () => {
  const navigate = useNavigate();
  const order = useAppSelector((state) => state.order);
  const {
    firstName,
    lastName,
    phone,
    deliveryDate,
    paymentMethod,
    special,
    deliveryMethod,
  } = order;

  const handlePrev = () => {
    navigate("/detail");
  };

  const confirmOrder = () => {
    console.log("Confirm order");
  };

  return (
    <>
      <Typography component={"h4"} variant="h6" className={styles.title}>
        Confirmation:
      </Typography>
      <div className={styles.container}>
        <ul className={styles.orderFields}>
          <li>First name: {firstName}</li>
          <li>Last name: {lastName}</li>
          <li>Phone: {phone}</li>
          <li>Desirable delivery date: {deliveryDate}</li>
          <li>Payment method: {paymentMethod.type}</li>
          <li>Delivery method: {deliveryMethod.type}</li>
          <li>Special comment: {special}</li>
        </ul>

        {paymentMethod.value === "credit-card" && (
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
        )}
        {paymentMethod.type === "privat-24" && (
          <div> Privat 24 payment link</div>
        )}
        {paymentMethod.type === "paypal" && <div>Paypal link</div>}

        <div className={styles.buttonRow}>
          <Button variant="contained" onClick={handlePrev}>
            Prev
          </Button>
          <Button
            variant="contained"
            className={styles.confirmButton}
            onClick={confirmOrder}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default Confirmation;

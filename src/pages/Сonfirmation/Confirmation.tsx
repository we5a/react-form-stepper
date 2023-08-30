import { type FC } from "react";
import { useNavigate } from "react-router";
import { Typography, Button } from "@mui/material";

import { useAppSelector } from "../../store/hooks";
import { CreditCardBlock } from "../../components";
import styles from "./Confirmation.module.scss";

const Confirmation: FC = () => {
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

        {paymentMethod.type === "credit-card" && <CreditCardBlock />}

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

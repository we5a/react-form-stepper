import { type FC, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import cn from "classnames";

import styles from "./DetailForm.module.scss";

const deliveryMethods = [
  { label: "Ukrposhta", value: "ukrposhta" },
  { label: "Nova Poshta", value: "nova-poshta" },
  { label: "Meest Express", value: "meest" },
];

const DetailForm: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [deliveryMethod, setDeliveryMethod] = useState<any>(deliveryMethods[0]);
  const { paymentMethod } = location.state;

  const handlePrev = () => {
    navigate("/order");
  };

  const handleNext = () => {
    navigate("/confirm");
  };

  const handleChange = (event: SelectChangeEvent) => {
    const el = deliveryMethods.find((el) => el.value === event.target.value);

    setDeliveryMethod(el);
  };

  const deliveryConfigBlock = () => {
    switch (deliveryMethod.value) {
      case "ukrposhta":
        return <span>Select your nearest post officee here</span>;
      case "nova-poshta":
        return <span>Select your nearest office</span>;
      case "meest":
        return <span>Adjust Meest delivery</span>;
    }
  };

  return (
    <>
      <Typography component={"h4"} variant="h6" className={styles.title}>
        Detail Form
      </Typography>
      <div className={styles.forms}>
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
        {paymentMethod.value === "privat-24" && (
          <div> Privat 24 payment link</div>
        )}
        {paymentMethod.value === "paypal" && <div>Paypal link</div>}

        <hr />

        <div className={styles.select}>
          <label htmlFor="delivery-method">Delivery method:</label>
          <FormControl sx={{ minWidth: 220 }} size="small">
            <Select
              id="delivery-method"
              value={deliveryMethod?.value}
              onChange={handleChange}
            >
              {deliveryMethods.map((option) => {
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        <div className={styles.deliverySettings}>{deliveryConfigBlock()}</div>

        <div className={styles.buttonsRow}>
          <Button onClick={handlePrev} variant={"contained"}>
            Prev
          </Button>
          <Button onClick={handleNext} variant={"contained"}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default DetailForm;

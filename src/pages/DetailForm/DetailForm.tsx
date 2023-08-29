import { type FC, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addDeliveryMethod } from "../../store/orderSlice";
import styles from "./DetailForm.module.scss";

const deliveryMethods = [
  { label: "Ukrposhta", value: "ukrposhta" },
  { label: "Nova Poshta", value: "nova-poshta" },
  { label: "Meest Express", value: "meest" },
];

const DetailForm: FC = () => {
  const navigate = useNavigate();
  const order = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();
  const [deliveryMethod, setDeliveryMethod] = useState<any>(() => {
    return deliveryMethods.find((el) => el.value === order.deliveryMethod.type)
  });

  const handlePrev = () => {
    dispatch(addDeliveryMethod({type: deliveryMethod.value}));
    navigate("/order");
  };

  const handleNext = () => {
    dispatch(addDeliveryMethod({type: deliveryMethod.value}));
    navigate("/confirm");
  };

  const handleChange = (event: SelectChangeEvent) => {
    const el = deliveryMethods.find((el) => el.value === event.target.value);

    setDeliveryMethod(el);
  };

  const deliveryConfigBlock = () => {
    switch (deliveryMethod.value) {
      case "ukrposhta":
        return <span>Urkposhta: Select your nearest post officee here</span>;
      case "nova-poshta":
        return <span>Nova Poshta: Select your nearest office</span>;
      case "meest":
        return <span>Meest: Adjust Meest delivery</span>;
    }
  };

  return (
    <>
      <Typography component={"h4"} variant="h6" className={styles.title}>
        Detail Form
      </Typography>
      <div className={styles.forms}>

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

import { useState, type FC } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Switch from "@mui/material/Switch";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./OrderForm.module.scss";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addCustomerInfo } from "../../store/orderSlice";

const paymentMethods = [
  {
    label: "Privat 24",
    value: "privat-24",
  },
  {
    label: "Paypal",
    value: "paypal",
  },
  {
    label: "Credit Card",
    value: "credit-card",
  },
];

const OrderForm: FC = () => {
  const navigate = useNavigate();

  const order = useAppSelector<any>((state) => state.order);
  const dispatch = useAppDispatch();

  const {
    firstName: initialFirstName,
    lastName: initialLastName,
    phone: initialPhone,
    deliveryDate: initialDeliveryDate,
    special: initialSpecial,
    paymentMethod: initilaPaymentMethod,
  } = order;

  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [phone, setPhone] = useState(initialPhone);
  const [specialComment, setSpecialComment] = useState(initialSpecial);
  const [deliveryDate, setDeliveryDate] = useState<any>(
    dayjs(initialDeliveryDate)
  );
  const [isSpecial, setIsSpecial] = useState<boolean>(Boolean(initialSpecial));
  const [paymentMethod, setPaymentMethod] = useState<any>(() => {
    return (
      paymentMethods.find((el) => el.value === initilaPaymentMethod.type) ||
      paymentMethods[0]
    );
  });

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSpecial(e.target.checked);
  };

  const handleChange = (event: SelectChangeEvent) => {
    const el = paymentMethods.find((el) => el.value === event.target.value);
    setPaymentMethod(el);
  };

  const handleNext = () => {
    console.log("Next");

    // validate here

    dispatch(
      addCustomerInfo({
        firstName,
        lastName,
        phone,
        deliveryDate: deliveryDate.format("YYYY-MM-DD"),
        paymentMethod: { type: paymentMethod.value },
        special: specialComment,
      })
    );

    navigate("/detail");
  };

  return (
    <div className={styles.container}>
      <Typography component={"h4"} variant="h6" className={styles.title}>
        Order Form
      </Typography>

      <div className={styles.form}>
        <div className={styles.inputRow}>
          <div className={styles.inputElement}>
            <label htmlFor="first-name">First Name:</label>
            <TextField
              id="first-name"
              required
              size="small"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className={styles.inputElement}>
            <label htmlFor="last-name">Last Name:</label>
            <TextField
              id="last-name"
              required
              size="small"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputElement}>
            <label htmlFor="phone">Phone:</label>
            <TextField
              value={phone}
              id="phone"
              size="small"
              type="tel"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={styles.inputElement}>
            <label htmlFor="datepicker">Delivery Date:</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={deliveryDate}
                onChange={(newDate) => setDeliveryDate(newDate)}
                disablePast
                className={styles.datePicker}
                slotProps={{ textField: { size: "small", id: "datepicker" } }}
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className={styles.select}>
          <label htmlFor="payment-method">Payment method:</label>
          <FormControl sx={{ minWidth: 220 }} size="small">
            <Select
              id="payment-method"
              value={paymentMethod?.value}
              onChange={handleChange}
            >
              {paymentMethods.map((option) => {
                return (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>

        <div className={styles.switchRow}>
          <label htmlFor="special">Special:</label>
          <Switch
            id="special"
            checked={isSpecial}
            onChange={handleChecked}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>

        {isSpecial && (
          <Textarea
            minRows={6}
            placeholder="Your comments"
            value={specialComment}
            onChange={(e) => setSpecialComment(e.target.value)}
          />
        )}

        <div className={styles.buttonsRow}>
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;

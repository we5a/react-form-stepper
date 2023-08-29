import type { FC } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import styles from "./OrderForm.module.scss";

const OrderForm: FC = () => {
  return (
    <div className={styles.container}>
      <Typography component={"h4"} variant="h6" className={styles.title}>
        {" "}
        Order Form here
      </Typography>

      <div className={styles.form}>
        <div className={styles.inputRow}>
          <div className={styles.inputElement}>
            <label htmlFor="first-name">First Name:</label>
            <TextField id="first-name" size="small" />
          </div>

          <div className={styles.inputElement}>
            <label htmlFor="first-name">Last Name:</label>
            <TextField id="first-name" size="small" />
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputElement}>
            <label htmlFor="phone">Phone:</label>
            <TextField id="phone" size="small" />
          </div>

          <div className={styles.inputElement}>
            <label htmlFor="datepicker">Delivery Date:</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                defaultValue={dayjs("2023-09-02")}
                disablePast
                className={styles.datePicker}
                slotProps={{ textField: { size: 'small', id: 'datepicker' } }}
              />
            </LocalizationProvider>
          </div>


        </div>
      </div>
    </div>
  );
};

export default OrderForm;

/*
first name
last name

phone
date

some view
*/

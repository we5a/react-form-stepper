import { type FC } from "react";
import { Outlet } from "react-router";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <main className={styles.container}>
      <Outlet />
    </main>
  );
};

export default Layout;

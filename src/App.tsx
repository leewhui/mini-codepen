import { Layout } from "./components/layout";
import styles from "./app.module.less";
import { Header } from "./components/header/header";
import { useEffect } from "react";

export const App = () => {
  return (
    <div className={styles["app-container"]}>
      <Header></Header>
      <Layout></Layout>
    </div>
  );
};

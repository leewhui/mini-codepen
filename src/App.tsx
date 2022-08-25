import { Layout } from "./components/layout";
import styles from "./app.module.less";
import { Header } from "./components/header/header";

export const App = () => {
  return (
    <div className={styles["app-container"]}>
      <Header></Header>
      <Layout></Layout>
    </div>
  );
};

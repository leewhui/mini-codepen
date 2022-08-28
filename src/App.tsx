import { Layout } from "./components/layout";
import styles from "./app.module.less";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer";
import { ConsolePanel } from "./components/console";

export const App = () => {
  return (
    <div className={styles["app-container"]}>
      <Header></Header>
      <Layout></Layout>
      <Footer></Footer>
    </div>
  );
};

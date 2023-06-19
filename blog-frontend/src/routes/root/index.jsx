import { Theme } from "@/components";
import { Layout } from "@/contains";
import { Outlet, useNavigation } from "react-router-dom";
import style from "./root.module.scss";

export default () => {
  const navigation = useNavigation();

  return (
    <>
      <Theme>
        <Layout />
        {/* https://reactrouter.com/en/6.13.0/start/overview#pending-navigation-ui, 当navigation.state === "loading"展示loading样式 */}
        <div
          className={`${navigation.state === "loading" ? "loading" : ""} ${
            style["content-wrapper"]
          }`}
        >
          <Outlet />
        </div>
      </Theme>
    </>
  );
};

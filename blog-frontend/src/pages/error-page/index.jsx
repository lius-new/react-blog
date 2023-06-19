import { useRouteError } from "react-router-dom";
import style from "./error-page.module.scss";

export default () => {
  const error = useRouteError();
  return (
    <div className={style["error-container"]}>
      <h3 className={style["error-header"]}>
        {error.statusText} | {error.status} 😀
      </h3>
      <p>{error.data}</p>
    </div>
  );
};

import React, { FC } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "../../store";
import { Loader as LoaderProvider } from "../Loader";
import { Router } from "../Router";
import styles from "./Root.module.scss"

interface IProps {}

export const Root: FC<IProps> = (props: IProps): JSX.Element => {
  return (
      <div className={styles.root}>
          <Provider store={store}>
              <PersistGate persistor={persistor} loading={null}>
                  <LoaderProvider>
                      <Router />
                  </LoaderProvider>
              </PersistGate>
          </Provider>
      </div>
  );
};

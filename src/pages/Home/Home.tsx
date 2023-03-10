import React, { FC } from "react";
import { Landing as LandingLayout } from "../../layouts";
import { Container } from "../../components";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./Home.module.scss";
import animation from "../../components/Loader/Loader.animation.json";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface IProps {}

export const Home: FC<IProps> = (props: IProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <LandingLayout>
      <Container>
        <div className={styles.home}>
          <Player src={animation} style={{ width: 100 }} autoplay loop />
          <h5>ExperienceForge</h5>
          <p>Find your first project</p>
          <Button className={styles.link} onClick={() => navigate("/for-you")}>Start your journey!</Button>
        </div>
      </Container>
    </LandingLayout>
  );
};

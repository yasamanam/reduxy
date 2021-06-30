import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { PhotoCamera } from "@material-ui/icons";
import React from "react";
import { useStyles } from "../styles";

const Gallary = () => {
  const { container, pargraph, header, headerText } = useStyles();
  return (
    <>
      <AppBar position="relative">
        <Toolbar className={header}>
          <PhotoCamera />
          <Typography className={headerText} variant="h6">
            گالری تصاویر
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container className={container} maxWidth="sm">
            <Typography
              className={pargraph}
              variant="h2"
              align="center"
              color="textPrimary"
            >
              گالری تصاویر
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              pargraph
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Gallary;

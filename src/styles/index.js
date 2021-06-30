import { createStyle, makeStyles } from "@material-ui/core";

import { COLORS } from "./constantVariables";

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: "40px",
  },
  pargraph: {
    color: COLORS.textColor,
  },
  header: {
    backgroundColor: COLORS.mainColor,
  },
  headerText: {
    margin: "0 20px",
  },
}));

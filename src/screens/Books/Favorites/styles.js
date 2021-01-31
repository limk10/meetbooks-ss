import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginBottom: theme.spacing(3),
    width: "100%",
  },
  btnFilter: {
    marginBottom: theme.spacing(2),
  },
  loadingText: {
    textAlign: "center",
  },
}));

export default useStyles;

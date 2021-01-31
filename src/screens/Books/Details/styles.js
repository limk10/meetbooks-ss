import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    width: "85%",
    height: "auto",
    borderRadius: "15px",
  },
  marginLeft: {
    boxShadow: "none !important",
    borderRadius: "15px",
  },
  marginTop: {
    marginTop: theme.spacing(2),
    boxShadow: "none !important",
    borderRadius: "15px",
  },
  root: {
    paddingBottom: theme.spacing(6),
  },
}));

export default useStyles;

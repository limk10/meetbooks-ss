import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "15px",
    textTransform: "capitalize",
    textAlign: "center",
  },
  media: {
    margin: "0 auto",
    width: "185px",
    height: "128px",
    paddingTop: "128px", // 16:9
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },
  cardContent: {
    paddingBottom: 50,
    maxHeight: "50px",
  },
  cardActions: {
    borderRadius: "10px",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-around",
  },
  iconButton: {
    "&:hover": {
      transform: "translate(0,-1%)",
    },
  },
}));

export default useStyles;

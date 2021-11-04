import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles((theme) => ({
  notFound: {
    display: "flex",
    flexDirection: "column",
  },
  textSection: {
    textAlign: "center",
  },
  text: {
    lineHeight: "1em",
    marginBottom: theme.spacing(4),
    fontFamily: "'Oswald'",
    fontSize: "2.4rem",
  },
}))

export default styles

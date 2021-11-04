import { createMuiTheme } from "@material-ui/core/styles"

const primary = {}
const secondary = {}
const error = {}

const spacing = (factor) => factor * 8

export default createMuiTheme({
  spacing,
  palette: {},
  typography: {},
  overrides: {
    MuiDialog: {
      paper: {
        width: "100%",
        // height: '50%'
      },
    },
  },
})

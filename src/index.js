import "./styles/base.css"

import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider } from "@material-ui/core/styles"
import App from "components/App"
import ReactDOM from "react-dom"
import { initDB } from "react-indexed-db"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"

import reportWebVitals from "./reportWebVitals"
import theme from "./themes/main"

const queryClient = new QueryClient()

initDB({
  name: "userapp2-auth",
  version: 1,
  objectStoresMeta: [
    {
      store: "auth",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "token", keypath: "token" },
        { name: "account", keypath: "account" },
      ],
    },
  ],
})

const Application = (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MuiThemeProvider>
  </BrowserRouter>
)

ReactDOM.render(Application, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

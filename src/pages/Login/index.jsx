import { Box } from "@mui/material"
import { withStyles } from "@mui/styles"
import LoginForm from "components/Forms/LoginForm"
import Page from "pages/Page"
import { useState } from "react"

import SignUpForm from "../../components/Forms/SignUpForm"
import styles from "./styles"
import useStyles from "./styles"

const Index = () => {
  const classes = useStyles()
  const [isLogin, setIsLogin] = useState(true)
  return (
    <Page>
      {isLogin ? (
        <LoginForm setIsLogin={() => setIsLogin(false)} />
      ) : (
        <SignUpForm setIsLogin={() => setIsLogin(true)} />
      )}
    </Page>
  )
}

export default withStyles(styles)(Index)

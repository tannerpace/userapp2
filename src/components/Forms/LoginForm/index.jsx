import { yupResolver } from "@hookform/resolvers/yup"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material"
import LinearProgress from "@mui/material/LinearProgress"
// import { userLogin } from "../../../actions/User/users"
import PropTypes from "prop-types"
import React from "react"
import { useContext, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useQueryClient } from "react-query"
import { useHistory } from "react-router-dom"
import * as yup from "yup"

import App from "../../../contexts/App"
import serialize from "../../../store/serialize"
import useStyles from "./styles"

const schema = yup
  .object({
    userName: yup.string().required(),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
      ),
  })
  .required()

const LoginForm = ({ setIsLogin }) => {
  const [visibility, setVisibility] = useState(true)
  const classes = useStyles()
  const queryClient = useQueryClient()
  const [loading, setLoading] = useState(false)
  const authContext = useContext(App)
  const { loginMutation } = useContext(App)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })
  const history = useHistory()
  const isInitialMount = useRef(true)
  const onSubmit = (data) => {
    setLoading(true)
    let values = data
    loginMutation.mutate(values, {
      onSuccess: (res, cb) => {
        console.log(` succsess res`, res)
        serialize("user", res.user)
          .then(async (serializedData) => {
            await authContext.setAuthData({
              token: res.token,
              account: serializedData,
            })
            authContext.openSnackBar({
              message: "Login successful!",
            })

            //clean
            return queryClient.setQueryData("user", (oldState) => {
              return serializedData
            })
          })
          .catch((err) => {
            authContext.setAuthData({
              token: res.token,
              account: res.account,
            })
          })
      },
      onError: (err) => {
        console.error(err)
        authContext.openSnackBar({
          message: "Incorrect email address or password",
        })
        setLoading(false)
      },
    })
  }

  const toggleLogin = () => {
    setIsLogin()
  }
  console.log(`authContext.authUser`, authContext.authUser)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      if (authContext && authContext.token) {
        setLoading(false)
        history.push("/table")
      }
    }
  }, [authContext])

  return (
    <Box>
      <Box className={classes.inputContainer}>
        {loading ? (
          <LinearProgress color="secondary"></LinearProgress>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography className={classes.welcome}>
              Welcome to Kite.io
            </Typography>
            <Typography className={classes.loginHeader}>
              Login to your account
            </Typography>
            <Box className={classes.feildContainer}>
              <Input
                style={{
                  color: "offwhite",
                  borderRadius: "5px",
                  marginTop: "1.2em",
                  backgroundColor: "rgba(237, 237, 237, 0.5)",
                }}
                {...register("userName")}
              />
              <Typography className={classes.formHelperText}>
                {errors.userName?.message}
              </Typography>
              <br></br>
              <Input
                style={{
                  borderRadius: "5px",
                  marginTop: "-0.5em",
                  backgroundColor: "rgba(237, 237, 237, 0.5)",
                }}
                {...register("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        size="small"
                        onClick={() => setVisibility(!visibility)}
                      >
                        {visibility ? (
                          <VisibilityIcon color="primary" fontSize="small" />
                        ) : (
                          <VisibilityOffIcon color="primary" fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography>{errors.password?.message}</Typography>

              <Button
                className={classes.loginButton}
                type="submit"
                disabled={loading}
              >
                Login
              </Button>
              <br></br>
              <Typography onClick={toggleLogin} className={classes.noAccount}>
                No Account? Click Here
              </Typography>
            </Box>
          </form>
        )}
        {/* {authContext.authUser ? <h1> authUser Logged In!</h1> : <h1>authUser Not Logged in</h1>}
      {token ? <h1> Token Logged In!</h1> : <h1>Token Not Logged in</h1>} */}
      </Box>
    </Box>
  )
}
LoginForm.propTypes = {
  setIsLogin: PropTypes.func,
}

export default LoginForm

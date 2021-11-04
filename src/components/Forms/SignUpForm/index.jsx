import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Input, Typography } from "@mui/material"
import { Box } from "@mui/system"
import PropTypes from "prop-types"
import React from "react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import * as yup from "yup"

import { userSignUp } from "../../../actions/User/users"
import AppContext from "../../../contexts/App"
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
export default function SignUpForm({ setIsLogin }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) })
  const signUpMutation = useMutation(userSignUp)
  const Authorization = useContext(AppContext)
  const onSubmit = (data) => {
    console.log(data)
    signUpMutation.mutate(data)
  }
  const toggleLogin = () => {
    setIsLogin()
  }
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Sign Up Form</Typography>
        <Input {...register("userName")} />
        <p>{errors.userName?.message}</p>

        <Input {...register("password")} />
        <p>{errors.password?.message}</p>

        <Button onClick={toggleLogin}>
          Have Account? <br></br>Login
        </Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  )
}

SignUpForm.propTypes = { setIsLogin: PropTypes.func }

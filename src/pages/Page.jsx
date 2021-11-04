import { Box, Button, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { ErrorBoundary } from "react-error-boundary"

function ErrorFallback({ error, resetErrorBoundary }) {
  console.error(error)

  return (
    <Box role="alert">
      <Typography variant="h6">Something went wrong</Typography>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </Box>
  )
}

ErrorFallback.propTypes = {
  error: PropTypes.string,
  resetErrorBoundary: PropTypes.string,
}

export default class Page extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    const { children } = this.props

    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    )
  }
}

Page.propTypes = {
  children: PropTypes.node,
}

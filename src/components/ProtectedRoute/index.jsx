import App from "contexts/App"
import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import PropTypes from "prop-types"

// protected route component
const ProtectedRoute = (props) => {
  // destructures passed in component
  const { component: C, ...routeProps } = props
  const { token } = useContext(App)
  return (
    <Route
      {...routeProps}
      render={(p) =>
        token ? (
          // if there is a token that is stored we render the component
          <C {...p} {...routeProps} match={routeProps.computedMatch} />
        ) : (
          // if there is not a token that is stored we redurect to /login
          <div>
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: routeProps.location,
                },
              }}
            />
          </div>
        )
      }
    />
  )
}

ProtectedRoute.propTypes = {
  component: PropTypes.func,
}

export default ProtectedRoute

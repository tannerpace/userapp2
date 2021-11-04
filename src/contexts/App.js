import { isEmpty } from "lodash"
import Deferred from "promise-deferred"
import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"
import { createContext } from "react"
import { useIndexedDB } from "react-indexed-db"

const AppContext = createContext()
export default AppContext

export const AppContainer = ({ children }) => {
  const { add, clear, getAll } = useIndexedDB("auth")

  const [authUser, setAuthUserState] = useState(null)
  const [token, setToken] = useState(null)
  const [shouldRender, setShouldRender] = useState(false)
  const [dialogs, setDialogsState] = useState({})
  const dialogPromises = useRef({})

  const [snackBar, setSnackbar] = useState({
    open: false,
    message: "There was an error",
    autoHideDuration: 3000,
  })

  /**
   * Set data and open dialog
   * @param {string} name
   * @param {Object} data
   */
  const openDialog = (name, data) => {
    setDialogsState({
      ...dialogs,
      [name]: {
        data,
        open: false,
      },
    })
    setTimeout(() => {
      setDialogsState((newDialogs) => ({
        ...newDialogs,
        [name]: {
          ...newDialogs[name],
          open: true,
        },
      }))
    }, 150)
    dialogPromises.current = {
      ...dialogPromises.current,
      [name]: new Deferred(),
    }
    return dialogPromises.current[name].promise
  }

  const closeDialog = (name, confirm = false, data) => {
    // confirm is false by default so dialogs will always reject
    if (confirm) {
      // only resolves if a promise exists, useful for manually setting a dialog to be open
      dialogPromises?.current?.[name]?.resolve?.(data)
    } else {
      // only rejects if a promise exists, useful for manually setting a dialog to be open
      dialogPromises?.current?.[name]?.reject?.(data)
    }
    setDialogsState({
      ...dialogs,
      [name]: {
        ...dialogs[name],
        open: false,
      },
    })
    setTimeout(() => {
      setDialogsState({
        ...dialogs,
        [name]: {
          ...dialogs[name],
          data: {},
          open: false,
        },
      })
      delete dialogPromises.current[name]
    }, 300)
  }

  const openSnackBar = ({ open = true, ...rest }) => {
    setSnackbar({
      ...snackBar,
      ...rest,
      open,
    })
  }

  const setAuthData = ({ token, account }) => {
    clear().then(() => {
      add({ name: "token", token, account }).then(
        () => {
          setAuthUserState(account)
          setToken(token)
        },
        (error) => {
          console.log(error)
        }
      )
    })
  }

  useEffect(() => {
    // indexdb
    getAll()
      .then((res) => {
        if (!isEmpty(res)) {
          setAuthUserState(res[0].account)
          setToken(res[0].token)
        }
      })
      .finally(() => {
        setShouldRender(true)
      })
  }, [])

  return (
    <AppContext.Provider
      value={{
        setAuthData,
        token,
        authUser,
        dialogs,
        openDialog,
        closeDialog,
        snackBar,
        openSnackBar,
      }}
    >
      {shouldRender && children}
      {!shouldRender && null}
    </AppContext.Provider>
  )
}

AppContainer.propTypes = {
  children: PropTypes.node,
}

import { makeStyles } from "@mui/styles"
import ronephoto from "./ronephoto.png"


const styles = makeStyles((theme) => ({
    body: {
        backgroundColor: "#fafafa",
        height: "60vh",
        width: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "1.5rem",
        color: "#333",
        textAlign: "center",
        padding: "0",
        margin: "0",
        overflow: "hidden",
        position: "relative",
        zIndex: "0",
        ntSize: "1.2rem",

    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
        zIndex: "0",
        backgroundColor: "#fafafa",
        overflow: "hidden",
        padding: "0",
        margin: "0",
        ntSize: "1.2rem",
    },
    subtitle: {
        fontSize: "1.2rem",
        fontFamily: "Roboto",
        color: "#333",
        textAlign: "center",
        padding: "0",
        margin: "0",
        overflow: "hidden",
        position: "relative",
        zIndex: "0",
        ntSize: "1.2rem",
    },
    title: {
        fontSize: "2.5rem",
        fontFamily: "Roboto",
        color: "#333",
        textAlign: "center",
        padding: "0",
        margin: "0",
        overflow: "hidden",
        position: "relative",
        zIndex: "0",
        ntSize: "1.2rem",
    },
    image: {

        position: "absolute",
        zIndex: "-1",
        top: "0",
        left: "0",
        backgroundImage: `url(${ronephoto})`,

        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        padding: "0",
        margin: "0",
        ntSize: "1.2rem",
    },
    text: {
        fontSize: "1.2rem",
        fontFamily: "Roboto",
        color: "#333",
        textAlign: "center",
        padding: "0",
        margin: "0",
        overflow: "hidden",
        position: "relative",
        zIndex: "0",
        ntSize: "1.2rem",
    },
    button: {
        fontSize: "1.2rem",
        fontFamily: "Roboto",
        color: "#333",
        textAlign: "center",
        padding: "0",
        margin: "0",
        overflow: "hidden",
        position: "relative",
        zIndex: "0",
        ntSize: "1.2rem",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
        zIndex: "0",
        backgroundColor: "#fafafa",
        overflow: "hidden",
        padding: "0",
        margin: "0",
        ntSize: "1.2rem",
    },
    buttonContainer2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
        zIndex: "0",
        backgroundColor: "#fafafa",
        overflow: "hidden",
        padding: "0",
        margin: "0",
        ntSize: "1.2rem",
    },
    buttonContainer3: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
        zIndex: "0",
        backgroundColor: "#fafafa",
        overflow: "hidden",
        padding: "0",
        margin: "0",
        ntSize: "1.2rem",
    },
    buttonContainer4: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
        zIndex: "0",
        backgroundColor: "#fafafa",
        overflow: "hidden",
        padding: "0",
        margin: "0",
        ntSize: "1.2rem",
    },

}))

export default styles

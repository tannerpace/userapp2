// a static functional componet that displays all information about a data
import { Typography } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import Collapse from "@mui/material/Collapse"
import MoreVertIcon from "@mui/material/Icon"
import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import * as React from "react"
import { BiWind } from "react-icons/bi"
import { FaFacebookSquare, FaLinkedin, FaReddit } from "react-icons/fa"
import { FcExpand } from "react-icons/fc"
import { GiWaveSurfer } from "react-icons/gi"
import { GiIsland } from "react-icons/gi"
import { GrFavorite } from "react-icons/gr"
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
} from "react-share"

import getLevelIcon from "../../utils/getLevelIcon"
import WeatherCard from "../WeatherCard"

const url = process.env.REACT_APP_API_ENDPOINT
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const containerStyle = {
  width: `345px`,
  height: `345px`,
}

const MyMap = ({ lat, lng }) => {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={14}
      >
        {/* Child components, such as markers, info windows, etc. */}

        <></>
      </GoogleMap>
    </LoadScript>
  )
}

const MyMapper = React.memo(MyMap)
const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function LocationCard({ data }) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ width: "100%", margin: "auto", backgroundColor: "#FAF9F6" }}
    >
      <CardHeader
        avatar={
          // <Avatar sx={{ bgcolor: "#E2E7EF" }} aria-label="location">
          //   {data.locationname.charAt(0)}
          // </Avatar>
          <WeatherCard points={{ lat: data.latitude, lng: data.longitude }} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.locationname}
        subheader={data.island}
      />
      <MyMapper lat={data.latitude} lng={data.longitude} />
      <CardContent>
        <br></br>

        <Typography paragraph>
          Wind Directions <br></br> <BiWind></BiWind> {data.winddirections}
        </Typography>
        <Typography paragraph>
          Wave Potential <br></br> <GiWaveSurfer></GiWaveSurfer> {data.waves}
        </Typography>
        <Typography paragraph>
          Recomended level <br></br> {getLevelIcon(data.experience)}{" "}
          {data.experience}
        </Typography>
        <Typography paragraph>
          Island<br></br>
          <GiIsland></GiIsland> {data.island}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <GrFavorite />
        </IconButton>
        <IconButton aria-label="share">
          <RedditShareButton url={`${url}/location/get/${data.id}`}>
            <FaReddit />
          </RedditShareButton>
        </IconButton>
        <IconButton aria-label="share">
          <FacebookShareButton url={`${url}/location/get/${data.id}`}>
            <FaFacebookSquare />
          </FacebookShareButton>
        </IconButton>
        <IconButton aria-label="share">
          <LinkedinShareButton url={`${url}/location/get/${data.id}`}>
            <FaLinkedin />
          </LinkedinShareButton>
        </IconButton>
        <IconButton
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <FcExpand />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

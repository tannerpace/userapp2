import { Avatar as MuiAvatar } from "@material-ui/core"
import PropTypes from "prop-types"

// avatar components for rendering profile_image or initials
const AvatarComponent = ({ user, ...props }) => {
  const avatarProps = {}
  if (user.profile_image) {
    // only attempt to add a src attribute if there is a profile_image
    // this prevents from showing a broken image indicator and defaults to the users initials
    avatarProps["src"] = user.profile_image
  }
  return (
    <MuiAvatar {...avatarProps} {...props}>
      {/* renders the users initials from the user model in the circle in the instance there is no profile_image */}
      {user.initials}
    </MuiAvatar>
  )
}

Avatar.propTypes = {
  user: PropTypes.object
}

export default Avatar

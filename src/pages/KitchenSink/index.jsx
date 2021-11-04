import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  LinearProgress,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Step,
  StepLabel,
  Stepper,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import CheckIcon from "@material-ui/icons/Check"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import NavigationIcon from "@material-ui/icons/Navigation"
import ShareIcon from "@material-ui/icons/Share"
import PropTypes from "prop-types"
import { useState } from "react"

import useStyles from "./styles"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function getSteps() {
  return ["Knowledge Check 1 ", "Knowledge Check 2", "Knowledge Check 3"]
}

const KitchenSink = () => {
  const classes = useStyles()

  const [tabValue, setTabValue] = useState(0)

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleOpenDialog = () => {
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  /* Accordion Logic */
  const [expanded, setExpanded] = useState("panel1")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  /* Stepper Logic */
  const [activeStep] = useState(1)
  const steps = getSteps()

  return (
    <Container>
      {/* BUTTONS */}
      <Box marginBottom={5}>
        <Typography variant="h2">Buttons</Typography>
        <Divider />
        <Typography variant="h4">Contained</Typography>
        <Box className={classes.buttons}>
          <Button variant="contained">Default</Button>
          <Button variant="contained" disabled>
            Default
          </Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="primary" disabled>
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="secondary" disabled>
            Secondary
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </Box>
        <Typography variant="h4">Text</Typography>
        <Box className={classes.buttons}>
          <Button>Default</Button>
          <Button disabled>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="primary" disabled>
            Primary
          </Button>
          <Button color="secondary">Secondary</Button>
          <Button color="secondary" disabled>
            Secondary
          </Button>
          <Button href="#text-buttons" color="primary">
            Link
          </Button>
        </Box>
        <Typography variant="h4">Outlined</Typography>
        <Box className={classes.buttons}>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" disabled>
            Default
          </Button>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="primary" disabled>
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="secondary" disabled>
            Secondary
          </Button>
          <Button variant="outlined" color="primary" href="#outlined-buttons">
            Link
          </Button>
        </Box>
        <Typography variant="h4">Sizes</Typography>
        <Box className={classes.buttons}>
          <Button size="small" className={classes.margin}>
            Small
          </Button>
          <Button size="medium" className={classes.margin}>
            Medium
          </Button>
          <Button size="large" className={classes.margin}>
            Large
          </Button>
        </Box>
        <Box className={classes.buttons}>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
          >
            Small
          </Button>
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            className={classes.margin}
          >
            Medium
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className={classes.margin}
          >
            Large
          </Button>
        </Box>
        <Box className={classes.buttons}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.margin}
          >
            Small
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
          >
            Medium
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
          >
            Large
          </Button>
        </Box>
        <Box className={classes.buttons}>
          <IconButton
            aria-label="delete"
            className={classes.margin}
            size="small"
          >
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box className={classes.buttons}>
          <Fab aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon className={classes.extendedIcon} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Box>
        <Typography variant="h2">Typography</Typography>
        <Divider />
        <Box>
          <Typography variant="h1" component="h2" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            button text
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            overline text
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2">Elements</Typography>
          <Divider />
          <Box marginTop={2} marginBottom={2} maxWidth={345}>
            <Card>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                style={{
                  height: 0,
                  paddingTop: "56.25%", // 16:9
                }}
                image="https://material-ui.com/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
          <Box>
            <Typography variant="h4">Tabs</Typography>
            <AppBar position="static">
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="simple tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              Item Three
            </TabPanel>
          </Box>
          <Box>
            <Typography variant="h4">Progress</Typography>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <LinearProgress style={{ marginBottom: 8 }} />
            <LinearProgress color="secondary" />
          </Box>
          <Box>
            <Typography variant="h4">Dialog</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenDialog}
            >
              Open Dialog
            </Button>
            <Dialog
              onClose={handleCloseDialog}
              aria-labelledby="simple-dialog-title"
              open={dialogOpen}
            >
              <DialogTitle id="simple-dialog-title">
                Enter Access Code
              </DialogTitle>
              <DialogContent>
                <Typography>
                  The access to this course is limited. Please enter code to
                  continue.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseDialog}
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
        <Box>
          <Typography variant="h1">Form Elements</Typography>
          <Divider />
          <Grid container>
            <Grid item sm={6}>
              <Typography variant="h4">CheckBoxes</Typography>
              <Checkbox defaultChecked />
              <Checkbox defaultChecked color="primary" />
              <FormControlLabel
                control={<Checkbox defaultChecked name="checkedA" />}
                label="Secondary"
              />
              <FormControlLabel
                control={
                  <Checkbox defaultChecked name="checkedB" color="primary" />
                }
                label="Primary"
              />
            </Grid>
            <Grid item sm={6}>
              <Typography variant="h4">Radio</Typography>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value="female">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio />}
                    label="(Disabled option)"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Box>
            <Typography variant="h4">Select</Typography>
            <FormControl style={{ minWidth: 94, backgroundColor: "#2A343C" }}>
              <Select
                disableUnderline
                variant="filled"
                id="demo-simple-select"
                style={{ border: "none" }}
              >
                <MenuItem
                  value={10}
                  style={{
                    minHeight: "initial",
                    fontSize: "0.75rem",
                    padding: "1px 6px",
                  }}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  value={20}
                  style={{
                    minHeight: "initial",
                    fontSize: "0.75rem",
                    padding: "1px 6px",
                  }}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  value={30}
                  style={{
                    minHeight: "initial",
                    fontSize: "0.75rem",
                    padding: "1px 6px",
                  }}
                >
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box maxWidth={345}>
            <Typography variant="h4">Slider</Typography>
            <Typography id="discrete-slider" gutterBottom>
              Temperature
            </Typography>
            <Slider
              defaultValue={30}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </Box>
          <Box>
            <Typography variant="h4">Switch</Typography>
            <Switch
              defaultChecked
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Switch
              defaultChecked
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <FormControlLabel
              control={<Switch defaultChecked name="checkedA" />}
              label="Secondary"
            />
            <FormControlLabel
              control={
                <Switch defaultChecked name="checkedB" color="primary" />
              }
              label="Primary"
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="h4">TextField</Typography>
            <Box marginBottom={1} width="100%">
              <TextField id="standard-basic" label="Standard" fullWidth />
            </Box>
            <Box marginBottom={1} width="100%">
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                fullWidth
              />
            </Box>
            <Box marginBottom={1} width="100%">
              <FilledInput size="large" fullWidth />
            </Box>
            <Box marginBottom={1} width="100%">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                fullWidth
              />
            </Box>
          </Box>
          <Box marginTop={3}>
            <Typography variant="h4">Accordion</Typography>
            <Box marginTop={3}>
              <Accordion
                square
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>1.Potential of Tech</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography>2.Protect Privacy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography>3.Platform love</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          <Box marginTop={3}>
            <Typography variant="h4">Stepper</Typography>
            <Box marginTop={3} maxWidth={300}>
              <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel
                        StepIconComponent={({ completed }) =>
                          completed ? (
                            <CheckIcon style={{ fontSize: "11px" }} />
                          ) : (
                            <div
                              style={{
                                width: "11px",
                                height: "11px",
                                backgroundColor: "#00EBFF",
                                borderRadius: "100%",
                              }}
                            ></div>
                          )
                        }
                      >
                        {label}
                      </StepLabel>
                      {/* <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                              className={classes.button}
                            >
                              {activeStep === steps.length - 1
                                ? "Finish"
                                : "Next"}
                            </Button>
                          </div>
                        </div>
                      </StepContent> */}
                    </Step>
                  ))}
                </Stepper>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

TabPanel.propTypes = {
  children: PropTypes.string,
  value: PropTypes.number,
  index: PropTypes.number,
}

export default KitchenSink

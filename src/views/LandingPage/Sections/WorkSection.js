import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center" className={classes.backgroundColor}>
        <GridItem cs={12} sm={12} md={11}>
          <h2 className={classNames(classes.title, classes.labelTextClass)}>
            Work with us
          </h2>
          <h4
            className={classNames(classes.description, classes.labelTextClass)}
          >
            Have questions about our services? Fill out the form and we’ll give
            you all the answers you need.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="Your Name *"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  white
                  background={classes.backgroundWhite}
                  labelTextClass={classes.labelTextClass}
                />
                <CustomInput
                  labelText="Your Phone number *"
                  id="phone"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  true
                  background={classes.backgroundWhite}
                  labelTextClass={classes.labelTextClass}
                />
                <CustomInput
                  labelText="Your Email *"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  white
                  background={classes.backgroundWhite}
                  labelTextClass={classes.labelTextClass}
                />
              </GridItem>
              <CustomInput
                labelText="Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
                white
                background={classes.backgroundWhite}
                labelTextClass={classes.labelTextClass}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button className="hvr" variant="light" color="white">
                  <span
                    style={{
                      color: "black",
                      fontFamily: ["Nunito Sans", "sans-serif"].join(","),
                      fontWeight: "800",
                    }}
                  >
                    Send Message
                  </span>
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

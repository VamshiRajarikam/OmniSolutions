// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Fingerprint from "@material-ui/icons/Computer";
import VerifiedUser from "@material-ui/icons/PhoneIphone";
// @material-ui/icons
import WebIcon from "@material-ui/icons/Public";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import React from "react";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            INFORMATION TECHNOLOGY SERVICES & CONSULTING
          </h2>
          <h5 className={classes.description}>
            Omni Solutions includes a comprehensive consult to help identify
            gaps and opportunities, a comprehensive report that includes a
            project plan with timelines and milestones, a cost analysis, and a
            schedule. We also offer a suite of quality products that will help
            you get there quickly and smoothly.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4} className="hvr">
            <InfoArea
              title="Web Applications"
              description="Modern web application for your business. We build responsive, scalable, secure single-page applications along with support for progressive web applications."
              icon={WebIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className="hvr">
            <InfoArea
              title="Mobile Applications"
              description="Improve your user's experience and enhance accessibility through mobile apps. Mobile app unlocks the potential to access all system resources. We support iOS and Android platforms."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className="hvr">
            <InfoArea
              title="Desktop Applications"
              description="Uninterrupted business transactions through desktop applications. Desktop app offers offline capabilities, more security and fast. We support windows and mac operating systems."
              icon={Fingerprint}
              iconColor="rose"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

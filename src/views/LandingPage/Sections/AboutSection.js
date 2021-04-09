import { Card } from "@material-ui/core";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import image from "assets/img/about.jpg";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
import Button from "components/CustomButtons/Button.js";
const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <GridContainer justify="center" className="">
        <GridItem xs={6} sm={6} md={6}>
          <img src={image} alt="..." width="100%" />
          {/* <p className="text-primary font-weight-bold" text="dark">
            ABOUT OMNI SOLUTIONS
          </p>
          <h2 className={classes.title}>
            Your Partner for Software Innovation
          </h2>
          <h5 className={classes.description}>
            After 10 years in the software engineering industry, we decided to
            alter direction. Now, we share use our experience to help others.
            Our ramp up process is designed to empower your technical team and
            outfit them with the tools they need to succeed. Business mentors
            are key—that’s why when it comes to client selection, we’re choosy.
            We want to give each of you the time and guidance they deserve. We
            didn’t get there alone. And neither will you. Call kivyo today.
          </h5> */}
        </GridItem>
        <GridItem xs={6} sm={6} md={6}>
          <p className="text-primary font-weight-bold">ABOUT OMNI SOLUTIONS</p>
          <h2 className={classes.title}>
            Your Partner for Software Innovation
          </h2>
          <h5 className={classes.description}>
            We provide innovative software solutions and services to solve
            business problems. We share use our experience to help others. Our
            ramp up process is designed to empower your technical team and
            outfit them with the tools they need to succeed. Business mentors
            are key—that’s why when it comes to client selection, we’re choosy.
            We want to give each of you the time and guidance they deserve. We
            didn’t get there alone. And neither will you. Call Omni Solutions
            today.
          </h5>
          <Button href="tel:+919966777629" type="button" color="primary">
            CALL US
          </Button>
        </GridItem>
      </GridContainer>
    </Card>
  );
}

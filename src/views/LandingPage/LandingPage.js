// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import AboutSection from "./Sections/AboutSection.js";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="mni Solutions"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Growth made simple</h1>
              <h4>
                Help your business thrive with cloud‑managed IT solutions that
                offer unlimited possibilities
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="/contact-us"
                rel="noopener noreferrer"
              >
                Schedule a demo
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.paddingVertical}>
          <AboutSection />
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.paddingVertical}>
          <WorkSection className={classes.paddingZero} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

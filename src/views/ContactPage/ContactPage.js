// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import WorkSection from "../LandingPage/Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Omni Solutions"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className="mt-3 pt-3">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5} className={classes.center}>
                <div>
                  <h2 className={classes.header}>Contact us</h2>
                </div>
                <div className="boxy">
                  <div className={classes.contactBox}>
                    <div className="row">
                      <div className="col-2 p-0">
                        <i
                          className={classes.socialIcons + " fas fa-globe ml-3"}
                        ></i>
                      </div>
                      <div className="col-10">
                        <a
                          href="https://goo.gl/maps/Eb4wikqdeRqtzHZS7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.deformat}
                        >
                          <h6>Address:</h6>
                          <p className="w-100">
                            3-96/2, D.V.S Nagar, Munganoor, Hayathnagar,
                            Hyderabad, TS 501511
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boxy">
                  <div className={classes.contactBox}>
                    <div className="row">
                      <div className="col-2 p-0">
                        <i
                          className={
                            classes.socialIcons + " fas fa-envelope ml-3"
                          }
                        ></i>
                      </div>
                      <div className="col-10">
                        <a
                          href="mailto:info@omnisolutionsindia.com%20"
                          className={classes.deformat}
                        >
                          <h6>Email:</h6>
                          <span>info@omnisolutionsindia.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boxy">
                  <div className={classes.contactBox}>
                    <div className="row">
                      <div className="col-2 p-0">
                        <i
                          className={
                            classes.socialIcons + " fas fa-phone-volume"
                          }
                        ></i>
                      </div>
                      <div className="col-10">
                        <h6>Phone:</h6>
                        <a
                          href="tel:+919966777629"
                          className={classes.deformat}
                        >
                          <p>+91-9966777629</p>
                        </a>
                        <a
                          href="tel:+919966777631"
                          className={classes.deformat}
                        >
                          <p>+91-9966777631</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </GridItem>
              <GridItem
                xs={12}
                sm={12}
                md={7}
                className={classNames(classes.center)}
              >
                <WorkSection />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

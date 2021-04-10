// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import profile from "assets/img/faces/christian.jpg";
// import studio1 from "assets/img/examples/studio-1.jpg";
// import studio2 from "assets/img/examples/studio-2.jpg";
// import studio3 from "assets/img/examples/studio-3.jpg";
// import studio4 from "assets/img/examples/studio-4.jpg";
// import studio5 from "assets/img/examples/studio-5.jpg";
// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import WorkSection from "../LandingPage/Sections/WorkSection";
// import { Input } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                        <h6>Address:</h6>
                        <p className="w-100">
                          3-96/2, D.V.S Nagar, Munganoor, Hayathnagar,
                          Hyderabad, TS 501511
                        </p>
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
                        <h6>Email:</h6>
                        <p>info@omnisolutionsindia.com</p>
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
                        <p>+91-9966777629</p>
                        <p>+91-9966777631</p>
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

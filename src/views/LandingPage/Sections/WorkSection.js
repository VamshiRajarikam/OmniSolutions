import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import Check from "@material-ui/icons/Check";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import classNames from "classnames";
import {
  validateText,
  validatePhoneNumber,
  validateEmail,
} from "utilities/utilities.js";
import emailjs from "emailjs-com";
const useStyles = makeStyles(styles);
export default function WorkSection() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submittedForm, setSubmittedForm] = useState(false);
  const [submittedFormError, setSubmittedFormError] = useState(false);
  function sendEmail() {
    const templateParams = {
      user_name: name,
      contact_number: phone,
      user_email: email,
      message,
    };
    emailjs
      .send(
        "service_avoha7w",
        "template_gomy8dh",
        templateParams,
        "user_HNQroc5LFdN4K0Cyl5rhS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmittedFormError(false);
          resetForm();
        },
        (error) => {
          console.log(error.text);
          setSubmittedFormError(true);
        }
      );
  }
  const validation = () => {
    validateText(name) ? setNameError(false) : setNameError(true);
    validatePhoneNumber(phone) ? setPhoneError(false) : setPhoneError(true);
    validateEmail(email) ? setEmailError(false) : setEmailError(true);
    if (
      !validateText(name) ||
      !validatePhoneNumber(phone) ||
      !validateEmail(email)
    ) {
      // setSubmittedFormError(true);
    } else {
      // setSubmittedFormError(false);
      sendEmail();
    }
  };
  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setSubmittedForm(true);
    setTimeout(() => {
      setSubmittedForm(false);
    }, 5000);
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };

  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const messageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={classes.section}>
      {submittedForm && (
        <SnackbarContent
          message={
            <span>
              <b>SUCCESS:</b> Message sent...
            </span>
          }
          close
          color="success"
          icon={Check}
        />
      )}
      {submittedFormError && (
        <SnackbarContent
          message={
            <span>
              <b>Error:</b> Something went wrong. Please try again later...
            </span>
          }
          close
          color="danger"
          icon="info_outline"
        />
      )}
      <Clearfix />

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
                  error={nameError}
                  inputProps={{
                    onChange: nameChange,
                    value: name,
                  }}
                  background={classes.backgroundWhite}
                  labelTextClass={classes.labelTextClass}
                />
                <CustomInput
                  labelText="Your Phone number *"
                  id="phone"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: phoneChange,
                    value: phone,
                  }}
                  error={phoneError}
                  white
                  background={classes.backgroundWhite}
                  labelTextClass={classes.labelTextClass}
                />
                <CustomInput
                  labelText="Your Email *"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: emailChange,
                    value: email,
                  }}
                  error={emailError}
                  white
                  background={classes.backgroundWhite}
                  labelTextClass={classes.labelTextClass}
                />
              </GridItem>
              <CustomInput
                labelText="Message"
                id="message"
                name="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  onChange: messageChange,
                  value: message,
                }}
                white
                background={classes.backgroundWhite}
                labelTextClass={classes.labelTextClass}
              />

              <GridItem xs={12} sm={12} md={4}>
                <Button
                  className="hvr"
                  variant="light"
                  color="white"
                  onClick={validation}
                >
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

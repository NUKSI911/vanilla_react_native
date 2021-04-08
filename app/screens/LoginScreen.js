import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from 'yup'
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const LoginScreen = ({}) => {
    const ValidationSchema=Yup.object().shape({
        email:Yup.string().email().min(4).required().label('Email'),
        password:Yup.string().min(6).required().label('Password')
    })
    return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.jpg")}
      />

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={ValidationSchema}
      >
        {({ handleChange, handleSubmit,errors,setFieldTouched,touched }) => {
          return (
            <>
            
              <AppFormField
                name="email"
                placeholder="Email"
                icon="email"
                autoCapitalize="none"             
                autoCorrect={false}
                keyboardType="email-address"
                texContentType="emailAddress"
              />
              <AppFormField
                name="password"
                secureTextEntry
                placeholder="Password"
                icon="lock"
                autoCapitalize="none" 
                autoCorrect={false}     
                texContentType="password"
              />

              <SubmitButton title="Login" />
            </>
          );
        }}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80.5,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;

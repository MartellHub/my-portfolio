import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Spinner,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit(); // Use the useSubmit hook here
  const { onOpen } = useAlertContext();

  useEffect(() => {
    response && onOpen(response?.type, response?.message);
  }, [isLoading]);

  
  const formik = useFormik({
    initialValues: { firstName: "", email: "", type: "", comment: "" },
    onSubmit: (values) => {
      submit("", values);
      formik.setSubmitting(false);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      type: Yup.string().required("Type of enquiry is required"),
      comment: Yup.string()
        .required("Your message is required")
        .test(
          "min-length",
          "Must be at least 25 characters",
          (value) => value.length >= 25
        ),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contact-me-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")} // Use getFieldProps to make it controlled
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")} // Use getFieldProps to make it controlled
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option style={{ backgroundColor: "black" }} value="hireMe">
                    Freelance project proposal
                  </option>
                  <option
                    style={{ backgroundColor: "black" }}
                    value="openSource"
                  >
                    Open source consultancy session
                  </option>
                  <option style={{ backgroundColor: "black" }} value="other">
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  {...formik.getFieldProps("comment")} // Use getFieldProps to make it controlled
                  height={250}
                  id="comment"
                  name="comment"
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                {isLoading ? <Spinner color="white" size="md" /> : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

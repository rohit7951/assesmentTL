import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import FormInput from "../../../DesignSystem/Form/FormInput";
import SubmitButton from "../../../DesignSystem/Form/SubmitButton";
import Title from "../../../DesignSystem/Title";
import { Applicant } from "../../../Domain/Applicant";
import { EligibleCards } from "../../../Domain/EligibleCards";
import Error from "../../../DesignSystem/Error/Error";

const FormWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

interface FormValues {
  name: string;
  email: string;
  address: string;
}

interface Props {
  newProductApply: (applicant: Applicant) => Promise<EligibleCards>;
  setEligibleCards: (eligibleCards: EligibleCards) => void;
}

enum statuses {
  WAITING,
  IN_PROGRESS,
  FINISHED,
  ERROR,
}

const EligibilityApplication = (props: Props) => {
  const [error, setError] = useState("");
  const [status, setStatus] = useState(statuses.WAITING);

  const applyForNewProduct = async (applicant: Applicant) => {
    try {
      // TODO: request state could be extracted into separate hook
      setStatus(statuses.IN_PROGRESS);
      const result = await props.newProductApply(applicant);
      console.log(result);
      props.setEligibleCards(result);
      setStatus(statuses.FINISHED);
      setError("");
    } catch (errors) {
      console.log(errors);
      setStatus(statuses.ERROR);
      setError(
        errors.reduce((prev: string, curr: { message: string }) => {
          return prev + " " + curr.message;
        }, "")
      );
    }
  };

  const { handleChange, handleSubmit, values } = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    onSubmit: async (values) =>
      applyForNewProduct({
        name: values.name,
        email: values.email,
        address: values.address,
      }),
  });

  return (
    <FormWrapper data-testid={statuses[status]}>
      <Title>Cards</Title>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={values.name}
          placeholder="Name"
        />
        <FormInput
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Email"
        />
        <FormInput
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
          value={values.address}
          placeholder="Address"
        />
        <Error>{error}</Error>
        <SubmitButton text="Submit" />
      </form>
    </FormWrapper>
  );
};

export default EligibilityApplication;

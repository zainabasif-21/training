import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './FormikForm.css'


export default function FormikForm({ formConfig, onSubmit }) {
  let initialValues = {}
  let validationSchema = {}

  useEffect(() => {
    formConfig.fields.forEach((val) => {
      validationSchema[val.name] = val.validation.isRequired ? Yup.string().required(val.name + ' is required') : false
    })
    formConfig.fields.forEach((val) => {
      initialValues[val.name] = val.initialValue
    })

    console.log(validationSchema)
  }, [formConfig])

  console.log(validationSchema, initialValues)


  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape(validationSchema)}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <Form>
            {formConfig.fields.map((field) => (
              <div className='inputDiv' key={field.name}>
                <label >{field.label}</label>
                {field.type === "select" ? (
                  <Field as="select" name={field.name}>
                    {field.label}
                    {field.options.map((option) => (
                      <option name={option.label} key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                ) : field.type === "radio" ? (
                  // Render radio buttons
                  <div>
                    {field.options.map((option) => (
                      <div key={option.value}>
                        <Field
                          type="radio"
                          id={option.value}
                          name={field.name}
                          value={option.value}
                        />
                        <label for={option.value}>{option.label}</label>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Render other input types (e.g., text, number, email)
                  <Field
                    name={field.name}
                    type={field.inputType}
                    component={field.component}
                  />
                )}
                <ErrorMessage name={field.name} component="div" />
              </div>
            ))}
            <button type="submit" onClick={() => {
              onSubmit(formikProps.values)
              formikProps.resetForm();
              formikProps.setSubmitting(false);
            }}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

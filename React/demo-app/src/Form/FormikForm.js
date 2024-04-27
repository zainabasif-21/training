import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './FormikForm.css'


export default function FormikForm({ formConfig, onSubmit }) {
  let initialValues = {}
  let validationSchema = {}
  const [initialValuesState, setInitialValuesState] = useState({});
  const [validationSchemaState, setValidationSchemaState] = useState(null);

  useEffect(() => {
    formConfig.fields.forEach((val) => {

      switch (val.name) {
        case 'email':
          validationSchema[val.name] = Yup.string().email().required(val.name + ' is required')
          break;
        default:
          validationSchema[val.name] = Yup.string().required(val.name + ' is required')
          break;
      }
    })
    formConfig.fields.forEach((val) => {
      initialValues[val.name] = val.initialValue
    })
    console.log(validationSchema, initialValues)
    setInitialValuesState(initialValues);
    setValidationSchemaState(validationSchema);
  }, [formConfig])


  const renderForm = () => {
    return (
      <div>
        <Formik
          initialValues={initialValuesState}
          validationSchema={Yup.object().shape(validationSchemaState)}
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
                          <label htmlFor={option.value}>{option.label}</label>
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
              <button type="submit" disabled={!formikProps.isValid} onClick={() => {
                onSubmit(formikProps.values)
                formikProps.setSubmitting(true);
                formikProps.resetForm();
              }}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>);
  }

  return (
    renderForm()
  )
}

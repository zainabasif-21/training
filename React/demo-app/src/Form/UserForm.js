import React from "react";
import FormikForm from "./FormikForm";
import * as Yup from "yup";


//Template and containing fileds of form along with intital values submit 
//handler and validation schema  
export default function UserForm() {
  const formConfig = {
    fields: [
      {
        name: "name",
        label: "Name",
        type: "input",
        inputType: "text",
        component: "input"
      },
      {
        name: "age",
        label: "Age",
        type: "input",
        inputType: "number",
        component: "input"
      },
      {
        name: "role",
        label: "Role",
        type: "select",
        options: [
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" }
        ],
        component: "select"
      },
      {
        name: "email",
        label: "Email",
        type: "input",
        inputType: "email",
        component: "input"
      },
      {
        name: "gender",
        label: "Gender",
        type: "radio",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" }
        ],
        component: "radio"
      },
      {
        name: "qualification",
        label: "Qualification",
        type: "select",
        options: [
          { label: "UG", value: "UG" },
          { label: "PG", value: "PG" },
          { label: "SCHOOL", value: "SCHOOL" }
        ],
        component: "select"
      }

    ],
    validationSchema: {
      name: Yup.string().required("Name is required"),
      gender: Yup.string().required("Gender is required"),
      age: Yup.number()
        .required("Age is required")
        .min(0, "Age must be a positive number")
        .max(100, 'Age must be less than 100'),

      email: Yup.string().email("Invalid email").required("Email is required"),
      role: Yup.string().required("Role is required"),
      qualification: Yup.string().required('Qualification is required')
    }
  };

  const initialValues = {
    name: "",
    gender: "",
    age: "",
    email: "",
    role: "",
    qualification: ""

  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);

  };


  return (
    <div>
      <h2>Add New User</h2>
      <FormikForm
        formConfig={formConfig}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
};


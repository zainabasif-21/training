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
        component: "input",
        initialValue: "",
        validation: {
          isRequired: true,
          
        }
      },
      {
        name: "age",
        label: "Age",
        type: "input",
        inputType: "number",
        component: "input",
        initialValue: "",
        validation: {
          isRequired: true,
          
        }
      },
      {
        name: "role",
        label: "Role",
        type: "select",
        options: [
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" }
        ],
        component: "select",
        initialValue: "",
        validation: {
          isRequired: true,
          
        }
      },
      {
        name: "email",
        label: "Email",
        type: "input",
        inputType: "email",
        component: "input",
        initialValue: "",
        isRequired: true,
        validation: {
          isRequired: true,
          
        }
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
        component: "radio",
        initialValue: "",
        validation: {
          isRequired: true,
          
        }
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
        component: "select",
        initialValue: "",
        isRequired: true,
        validation: {
          isRequired: true,
          
        }
      }

    ]
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);

  };


  return (
    <div>
      <h2>Add New User</h2>
      <FormikForm
        formConfig={formConfig}
        onSubmit={handleSubmit}
      />
    </div>
  );
};


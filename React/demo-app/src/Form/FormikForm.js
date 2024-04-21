import React from 'react'
import { useFormik } from 'formik'
import './Formik.css'

export default function FormikForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            age: 0,
            temp1: '',
            temp2: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }, validate: (values) => {

        }
    })
    console.log(formik.values)
    return (
        <div>
            <h1>Dynamic Form with formik</h1>
            <div className='formDiv'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='inputDiv'>
                        <label>Name</label>
                        <input name='name' id='' onChange={formik.handleChange} value={formik.values.name} type='text' />
                    </div>

                    <div className='inputDiv'>
                        <label>Email</label>
                        <input name='email' id='' onChange={formik.handleChange} value={formik.values.email} type='' />
                    </div>

                    <div className='inputDiv'>
                        <label>Age</label>
                        <input name='age' id='' onChange={formik.handleChange} value={formik.values.age} />
                    </div>

                    <div className='inputDiv'>
                        <label>Gender</label>
                        <input name='temp1' id='' onChange={formik.handleChange} value={formik.values.temp1} type='' />
                    </div>

                    <div className='inputDiv'>
                        <label>Date</label>
                        <input name='temp2' id='' onChange={formik.handleChange} value={formik.values.temp2} />
                    </div>

                </form>
            </div>
        </div>

    )
}

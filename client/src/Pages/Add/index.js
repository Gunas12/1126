import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  about: Yup.string().required('Required'),
  icon: Yup.string().required('Required'),
  img: Yup.string().required('Required'),
  name2: Yup.string().required('Required'),
  mark: Yup.string().required('Required'),

});
function Index() {
  const [data, setdata] = useState([])
  return (
    <Formik
      initialValues={{
        name: '',
        name2: '',
        about: '',
        icon: '',
        img: '',
        mark: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        const newdata = {
          name: values.name,
          name2: values.name2,
          about: values.about,
          icon: values.icon,
          img: values.img,
          mark: values.mark
        }
        console.log(data);
        axios.post("http://localhost:7070/product", newdata)

        setdata([...data, newdata])


        alert("adddd")
        resetForm({ values: '' })

      }}
    >

      {({ errors, touched }) => (
        <Form className='container display-flex-center align-items-center mt-5' style={{ marginTop: "200px" }}>
          <Field name="name" type="text" style={{ marginTop: "200px" }} /><br />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}<br />
          <Field name="about" /><br />
          {errors.about && touched.about ? (
            <div>{errors.about}</div>
          ) : null}<br />
          <Field name="img" /><br />
          {errors.img && touched.img ? (
            <div>{errors.img}</div>
          ) : null}<br />
          <Field name="icon" /><br />
          {errors.icon && touched.icon ? (
            <div>{errors.icon}</div>
          ) : null}<br />
          <Field name="name2" /><br />
          {errors.name2 && touched.name2 ? (
            <div>{errors.name2}</div>
          ) : null}<br />
          <Field name="mark" type="number" /><br />
          {errors.mark && touched.mark ? (
            <div >{errors.mark}</div>
          ) : null}<br />

          <button type="submit" className='btn btn-info'>Submit</button>
        </Form>
      )}

    </Formik>

  )
}
export default Index
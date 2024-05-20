import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../../context/context';



const AddPage = () => {
  const {data,setData} = useContext(MainContext)

    const formik = useFormik({
      initialValues: {
      id: uuidv4(),
        name: '',
        image: '',
        price: '',
        title: '',
        count: '',
        totalPrice: ""
      },
  
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
         axios
        .post("http://localhost:8080/api/mehsullar", {
          id:uuidv4(),
          name:values.name,
          image:values.image,
          price:values.price,
          title:values.title,
          count:1,
          totalPrice:values.price,
         
       
         })
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          placeholder='Product Name'
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
  
        <label htmlFor="image">Product Image</label>
        <input
          id="image"
          placeholder='Product Image URL'
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        {formik.errors.image ? <div>{formik.errors.image}</div> : null}
  
        <label htmlFor="price">Product Price</label>
        <input
          id="price"
          placeholder='Product Price'
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price ? <div>{formik.errors.price}</div> : null}

        <label htmlFor="title">Product Title</label>
        <input
          id="title"
          placeholder='Product Title'
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title ? <div>{formik.errors.title}</div> : null}
  
        <button type="submit">Submit</button>
      </form>
  )
}

export default AddPage

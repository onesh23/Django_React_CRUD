import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const UpdateProduct = () => {

    const [image,setImage] = useState(null)
    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')

    const navigate = useNavigate();

    const {id} = useParams();

    const loadProducts = async ()=>{
        const { data } = await axios.get(`http://localhost:8000/product/${id}`)
        console.log(data)
        setImage(data.image)
        setName(data.name)
        setDesc(data.desc)
    }

    const UpdateProductInfo = async()=>{
        let formfield = new FormData()
        
        formfield.append('name', name)
        formfield.append('desc', desc)
        if(image != null){
            formfield.append('image',image)
        }


      try{
        await axios({
            method: 'put',
            url : `http://localhost:8000/product/${id}/`,
            data : formfield
        })
        .then((response)=>{
            console.log(response.data)
            navigate('/')
        })
      }
      catch(error){
        console.log("Something went wrong")
      }
    }

    useEffect(()=>{
        loadProducts()
    }, [])

  return (
    <>
        <h1>THis is update page</h1>
        <div className='container'>
            <div className='form-group'>
                <img src={image} height='300px' width='300px' alt='product' />
                 <div className='form-control mb-3 mt-2'>
                    <input 
                        type='file'
                        className='form-control form-control-lg'
                        placeholder='Enter Product Name '
                        name='image'
                        
                        onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>
                <div className='form-control mb-3 mt-2'>
                    <input 
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Product Name '
                        name='name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className='form-control '>
                     <textarea 
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Enter Product Description  '
                        name='desc'
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                    />
                </div>

                <button className='btn btn-success mt-4 ' onClick={UpdateProductInfo}>ADD PRODUCT</button>
            </div>
        </div>
    </>
  )
}

export default UpdateProduct
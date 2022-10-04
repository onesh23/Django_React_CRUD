import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [image,setImage] = useState(null)
    const [name,setName] = useState('')
    const [desc,setDesc] = useState('')

    const navigate = useNavigate();

    const AddProductInfo = async ()=>{
        let formfield = new FormData()
        formfield.append('name', name)
        formfield.append('desc', desc)
        if(image != null){
            formfield.append('image',image)
        }
        
        await axios({
            method: 'post',
            url : 'http://localhost:8000/product/',
            data : formfield
        })
        .then((response)=>{
            console.log(response.data)
            navigate('/')
        })
    }

  return (
    <>
        
        <div className='container'>
            <div className='form-group'>
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

                <button className='btn btn-success mt-4 ' onClick={AddProductInfo}>ADD PRODUCT</button>
            </div>
        </div>
    </>
  )
}

export default AddProduct
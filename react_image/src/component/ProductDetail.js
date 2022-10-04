import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [product,setProduct] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    const getProduct =async ()=>{
        const { data } = await axios.get(`http://localhost:8000/product/${id}`)
        console.log(data)
        setProduct(data)
    }   
    useEffect(()=>{
        getProduct()
    },[])

    // delete operation 

    const deleteProduct = async (id)=>{
        await axios.delete(`http://localhost:8000/product/${id}`)
        navigate('/')
    }

  return (
    <>
        <div >
           <Row className='justify-content-center'>
                <Col>
                    <Container>
                        <Card style={{ width: '22rem' }} className='p-2 shadow-lg '>
                            <Card.Img variant="top" src={product.image} height='250px' />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                {product.desc}
                                </Card.Text>
                                <Link to={`/${product.id}/update`} className='btn btn-warning btn-lg m-3'>UPDATE</Link>
                                <Link onClick={()=> deleteProduct(product.id)} className='btn btn-danger btn-lg'>DELETE</Link>

                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
           </Row>

        </div>
    </>
  )
}

export default ProductDetail
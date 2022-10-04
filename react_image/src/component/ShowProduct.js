import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShowProduct = () => {
    const [products,setProducts] = useState([])


    const getProducts = async ()=>{
        const response = await axios.get('http://localhost:8000/product/')
        // console.log(response.data)
        setProducts(response.data)
    }

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <>  
        <hr />
        <h1 className='text-center mb-5'>........... Displaying All the Products ...........</h1>
        <hr />
        <div className='container'>

        <Row className='justify-content-center g-3'>
        {
            products.map((product,index)=>(
                <>
                {/* <div>
                    <img src={product.image} height='200px' />
                    <p>{product.name}</p>
                    <p>{product.desc}</p>

                </div> */}
            
                    
                       <Col lg={4} md={6} sm={12}>
                    
                            <Card style={{ width: '22rem' }} className='p-2 shadow-lg '>
                                <Card.Img variant="top" src={product.image} height='250px' />
                                <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                {product.desc}
                                </Card.Text>
                                <Link to={`/${product.id}`} className='btn btn-info btn-lg'> PRODUCT Detail</Link>
                                </Card.Body>
                            </Card>
                       
                      </Col>
               </>
            ))
        }
        </Row>
        </div>
    </>
  )
}

export default ShowProduct
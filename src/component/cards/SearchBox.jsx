import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';

const SearchBox = ({ getData, error }) => {

    const [userName, setuserName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setuserName('')
        getData(userName)
    }

    return (
        <div className='m-5' style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className='rounded-3 p-4'>
                <p className='display fs-3 text-center'>Get github user details</p>
                <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Form.Label className='text-muted text-center'>Enter gihtub username</Form.Label>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Example: NihalP01" required value={userName} onChange={(e) => setuserName(e.target.value)} />
                    </Form.Group>
                    <Button className='mt-2' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </div >
    )
}

export default SearchBox


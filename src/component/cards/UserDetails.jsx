import React from 'react'
import { Button, Card } from 'react-bootstrap';

const UserDetails = (props) => {
    return (
        <div className='m-5 text-center' style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className='p-4 bg-light' style={{ width: '24rem', alignItems: 'center' }}>
                <img className='img-thumbnail rounded-circle' alt='user imgae' src={props.avatar} style={{ width: '100%', maxWidth: '10rem', height: 'auto' }} />
                <p className='display fs-2 fw-bold mt-1 mb-0'>{props.fullName}</p>
                <p className='card-text fs-5 mb-0'>{props.company}</p>
                <p className='card-text'>{props.loaction}</p>
                <p>{props.bio}</p>
                <p className='mb-0'>Followers: {props.follower} | Following: {props.following}</p>
                <p>Public Repositories: {props.public_repos}</p>
            </Card>
        </div>
    )
}

export default UserDetails

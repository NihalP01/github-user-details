import React from 'react'
import { Button, Card } from 'react-bootstrap';

const UserDetails = ({ avatar, fullName, loaction, bio, company, follower, following, public_repos }) => {
    return (
        <div className='m-5 text-center' style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className='p-4 bg-light' style={{ width: '24rem', alignItems: 'center' }}>
                <img className='img-thumbnail rounded-circle' src={avatar} style={{ width: '100%', maxWidth: '10rem', height: 'auto' }} />
                <p className='display fs-2 fw-bold mt-1 mb-0'>{fullName}</p>
                <p className='card-text fs-5 mb-0'>{company}</p>
                <p className='card-text'>{loaction}</p>
                <p>{bio}</p>
                <p className='mb-0'>Followers: {follower} | Following: {following}</p>
                <p>Public Repositories: {public_repos}</p>
            </Card>
        </div>
    )
}

export default UserDetails

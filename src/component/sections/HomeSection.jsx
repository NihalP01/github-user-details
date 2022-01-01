import React, { useState, } from 'react'
import { Cards } from '../cards/Cards'
import { apis } from '../../network/apis'


const HomeSection = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function getData(user) {
        try {
            setLoading(true)
            const response = await apis(user)
            setData(response.data)
            setLoading(false)
        } catch (error) {
            setData(null)
            console.log(error.message)
            setError(`User not found with username ${user}`)
            setLoading(false)
        }
    }

    return (
        <div>
            <Cards.SearchBox
                getData={getData}
            />
            {loading ? (<div>
                <h5 className='text-center'>Loading...</h5>
            </div>) : (
                <>
                    {data !== null ? (<Cards.UserDetails
                        avatar={data.avatar_url}
                        fullName={data.name}
                        loaction={data.location}
                        bio={data.bio}
                        company={data.company}
                        follower={data.followers}
                        following={data.following}
                        public_repos={data.public_repos}
                    />) : <div>
                        <h6 className='text-center text-danger'>{error}</h6>
                    </div>}
                </>
            )
            }
        </div>
    )
}

export default HomeSection

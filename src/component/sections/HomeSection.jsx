import React, { useState, } from 'react'
import { Cards } from '../cards/Cards'
import { apis } from '../../network/apis'


const HomeSection = () => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    async function getData(user) {
        const response = await apis(user)
        if (response == null) {
            setData(null)
            setError(`No data found with username ${user}!`)
        } else {
            setData(response.data)
            console.log(response.data)
        }
    }

    return (
        <div>
            <Cards.SearchBox
                getData={getData}
            />

            {data && <Cards.UserDetails
                avatar={data.avatar_url}
                fullName={data.name}
                loaction={data.location}
                bio={data.bio}
                company={data.company}
                follower={data.followers}
                following={data.following}
                public_repos={data.public_repos}
            />}
        </div>
    )
}

export default HomeSection

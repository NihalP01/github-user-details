import React, { useState, } from 'react'
import { Cards } from '../cards/Cards'
import { apis } from '../../network/apis'


const HomeSection = () => {

    const [data, setData] = useState([])

    async function getData(user) {
        const response = await apis(user)
        if (response == null) {
            setData('0')
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
            
            <Cards.UserDetails
                avatar={data.avatar_url}
                fullName={data.name != null ? data.name : "No user found"}
                loaction={data.location}
                bio={data.bio}
                company={data.company}
                follower={data.followers}
                following={data.following}
                public_repos={data.public_repos}
            />
        </div>
    )
}

export default HomeSection

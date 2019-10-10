import React from 'react'

const ArtistCard = (props) => {
    return (
        <div className='artistCon'>
                <p className='profileText'>
                    {props.artist.name}
                </p>
                <p className='profileText'>
                    {props.artist.realname}
                </p>
                <p className='profileText'>
                    {props.artist.profile}
                </p>
            </div>
    )
}

export default ArtistCard
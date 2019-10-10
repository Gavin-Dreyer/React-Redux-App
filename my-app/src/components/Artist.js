import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchArtist } from '../actions'

import ArtistCard from './ArtistCard'



const Artist = (props) => {
    useEffect(() => {
        props.fetchArtist()
    }, [])

    console.log(props)

    return (
        <div className='artist'>
            {props.artist.map(item => (
                <ArtistCard artist={item}/>
            ))}
        </div>
    )
}

const mapStateToPros = state => {
    return {
        artist: state.artist,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToPros,
    { fetchArtist }
)(Artist)
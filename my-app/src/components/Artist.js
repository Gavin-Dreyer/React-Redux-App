import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchArtist } from '../actions'

import ArtistCard from './ArtistCard'



const Artist = (props) => {
    useEffect(() => {
        props.fetchArtist()
    }, [])

    let src1 = 'https://img.discogs.com/CIfJS5wPFK0aJQYqvbf362Jirqg=/600x653/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-25058-1518119867-7595.jpeg.jpg'
    let src2 = 'https://img.discogs.com/DoEC-OObQlmMmb4tPcVzzC8l1ys=/500x500/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-151223-1450005270-6695.jpeg.jpg'
    let src3 = 'https://img.discogs.com/9BirYHcwwNjBS6dLTCaJH8pDsZc=/fit-in/168x211/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-286-1098542594.jpg.jpg'
    let src4 = 'https://img.discogs.com/oVREWC7BgxyUeDYXpsEHp7ii_Nw=/fit-in/539x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-25872-1233416858.jpeg.jpg'

    // console.log(props)

    return (
        <div className='artist'>
            {props.artist.map(item => (
                <ArtistCard artist={item} key={item.id} src1={src1} src2={src2} src3={src3} src4={src4} />
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
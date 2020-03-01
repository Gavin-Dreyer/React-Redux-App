import React from 'react'

const ArtistCard = (props) => {

    // console.log(props.artist)

    const renderImg = () => {
        if(props.artist.id === 25872) {
            return <img src='https://img.discogs.com/oVREWC7BgxyUeDYXpsEHp7ii_Nw=/fit-in/539x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-25872-1233416858.jpeg.jpg' className='artistImg' />
        } else if (props.artist.id === 286) {
            return <img src='https://img.discogs.com/9BirYHcwwNjBS6dLTCaJH8pDsZc=/fit-in/168x211/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-286-1098542594.jpg.jpg' className='artistImg' />
        } else if (props.artist.id === 151223) {
            return <img src='https://img.discogs.com/DoEC-OObQlmMmb4tPcVzzC8l1ys=/500x500/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-151223-1450005270-6695.jpeg.jpg' className='artistImg' />
        } else {
            return <img src='https://img.discogs.com/CIfJS5wPFK0aJQYqvbf362Jirqg=/600x653/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-25058-1518119867-7595.jpeg.jpg' className='artistImg' />
        }
    }
    
    return (
        <div className='artistCon'>
                <p className='profileText'>
                    {props.artist.name}
                </p>
                <p className='profileText'>
                    {props.artist.realname}
                </p>
                {renderImg()}
                <p className='profileText'>
                    {props.artist.profile}
                </p>
            </div>
    )
}

export default ArtistCard
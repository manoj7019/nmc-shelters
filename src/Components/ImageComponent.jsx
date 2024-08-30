import React, {useState, useEffect} from 'react'
import { Blurhash } from 'react-blurhash'

const ImageComponent = ({src}) => {
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])
  return (
    <div>
            <div className='mt-6 mobile:w-14 mobile:h-12 tablet:w-full tablet:h-14 laptop:w-20 laptop:h-16 laptop:-mt-11 mobile:mt-0' style={{ display: imageLoaded ? 'none' : 'inline'}}>
                <Blurhash
                hash = 'LuM*aENdM_oz~qxDNGf6%0Sgxae:'
                width = {500}
                height = {300}
                resolutionX={32}
                resolutionY={32}
                punch = {1}
                 />
            </div>

            <img
            className='mt-6 mobile:w-14 mobile:h-12 tablet:w-full tablet:h-14 laptop:w-20 laptop:h-16 laptop:-mt-11 mobile:mt-0' src={src} alt=""
                style={{display: !imageLoaded ? 'none' : 'inline'}} />
    </div>
  )
}

export default ImageComponent

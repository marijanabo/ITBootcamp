import React from 'react'
import Emoji from './Emoji'
import Description from './Description'

const Card = ({url,opis}) => {
    return (
      <>
        <Emoji url={url}/>
        <Description opis={opis}/>
      </>
    )
  }

export default Card
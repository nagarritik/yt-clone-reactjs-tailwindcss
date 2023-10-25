import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { hideMenu } from '../slice/appConfigSlice';

function Video() {
  const { id } = useParams();
  const dispatch = useDispatch()
  dispatch(hideMenu());

  return (
    <div className='p-12'>
      <iframe height={'500px'} width={'800px'} src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Video
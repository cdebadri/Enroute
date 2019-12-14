import React from 'react';
import StreamingMedia from '../components/StreamingMedia';

export default function ContentScreen(props) {
  const { navigation } = props;
  const path = navigation.getParam('path');
  return (
    <StreamingMedia path={path} />
  )
}
import React from 'react';
import { WebView } from 'react-native-webview';

export default function StreamingMedia(props) {
  const { path } = props;
  return (
    <WebView
      source={{
        html: `<video controls autoplay width="100%" src="http://192.168.43.178:8000${path}"></video>`
      }}
      style={{
        flex: 1,
        width: '100%'
      }} 
    />
  )
}
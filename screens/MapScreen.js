import React from 'react';
import * as leaf from 'leaflet';
import { WebView } from 'react-native-webview'

export default function MapScreen() {
  return (
    <WebView 
      source={{
        html: `
          <div id="map" onload="(function() {
            const map = window.leaf.map('map', {
              center: [12.9716, 77.5946],
              zoom: 10
            }).addTo(map);
            leaf.tileLayer('http://172.20.10.4:8080/styles/klokantech-basic/{z}/{x}/{y}.png', {
                minZoom: 10,
                maxZoom: 15,
                crossOrigin: true,
              }).addTo(this.map);
           })()"></div>
        `
      }}
      style={{
        flex: 1,
        width: '100%',
        height: '100%'
      }}        
    >
    </WebView>
  );
}
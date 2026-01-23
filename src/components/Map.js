import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Typography, Button, ButtonGroup, Box } from '@mui/material';

const geoUrl = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

const Map = ({ resumeData }) => {
  const [selectedType, setSelectedType] = useState('visited');
  
  if (!resumeData.map) {
    return null;
  }

  const countries = selectedType === 'visited' 
    ? resumeData.map.visited 
    : resumeData.map.lived;

  const getFillColor = (geo) => {
    const countryName = geo.properties.NAME || 
                       geo.properties.NAME_LONG || 
                       geo.properties.name || 
                       geo.properties.NAME_EN || 
                       geo.properties.ADMIN;
    
    if (countryName && countries.includes(countryName)) {
      return selectedType === 'visited' ? '#4CAF50' : '#2196F3';
    }
    return '#E0E0E0';
  };

  return (
    <section id="map" className="section">
      <Box sx={{ textAlign: 'center', pt: 5 }}>
        <Typography variant="h4" color="white" gutterBottom>
          I move around a lot! Where have I been ...
        </Typography>
        <ButtonGroup variant="contained" sx={{ mt: 2 }}>
          <Button 
            onClick={() => setSelectedType('visited')}
            color={selectedType === 'visited' ? 'primary' : 'inherit'}
          >
            Visited
          </Button>
          <Button 
            onClick={() => setSelectedType('lived')}
            color={selectedType === 'lived' ? 'primary' : 'inherit'}
          >
            Lived
          </Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ 
        width: '100%', 
        height: '500px', 
        display: 'flex', 
        justifyContent: 'center',
        backgroundColor: 'transparent'
      }}>
        <ComposableMap
          projectionConfig={{
            scale: 147,
          }}
          style={{ 
            width: '100%', 
            height: '100%',
            maxWidth: '900px'
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) => {
              if (!geographies || geographies.length === 0) {
                return <text x="50%" y="50%" textAnchor="middle">Loading map...</text>;
              }
              return geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey || geo.properties.ISO_A3 || Math.random()}
                  geography={geo}
                  fill={getFillColor(geo)}
                  stroke="#FFFFFF"
                  strokeWidth={1}
                  style={{
                    default: { 
                      outline: 'none',
                      stroke: '#FFFFFF',
                      strokeWidth: 1
                    },
                    hover: { 
                      outline: 'none', 
                      fill: '#FFC107',
                      stroke: '#FFFFFF',
                      strokeWidth: 1.5
                    },
                    pressed: { 
                      outline: 'none',
                      stroke: '#FFFFFF',
                      strokeWidth: 1
                    }
                  }}
                />
              ));
            }}
          </Geographies>
        </ComposableMap>
      </Box>
    </section>
  );
};

export default Map;
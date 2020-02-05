import React from 'react'
import GoogleMapReact from 'google-map-react';
import SmartNavbar from "../smart_view/SmartNavbar";
import UseStyles from "./Styles";

const defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
};


const Map = () => {
    const classes = UseStyles();
    const fullMap = false;
    return (<div>
        <SmartNavbar
            title="Map"
            child={
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <img src={window.location.origin + "/map.png"} width={"100%"} hidden={fullMap}/>
                    <div style={{height: '100vh', width: '100%'}} hidden={!fullMap}>
                        <GoogleMapReact
                            bootstrapURLKeys={{key: "AIzaSyBAmxO9YQeejbwKDT1LAlLCn0_dUiCFQ4M"}}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <span
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact> >
                    </div>
                </main>
            }/>
    </div>)
};

export default Map;
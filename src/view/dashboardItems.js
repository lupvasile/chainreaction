import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';

export const mainListItems = (
    <div>
        <ListItem button component="a" href={"#/"}>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="My Dashboard"/>
        </ListItem>
        <ListItem button component="a" href={"#/common"}>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Region statistics"/>
        </ListItem>
        <ListItem button component="a" href={"#/map"}>
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Map"/>
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>

    </div>
);

import React from 'react'
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

const CustomTooltipContent = function(props){
    if(props.payload != null && props.payload[0] != null){
        const newPayload = [];
        props.payload.forEach(function(k){
            if(k['name'] !== 'delete'){
                newPayload.push(k);
            }
        });
        return <DefaultTooltipContent {...props} payload={newPayload} />;
    }
    return <DefaultTooltipContent {...props}/>;
}
export {CustomTooltipContent}
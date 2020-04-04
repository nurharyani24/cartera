import React from 'react';
import { Button } from 'antd';

function ButtonProfile({
    type, text, disabled, href,
    borderRadius = 25,
    background = '#f19292', 
    textColor = "white", 
    border = 'none',
    margin = '0px', marginLeft, marginRight, marginTop, marginBottom,
    className, onClick
})

{
    return(
        <Button 
            type={type}
            className={className}
            disabled={disabled}
            style={{
                backgroundColor: background,
                color: textColor,
                borderRadius: borderRadius,
                border: border,
                margin: margin,
                marginLeft: marginLeft,
                marginRight: marginRight,
                marginTop: marginTop,
                marginBottom: marginBottom,
            }}
            href={href}
            onClick={onClick}>
        {text}
        </Button>
    );
}

export default ButtonProfile;
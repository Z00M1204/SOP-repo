import React, { FC, ReactChild, ReactFragment } from 'react';
import Zoom from "@material-ui/core/Zoom";

interface props {
    children: ReactChild | ReactFragment,
    index: number
}

export const Animate: FC<props> = ({index, children}) => {
    const inDelay = String(index * 150) + 'ms'
    return (
        <Zoom in style={{transitionDelay: inDelay}}>
            <div>
                {children}
            </div>
        </Zoom>
    );
}

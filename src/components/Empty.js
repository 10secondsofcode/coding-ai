import React from 'react';
import { ReactComponent as EmptySVG } from '../assets/empty.svg';

function EmptyState () {
    return (
        <div className="empty-state">
            <EmptySVG />
            <p>no mentor found</p>
        </div>
    );
};

export default EmptyState;
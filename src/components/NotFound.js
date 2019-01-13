import React , { useEffect } from 'react';

const NotFound = () => {

    useEffect(() => {
        for (let i = 1; i <= 4; i++) {
            localStorage.setItem('page' + i , false);
        }
    });

    return (
        <div>
            <p>Not Found</p>
        </div>
    );
};

export default NotFound;
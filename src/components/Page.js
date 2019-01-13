import React , { useEffect } from 'react';
import ShowScore from './ShowScore';
import word from '../../public/Word1.png';

const Page = ({ match }) => {
    useEffect(() => {
        if (match.params.id) {
            localStorage.setItem('page' + match.params.id, 1);
            console.log(match.params.id);
        }
    });

    return (
        <div>
            <center>
                <img src={word} style={{width: '80%'}}/>
            </center>
            <ShowScore />
        </div>
    );
}

export default Page;
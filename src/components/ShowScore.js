import React , { useState , useEffect } from 'react';
import star from '../../public/star.png';

const ShowScore = () => {
    const [didMount, setDidMount] = useState(0);
    const [opacity, setOpacity] = useState([0.2,0.2,0.2,0.2]);

    useEffect(() => {
        if (didMount < 2) {
            const tmp = [...opacity];
            for (let i = 1, j = 0; i <= 4; i++) {
                if (localStorage.getItem('page' + i) === 'true') {
                    tmp[j] = 1.0;
                    j++;
                }
            }
            setOpacity(tmp);
            setDidMount(didMount + 1);
        }
    });

    return (
        <div style={{background: "#BDBDBD", width: "90%", "border-radius": '50px', position: 'relative', margin: "auto"}}>
            <img src={star} style={{width: '40%', height: '40%', position: 'relative', left: '5%', opacity: opacity[0] }}/>
            <img src={star} style={{width: '40%', height: '40%', position: 'relative', left: '15%', opacity: opacity[1]}}/>
            <img src={star} style={{width: '40%', height: '40%', position: 'relative', left: '5%', opacity: opacity[2]}}/>
            <img src={star} style={{width: '40%', height: '40%', position: 'relative', left: '15%', opacity: opacity[3]}}/>

            <div style={{background: "white", width: '1%', height: '90%', position: 'absolute', top: '5%', left: '49%'}}></div>
            <div style={{background: "white", width: '90%', height: '1%', position: 'absolute', top: '49%', left: '5%'}}></div>
        </div>
    );
};

export default ShowScore;
import React , { useState , useEffect } from 'react';
import star from '../../public/star.png';

const ShowScore = () => {
    const [didMount, setDidMount] = useState(0);
    const [opacities, setOpacities] = useState([0.2,0.2,0.2,0.2]);

    useEffect(() => {
        if (didMount < 2) {
            const tmp = [...opacities];
            for (let i = 1, j = 0; i <= 4; i++) {
                if (localStorage.getItem('page' + i) === '1') {
                    tmp[j] = 1.0;
                    j++;
                }
            }
            setOpacities(tmp);
            setDidMount(didMount + 1);
        }
    });

    return (
        <div style={{background: "#BDBDBD", width: "90%", "border-radius": '50px', position: 'relative', margin: "auto"}}>
            {opacities.map( (opacity , i) => <img src={star} style={{width: '40%', height: '40%', position: 'relative', left: i%2 === 0 ? '5%':'15%', opacity: opacity }}/>)}

            <div style={{background: "white", width: '1%', height: '90%', position: 'absolute', top: '5%', left: '49%'}}></div>
            <div style={{background: "white", width: '90%', height: '1%', position: 'absolute', top: '49%', left: '5%'}}></div>
        </div>
    );
};

export default ShowScore;
import React , { useState } from 'react';

const Page2 = () => {
    const [pageName, setPageName] = useState("Page2");

    return (
        <div>
            <p>{pageName}</p>
            <button onClick={() => setPageName(pageName + pageName)}>
                Click me
            </button>
        </div>
    );
}

export default Page2;
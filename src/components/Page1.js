import React , { useState } from 'react';

const Page1 = () => {
    const [pageName, setPageName] = useState("Page1");

    return (
        <div>
            <p>{pageName}</p>
            <button onClick={() => setPageName(pageName + pageName)}>
                Click me
            </button>
        </div>
    );
}

export default Page1;
import React, {useEffect} from 'react';


const AppPage = ({hideMenu}) => {

    useEffect(() => { hideMenu() }, []);

    return (
        <div>
            App page
        </div>
    );
};

export default AppPage;
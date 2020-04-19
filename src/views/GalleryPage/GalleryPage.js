import React, {useEffect} from 'react';


const GalleryPage = ({hideMenu}) => {

    useEffect(() => { hideMenu() }, []);
    
    return (
        <div>
            Gallery page
        </div>
    );
};

export default GalleryPage;
import React, {useEffect} from 'react';


const ContactPage = ({hideMenu}) => {

    useEffect(() => { hideMenu() }, []);

    return (
        <div>
            Contact page
        </div>
    );
};

export default ContactPage;
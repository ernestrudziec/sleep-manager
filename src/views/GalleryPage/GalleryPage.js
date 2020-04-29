import React, {useEffect} from 'react';
import StyledGalleryPage from "./StyledGalleryPage";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/project.png';
import img4 from '../../assets/project2.png';


const GalleryPage = ({hideMenu}) => {

    useEffect(() => { hideMenu() }, []);

    return (
       <StyledGalleryPage>

           <h1>Sleep manager</h1>
           <div>
               <img src={img1}/>
               <img src={img2}/>
               <img src={img3}/>
               <img src={img4}/>

           </div>

       </StyledGalleryPage>
    );
};

export default GalleryPage;
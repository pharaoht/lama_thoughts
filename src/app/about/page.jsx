const AboutPage = () => {

    return (
        <div>AboutPage</div>
    )
};

export default AboutPage;



//in next.js we use <Image/> tag not <img/>
//next.js is not showing our images directly, instead it is caching/optimizing it first in the next folder
//for different screen sizes
//To utlize this feature, you can add fill to the tag and it will reference the size of its parent container
//make sure your parent container position is relative
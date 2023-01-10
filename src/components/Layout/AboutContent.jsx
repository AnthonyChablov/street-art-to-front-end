import graffitiImage from '../../assets/images/graffitti-asset-2.png';

const AboutContent = () => {
    return (
        <div className="max-w-screen-xl mx-auto lg:pt-60 lg:px-6 md:py-12 md:px-6 md:pt-60 py-9 px-6 pt-40 h-screen">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-start">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={graffitiImage} alt="A group of People" />
                </div>
            </div>
        </div>
    );
};

export default AboutContent;

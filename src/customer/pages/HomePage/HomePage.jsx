import React from 'react';
import MainCrosel from '../../components/HomeCarosel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { iphone } from '../../../Data/iphone';

const HomePage = () => {
    return (
        <div>
            <MainCrosel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={iphone} sectionName={"iPhone"}/>
                <HomeSectionCarousel data={iphone} sectionName={"Mac"}/>
                <HomeSectionCarousel data={iphone} sectionName={"iPad"}/>
                <HomeSectionCarousel data={iphone} sectionName={"Watch"}/>
                <HomeSectionCarousel data={iphone} sectionName={"AirPods"}/>
                <HomeSectionCarousel data={iphone} sectionName={"Phụ kiện"}/>
            </div>
        </div>
    )
}

export default HomePage
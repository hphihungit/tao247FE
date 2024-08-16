import React from 'react';
import MainCrosel from '../../components/HomeCarosel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/men_kurta';

const HomePage = () => {
    return (
        <div>
            <MainCrosel/>

            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={mens_kurta} sectionName={"iPhone"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Mac"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"iPad"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Watch"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"AirPods"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Phụ kiện"}/>
            </div>
        </div>
    )
}

export default HomePage
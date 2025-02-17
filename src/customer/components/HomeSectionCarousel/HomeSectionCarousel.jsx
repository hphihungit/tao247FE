import React, { useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => carouselRef.current.slidePrev();
    const slideNext = () => carouselRef.current.slideNext();

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />)

    return (
        <div className=''>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                />

                {activeIndex < items.length - 5 && (
                    <Button
                        variant="contained"
                        className="z-50 bg-white"
                        onClick={slideNext}
                        sx={{
                            position: "absolute",
                            top: "8rem",
                            right: "0rem",
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <ChevronLeftIcon
                            sx={{
                                transform: "rotate(90deg)",
                                color: "black"
                            }}
                        />
                    </Button>)}

                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50 bg-white"

                        sx={{
                            position: "absolute",
                            top: "8rem",
                            left: "0rem",
                            transform: "translateX(-50%) rotate(-90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <ChevronLeftIcon
                            sx={{
                                transform: "rotate(90deg)",
                                color: "black"
                            }}
                        />
                    </Button>)}
            </div>
        </div >
    );
};

export default HomeSectionCarousel
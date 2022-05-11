import './hotel.css'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';




export default function Hotel() {

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)



    const photos = [
        { src: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { src: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { src: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { src: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { src: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { src: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    ]


    const handleOPen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (direction) => {
        let newSlideNumber;


        if (direction === 'l') {
            newSlideNumber = newSlideNumber === 0 ? 5 : slideNumber - 1
        }
        else {
            newSlideNumber = newSlideNumber === 5 ? 0 : slideNumber + 1

        }
        setSlideNumber(newSlideNumber)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r')} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton st 123 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPricHighLight">
                        Book a stay over $113 at this property and get a free airport taxi
                    </span>

                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className='hotelImgWrapper'>
                                <img onClick={() => handleOPen(i)} src={photo.src} alt="" className="hotelImg" /></div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">

                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ut ipsum, obcaecati vero culpa placeat,
                                ectetur adipisicing elit. Ratione ut ipsum, obcaecati vero culpa placeat, corporis dolorum earum quaerat
                                voluptate quibusdam laudantium numquam iusto dolor reiciendis neque ea natus maxime.
                                ectetur adipisicing elit. Ratione ut ipsum, obcaecati vero culpa placeat, corporis dolorum earum quaerat voluptat
                                e quibusdam laudantium numquam iusto dolor reiciendis neque ea natus maxime.
                                ectetur adipisicing elit. Ratione ut ipsum, obcaecati vero culpa placeat, corporis dolorum earum qua
                                erat voluptate quibusdam laudantium numquam iusto dolor reiciendis neque ea natus maxime.
                                ectetur adipisicing elit. Ratione ut ipsum, obcaecati vero culpa placeat, corporis dolo
                                rum earum quaerat voluptate quibusdam laudantium numquam iusto dolor reiciendis neque ea natus maxime.corporis dolorum earum quaerat voluptate quibusdam laudantium numquam iusto dolor reiciendis neque ea natus maxime.                            </p>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an excellent loaaction score of 9.8!
                            </span>
                            <h2>
                                <b>$7889</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}
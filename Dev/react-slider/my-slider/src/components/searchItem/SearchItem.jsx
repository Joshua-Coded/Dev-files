import './searchItem.css'

export default function SearchItem() {
    return (
        <div className='searchItem'>
            <img src='https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                className='searchItemImg' />
            <div className='searchItemDesc'>
                <h1 className='siTitle'>Tower Street Apartments</h1>
                <span className='siDistance'>500m from center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
                <span className='siFeatures'>Entire studio | 1 bathroom | 21m 1 full bed</span>
                <span className='siCancelOp'> Free cancellation</span>
                <span className='siCancelOpSubtitle'>you can cancel later, so look in this great price today!</span>
            </div>

            <div className='searchItemDetails'>
                <div className="searchRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="detailTexts">
                    <span className="siPrice">$4000</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className='siCheckedButton'>See availability</button>
                </div>
            </div>




        </div>
    )
}
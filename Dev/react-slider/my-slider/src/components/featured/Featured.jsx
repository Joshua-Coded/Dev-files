import './featured.css';

export default function Featured() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img src='https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' atl='' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Ikeja</h1>
                    <h2>545465 properties</h2>
                </div>
            </div>

            <div className='featuredItem'>
                <img src='https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' atl='' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Lagos</h1>
                    <h2>55454465 properties</h2>
                </div>
            </div>

            <div className='featuredItem'>
                <img src='https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' atl='' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Abuja</h1>
                    <h2>5465 properties</h2>
                </div>
            </div>

            <div className='featuredItem'>
                <img src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' atl='' className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Lekki</h1>
                    <h2>5454 properties</h2>
                </div>
            </div>

        </div>
    )
}
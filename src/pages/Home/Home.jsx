
import Navbar from '../Shared/Navbar';
import coxesBazar from '../../assets/Rectangle-1.png'
import Carousel from './Carousel/Carousel';

const Home = () => {
    return (
        <div
            className='h-screen  bg-[#000000B3] bg-blend-overlay'
            style={{ backgroundImage: `url(${coxesBazar})` }}>
            <Navbar></Navbar>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;
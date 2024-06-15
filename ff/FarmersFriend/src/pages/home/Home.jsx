import MessageContainer from "../../Components/messages/MessageContainer";
import Sidebar from "../../Components/sidebar/Sidebar";
import backgroundImage from "./grass.jpg"; // Import your background image


const Home = () => {
    return (
        <div
            className='flex items-center justify-center h-screen'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <Sidebar />
                <MessageContainer />
            </div>
        </div>
    );
};
export default Home;

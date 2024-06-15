import React from 'react';
import { theme } from "./../theme";
import Services from './Services';
import Footer from './Footer';
function DashBoard() {
  return (
  <div className="Dashboard">
 <div>
 <div className="hero h-96" style={{backgroundImage: 'url("https://th.bing.com/th/id/R.98f1db12da022615ab8478647b781dd4?rik=08tRwv5ZkA8VJw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fWeather-Photo.jpg&ehk=1vnDlHWl3lYDPLqie%2b05YqPEFXsUthhc1Y%2bNoVBQ6kk%3d&risl=&pid=ImgRaw&r=0")'}}>
    <div className="hero"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold" style={{color:"#d3a118"}}>Welcome To Farmer's Friend</h1>
        <p className="mb-5" style={{color:"#f6c43d"}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eligendi ex quia nisi, earum esse officia laborum aliquam sint eaque, quasi eos numquam. Unde nemo nam aliquid doloribus,enim id.</p>
      </div>
    </div>
  </div>
</div>

    <Services/>
    <Footer/>
      {/* <div className="quick-actions">
        <h3>Quick Actions</h3>
        <button>Add New Data</button>
        <button>Settings</button>
        <button>Help & Support</button>
      </div>
      <div className="news">
        <h3>Alerts and Notifications</h3>
                <p>Stay tuned for updates and announcements!</p>
      </div> */}
    </div>
  );
}

export default DashBoard;

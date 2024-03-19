import React from 'react';
import '../../assets/css/Institutioncard.css';
import Image1 from '../../assets/images/image1.png'
import ece from '../../assets/images/ece-img.webp'
import cse from '../../assets/images/cse-img.webp'
import it from '../../assets/images/it-img.webp'
import mech from '../../assets/images/mech-img.webp'
import civil from '../../assets/images/civil-img.webp'
import eee from '../../assets/images/eee-img.webp'
import bio from '../../assets/images/bio.webp'
import che from '../../assets/images/che-img.webp'
import tele from '../../assets/images/tele-img.webp'
import cyber from '../../assets/images/cyber-img.webp'
import ds from '../../assets/images/ds-img.webp'
import art from '../../assets/images/art-img.webp'
import { useNavigate } from "react-router-dom";
const InstitutionCard = () => {
  const naviagate = useNavigate();
  return (
    
    <div className='full-card'>
     
      <div className='card'>
        <img src={cse} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Computer Science Department</h2>
          <p className='card-description'>The Computer Science Department provides cutting-edge education in software development, AI, and cybersecurity, empowering students for tech-driven careers.</p>
          <div className='card-footer'>
            <button className='btn btn-primary' >Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={it} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Information Technology </h2>
          <p className='card-description'>Information Technology Department: Empowering students with tech skills for tomorrow's challenges .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={ece} alt='ece-img' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Electronics and Computer Engineering </h2>
          <p className='card-description'>Electronics and Computer Engineering Fusing electronics with computing for advanced technological solution .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={mech} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'> Mechanical Engineering</h2>
          <p className='card-description'>Mechanical Engineering: Innovating solutions through the science of motion and machinery .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={eee} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Electronics and Electrical Engineering</h2>
          <p className='card-description'>Electronics and Electrical Engineering: Powering innovation through electronic systems and electrical networks .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={art} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Artificial Intelligence and Machine Learning </h2>
          <p className='card-description'>Artificial Intelligence and Machine Learning: Transforming data into intelligent solutions for tomorrow's challenges.</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={cyber} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Cyber Security</h2>
          <p className='card-description'>nfaskfnfnakdfklfnfma fjdfjdas .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={ds} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Engineering in Data Sciences</h2>
          <p className='card-description'>Cyber Security: Safeguarding digital assets through cutting-edge defense strategies .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={bio} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>BioTechnology</h2>
          <p className='card-description'>nfaskfnfnakdfklfnfma fjdfjdas .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={che} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Chemical Engineering </h2>
          <p className='card-description'>BioTechnology: Pioneering innovations at the intersection of biology and technology.</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={tele} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Electronics and Telecom Engineering </h2>
          <p className='card-description'>Electronics and Telecom Engineering: Connecting the world through innovative electronic systems and telecommunications .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={civil} alt='College Logo' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Civil Engineering</h2>
          <p className='card-description'>Civil Engineering: Building the future with sustainable infrastructure and innovative solutions .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'>Enroll</button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default InstitutionCard;

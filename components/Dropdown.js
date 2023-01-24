import Link from 'next/link';
import styles from '../styles/Dropdown.module.css';
import utils from '../styles/utils.module.css';


const Dropdown = ({selected, setSelected}) => {

  return (
        <div className='dropdown'>
            <div className='dropdown-btn'>Choose One</div>
                <div className='dropdown-content'>
                    <div className='dropdown-item'>Government</div>
                    <div className='dropdown-item'>SPED</div>
                </div>
        </div>
  );
};

export default Dropdown;
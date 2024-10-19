import './Join.css';
<<<<<<< HEAD
import imagecontainer1 from '../../assets/container (1).png';
import imagecontainer2 from '../../assets/container (2).png';
import imagesaly3 from '../../assets/saly3.png';
import imagesaly4 from '../../assets/saly4.png';
=======
import imagecontainer1 from '../../assets/container_(1).png'
import imagecontainer2 from '../../assets/Container_(2).png'
import imagesaly3 from '../../assets/saly3.png'
import imagesaly4 from '../../assets/saly4.png'
>>>>>>> 1769004 (changes)
import  { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Join (){

    const [name, setName] = useState('');
    const [code, setCode] = useState(null);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
     // Function to fetch workspace code based on name
     const fetchWorkspaceCode = async () => {
        try {
            const response = await axios.get('http://localhost:5001/workspace/code', {
                params: { name: name }
            });
            setCode(response.data.code);
            setShowPopup(true);
            setError(null);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError('Workspace name not found');
            } else {
                setError('An error occurred');
            }
            setShowPopup(false);
        }
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWorkspaceCode();
    };

    // Close the popup
    const closePopup = () => {
        setShowPopup(false);
    };

    
    return(
        <>
         

         <div className="join_container">
            <section>
                <img className="imagecontain" src={imagecontainer2}/>
                <img className="imagesaly4" src={imagesaly4}/>
            </section>

            <div className='join_container-form'>
            <h1>Join a workspace</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Workspace Name"
                    required
                />
                <button type="submit">Search</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Workspace Code: {code}</h3>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}

            <form className="join_form" onSubmit={handleSubmit}>
              
              <input type="text" placeholder="Code"></input>
              <Link to=""className="form_button" type="submit" >Join</Link>
            </form>
            </div>
            <section className="fatherPos">
            <img className="image_left" src={imagecontainer1}/>
            <img  src={imagesaly3}/>
            </section>
         </div>
         
        
         
        </>
    )
}


export default Join

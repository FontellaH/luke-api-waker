import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () =>{
    const [information, setInformation] = useState('people');
    const [selectId, setSelectId] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${information}/${selectId}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search for">Search for:</label>
                <select onChange= {e => setInformation(e.target.value)}>
                    <option value='people'>People</option>
                    <option value='planet'>Planet</option>
                </select>

                <label htmlFor="id">ID:</label>
                <input type="number" onChange={e => setSelectId(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    );

}

export default Home;

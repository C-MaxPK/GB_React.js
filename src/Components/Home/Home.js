import { PropTypes } from 'prop-types';
import './style.css';

const Home = ({ firstProp }) => {
    
    return (
        <div className="firstStyle">
            { firstProp }
        </div>
    )
};

Home.propTypes = {
    firstProp: PropTypes.string.isRequired
};

export default Home;

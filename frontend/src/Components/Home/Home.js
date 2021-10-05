import { PropTypes } from 'prop-types';
import './home.css';

const Home = ({ firstProp }) => {
    
    return (
        <h2 className="firstStyle">
            { firstProp }
        </h2>
    )
};

Home.propTypes = {
    firstProp: PropTypes.string.isRequired
};

export default Home;

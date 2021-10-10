import { useSelector } from "react-redux";
import { Box, Modal } from '@material-ui/core';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpinner = () => {
    const loading = useSelector(state => state.loaderSpinnerReducer.loading);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <Modal open={loading} >
            <Box sx={style}>
                <Loader
                    type="Watch"
                    color="#00BFFF"
                    height={200}
                    width={200}
                    visible={loading}
                />
            </Box>
        </Modal>
    )
};

export default LoaderSpinner;

import { useEffect, useState } from "react";
import { Box, Typography, Modal } from '@material-ui/core';
import { useSelector } from "react-redux";

const Error = () => {
    const error = useSelector(state => state.errorReducer);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (error) {
            setOpen(true);
        }
    }, [error]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {error?.name} - {error?.message}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Попробуйте еще раз...
                </Typography>
            </Box>
        </Modal>
    )
};

export default Error;

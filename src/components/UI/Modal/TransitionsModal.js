import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Modal,Backdrop  } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
  },
  paper: {
  
    border: "none",
 

  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const {openModal,handleClose} = props
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        tabIndex="-1" 
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
     

        {props.children}
       
      </Modal>
    </div>
  );
}

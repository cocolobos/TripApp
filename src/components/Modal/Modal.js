/* eslint react/prop-types: 0 */
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import style from "./modal.module.css";

function Modal(props) {
  const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
      position: "absolute",
      width: 900,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const { title, children, openModal, setOpenModal } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openModal}
      modal={setOpenModal}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={style.title}>
        <div style={{ display: "flex" }}>
          <Typography variant="h5" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;

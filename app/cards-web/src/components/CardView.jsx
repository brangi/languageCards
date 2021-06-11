import React from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import {Box, Paper} from "@material-ui/core";

import Button from "@material-ui/core/Button";

export default function CardView(props) {
    if ( Object.keys(props.card).length ===0 ) return null;
    return <Dialog
        open={props.open}>
        <DialogTitle id="view-card-title-dialog">{`Question: ${props.card.question}`}</DialogTitle>
        <Paper elevation={4} key={props.card.id}>
            <Box>
                <h1>Translations: </h1>
                {props.card.translations.map((t) => {
                    return (<h2>{`${t.language.language} : ${t.answer}`}</h2>)
                })}
            </Box>
        </Paper>
        <DialogActions>
            <Button onClick={()=>{props.handleCloseCardView()}} color="primary" autoFocus>
                Ok
            </Button>
        </DialogActions>
    </Dialog>;
}
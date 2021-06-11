import React from 'react';
import {useState} from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";

export default function LanguageAdd(props) {

    const [textLangInput, setLangInput] = useState('');
    const [error, setError] = useState(false);

    const handleLangInput= event => {
        setLangInput(event.target.value);
    };

    const addLang = () =>{
        if(!textLangInput) {
            setError(true);
            setTimeout(() => setError(false), 2000);
        } else {
            props.handleAddLanguage(textLangInput);
            setError(false);
            setLangInput('')
        }
    };

    return <Dialog open={props.open}>
        <DialogTitle id="add-language-title-dialog">{"ADD NEW LANGUAGE"}</DialogTitle>
        <form className={props.classes.root} noValidate autoComplete="off">
            <TextField
                error={error}
                helperText={error ?"Enter a language": false}
                id="input-language-add"
                label="New language"
                required
                value= {textLangInput}
                onChange= {handleLangInput}
            />
        </form>
        <DialogActions>
            <Button id="add-language-btn-dialog" onClick={()=>{addLang()}} color="primary" autoFocus>
                Add
            </Button>
            <Button onClick={()=>{props.handleCloseLanguage()}} color="primary" autoFocus>
                Cancel
            </Button>
        </DialogActions>
    </Dialog>;
}
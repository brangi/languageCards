import React, {useState} from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";

export default function CardAdd(props) {

    const [inputQuestion, setInputQuestion] = useState('');

    const handleLangQuestion= event => {
        setInputQuestion(event.target.value);
    };

    const addCard = () =>{
        const inputLanguages = [];
        const languagesTextEls = document.querySelectorAll('input[id^="lang"]');
        languagesTextEls.forEach(langEl =>{
            if(langEl.value) inputLanguages.push({language: langEl.attributes.id.value.split('-')[2], answer: langEl.value })
        });
        if(inputLanguages.length !== languagesTextEls.length) return;
        props.handleAddCard(inputQuestion, inputLanguages)
    };

    return <Dialog open={props.open} onClose={props.handleCloseCard}>
        <DialogTitle id="create-dialog">{ props.languages.length > 0 ? "CREATE A NEW CARD" : "ADD LANGUAGE FIRST"}</DialogTitle>
        {props.languages.length > 0 ? <form className={props.classes.root} noValidate autoComplete="off">
            <TextField
                onChange={handleLangQuestion}
                id="question-input"
                label="Question (english word or sentence)"
                required
            />
            {props.languages.map((lang) => {
                return (<TextField  key={lang._id} id={`lang-input-${lang.id}`} label={lang.language} data-id={lang.id} required />)
            })}
        </form>: null}
        <DialogActions>
            {props.languages.length > 0 ? <Button id="create-card-btn-dialog" onClick={()=>{addCard()}} color="primary" autoFocus>
                Create
            </Button>: null}
            <Button onClick={props.handleCloseCard} color="primary" autoFocus>
                Cancel
            </Button>
        </DialogActions>
    </Dialog> ;
}
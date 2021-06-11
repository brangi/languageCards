import React from 'react';
import { useMutation, useQuery, useLazyQuery} from '@apollo/react-hooks';
import { useStoreState, useStoreActions } from 'easy-peasy';

import './App.css';
import Button from '@material-ui/core/Button';
import { Box, Grid, Paper, Link } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Language from './components/LanguageAdd'
import CardAdd from './components/CardAdd'
import CardView from './components/CardView'

import {
  MUTATION_ADD_LANGUAGE,
  QUERY_CURRENT_LANGUAGES,
  MUTATION_ADD_CARD,
  QUERY_CURRENT_CARDS,
} from "./api/queries";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '40ch',
    },
  },
}));

function App() {

  const [openCard, setOpenCard] = React.useState(false);
  const [openLanguage, setOpenLanguage] = React.useState(false);
  const [openCardView, setOpenCardView] = React.useState(false);
  const [currentCard, setCurrentCard] = React.useState({});

  const state = useStoreState(state => state);

  const setInitialLang = useStoreActions(actions => actions.setInitialLang);
  const syncLang = useStoreActions(actions => actions.syncLang);

  const setInitialCards = useStoreActions(actions => actions.setInitialCards);
  const syncCards = useStoreActions(actions => actions.syncCards);

  const { data: onLoadLanguages, loading: loadingCurrentImages } = useQuery(QUERY_CURRENT_LANGUAGES);
  let [languages, { data: syncLanguages }] = useLazyQuery(QUERY_CURRENT_LANGUAGES ,{
    fetchPolicy: 'network-only',
    onCompleted: data => {
      if(data) {
        syncLang(syncLanguages)
      }
    }
  });

  const { data: onLoadCards, loading: loadingCurrentCards } = useQuery(QUERY_CURRENT_CARDS);
  let [cards, { data: syncCard }] = useLazyQuery(QUERY_CURRENT_CARDS ,{
    fetchPolicy: 'network-only',
    onCompleted: data => {
      if(data) {
        syncCards(syncCard)
      }
    }
  });

  const [setLanguage] = useMutation(MUTATION_ADD_LANGUAGE);
  const [setCard] = useMutation(MUTATION_ADD_CARD);

  if(!loadingCurrentImages) {
    setInitialLang(onLoadLanguages);
  }

  if(!loadingCurrentCards) {
    setInitialCards(onLoadCards);
  }

  const classes = useStyles();

  const handleClickOpenCard = () => {
    setOpenCard(true);
  };

  const handleCloseCard = () => {
    setOpenCard(false);
  };

  const handleClickOpenLanguage = () => {
    setOpenLanguage(true);
  };

  const handleCloseLanguage = () => {
    setOpenLanguage(false);
  };

  const handleClickOpenCardView = (card) => {
    setOpenCardView(true);
    setCurrentCard(card)
  };

  const handleCloseCardView = () => {
    setOpenCardView(false);
  };

  const handleAddLanguage = (lang) => {
    setLanguage({ variables: { language: lang } }).then(()=>{
      languages();
      handleCloseLanguage()
    });
  };

  const handleAddCard = (question, translations) => {
    setCard({ variables: { question: question, translations: translations } }).then(()=>{
      cards();
      handleCloseCard()
    });
  };

  return (

    <div className="App">

      <CardAdd
          classes={classes}
          open={openCard}
          languages={state.currentLanguages}
          handleAddCard={handleAddCard}
          handleCloseCard={handleCloseCard}
      />

      <Language classes={classes}
                open={openLanguage}
                handleAddLanguage={handleAddLanguage}
                handleCloseLanguage={handleCloseLanguage}
      />

      <CardView
          open={openCardView}
          card={currentCard}
          handleCloseCardView={handleCloseCardView}
      />

      <Grid
          direction="row"
          container
          justify="center"
          alignItems="stretch"
          spacing={8}
          style={{ height: 100, padding:10, marginTop: 20 }}>

        <Grid item xs={4}>
            <Button id="add-language"  variant="outlined" color="primary" onClick={handleClickOpenLanguage}>
              <h1>Add language</h1>
            </Button>
        </Grid>


        <Grid item xs={4}>
          <Button id="add-card" variant="outlined" color="primary" onClick={handleClickOpenCard}>
            <h1>Create flash card</h1>
          </Button>
         </Grid>

      </Grid>

      <Grid
          direction="row"
          container
          justify="center"
          alignItems="stretch"
          spacing={2}
          style={{ height: 900, padding: 20, marginTop: 90 }}>

        <Grid item xs={6}>
          {state.currentCards.map((card) => {
            return (
                <Paper elevation={4} key={card.id}>
                  <Box>
                  <h1>{`Question: ${card.question}`}</h1>
                    <Link
                        id={card.id}
                        component="button"
                        variant="body1"
                        onClick={() => {
                          handleClickOpenCardView(card)
                        }}
                    >
                      View card
                    </Link>
                </Box>
              </Paper>
            )
          })}
        </Grid>
        {/*
        <Grid item xs={6}>
          <Paper elevation={4}>
            <Box>
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
            </Box>
          </Paper>

          <Paper elevation={4}>
            <Box>
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
            </Box>
          </Paper>

          <Paper elevation={4}>
            <Box>
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
            </Box>
          </Paper>

          <Paper elevation={4}>
            <Box>
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
            </Box>
          </Paper>

          <Paper elevation={4}>
            <Box>
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
            </Box>
          </Paper>

        </Grid>
        */}
      </Grid>
    </div>
  );
}

export default App;

import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line
import  { collection, bowser, yoshi }  from './collection.js';

const gameboardSlice = createSlice({
    name: 'squares',
    initialState: {
        colorArray: collection[collection.length-1].colors
            ,
        colorsAvailable: [{color: "000000",
                            clicked: false, tiles: 0},
                            {color: "#cbf0ff",
                            clicked: false, tiles: 0},
                            {color: "#ffffff",
                            clicked: false, tiles: 0},
                            {color: '#7a4a00',
                            clicked: false, tiles: 0},
                            {color: '#0042a9',
                            clicked: false, tiles: 0},
                            {color:'#3a87fe',
                            clicked: false, tiles: 0},
                            {color:'#ff8c82',
                            clicked: false, tiles: 0},
                            {color:'#ffffff',
                            clicked: false, tiles: 0}],
        numberOfRows: 3,
        squaresRevealed: 0,
        attempts: 0,
        guesses: 0,
        guessTracker: [],
        experiment: [],
        numberOfColumns: collection[collection.length-1].numberOfColumns,
        answer: collection[collection.length -1].name,
        answerArray: [],
        alive: true,
        selected: [],
        fakePositioning: 6,
        fakeColor: collection[collection.length - 1].fakeColor,
        guessedAnswer: [],
        checkArray: [],
        previousGuesses: [],
        revealedCheckArray: [],
        gaveUp: false,
        edition: collection[collection.length - 1].edition,
        endImage: true
        
    },
    reducers:{
        toggleImage: (state, action) => {
            if(state.endImage === true){
                state.endImage = false
            } else {
                state.endImage = true
            }
        },
        giveUp: (state, action) => {
            state.gaveUp = true
        },
        revive: (state, action) => {
            state.alive = true
            state.guessTracker = []
            state.guessedAnswer = []
            state.checkArray = []
            state.previousGuesses = []
            state.revealedCheckArray = []
            state.experiment = []
            state.gaveUp = false
            state.squaresRevealed = 0
            state.colorArray = []
            state.endImage = true
        },
        setNumber: (state, action) => {
            state.colorArray = collection[action.payload].colors
            state.numberOfColumns = collection[action.payload].numberOfColumns
            state.answer = collection[action.payload].name
            state.edition = collection[action.payload].edition
            state.fakeColor = collection[action.payload].fakeColor
        },
        buildCheckArray: (state, action) => {
            state.answerArray = Array.from(state.answer)
            for (let n = 0; n < state.answerArray.length; n++){
                state.checkArray.push('?')
            }
            
        },
        createBoard: (state, action) => {
            
        },
        buildColorArray: (state, action) => {
            
            let proxyArray = []
            for(let z = 0; z < state.colorArray.length; z++){
                
            if(proxyArray.indexOf(state.colorArray[z].color) === -1){
                proxyArray.push(state.colorArray[z].color)
                state.experiment.push({color: state.colorArray[z].color, clicked: false, tiles: 0})
                
            }
            }
            state.experiment.splice(1, 0, {color: state.fakeColor, clicked: false, tiles: 0})
        
        },
        revealColor: (state, action) => {
            
            state.colorArray[action.payload].revealed = true;
        },
        checkAnswer: (state, action) => {
            state.guesses += 1
            state.guessTracker.push('n')
            let guessArray = Array.from(action.payload)
            for (let z = 0; z < state.answerArray.length; z++){
                if(state.answerArray[z].toUpperCase() === guessArray[z].toUpperCase()){
                    state.checkArray[z] = state.answerArray[z].toUpperCase()
                    state.revealedCheckArray[z] = {letter: state.answerArray[z].toUpperCase(),
                                                    correct: true}
                }
                else {
                    state.revealedCheckArray[z] = {letter: guessArray[z].toUpperCase(),
                                                    correct: false}
                    state.checkArray[z] = '?'
                    
                }
            }
            state.previousGuesses.push(state.revealedCheckArray)
            
          if(action.payload.toLowerCase() === state.answer.toLowerCase()){
           
            
            state.alive = false
          }  
        },
        revealSquares: (state, action) => {
            
            state.attempts +=1
            for(let j = 0; j < state.experiment.length; j++){
                if(state.experiment[j].color === action.payload.color){
                    state.experiment[j].clicked = true
                    state.selected.push(state.experiment[j])
                    
                }
            }
            for (let i = 0; i < state.colorArray.length; i++){
                
                if(state.colorArray[i].color === action.payload.color){
                    state.squaresRevealed += 1
                    state.experiment[action.payload.index].tiles += 1
                  state.colorArray[i].revealed = true
                   
                }
            }
            
           
        }
        }
    
})

export const { toggleImage, giveUp, revive, setNumber, buildCheckArray, checkAnswer, buildColorArray, createBoard, revealColor, revealSquares } = gameboardSlice.actions
export default gameboardSlice.reducer
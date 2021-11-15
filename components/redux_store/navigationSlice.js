import { createSlice } from '@reduxjs/toolkit';

const emptyObj = ()=>({id:0, name:''});
export const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        episode:emptyObj(),
        character:emptyObj()
    },
    reducers: {
        reset: (state, action) =>{
            if(action.payload.type == 'all'){
                state.episode = emptyObj();
                state.character = emptyObj();
            }else
                state[action.payload.type] = emptyObj();
        },
        setEpisode: (state, action) =>{
            state.episode = {id:action.payload.epid, name:action.payload.name};
            // character must be reset
            state.character = emptyObj();
        },
        setCharacter: (state, action) =>{
            state.character = {id:action.payload.chid, name:action.payload.name};
        }
    }
});


export const { reset, setEpisode, setCharacter } = navigationSlice.actions;

export const getEpisode = state => (state.navigation)? state.navigation.episode : "";
export const getCharacter = state => (state.navigation)? state.navigation.character : "";

export default navigationSlice.reducer;

import { createStore, combineReducers } from 'redux';

//main data reducer
const comm_jsons_generated = (state={}, action) => {
    switch(action.type) {
        case 'MAIN':
            return {
                state: action.data
            }
        default: 
            return state;
    }
}

//slider images reducer
const spec_jsons_generated = (state={}, action) => {
    switch(action.type) {
        case 'SLIDER':
            return {
                state: action.data
            }
        default: 
            return state;
    }
}

const store = createStore(combineReducers({
    main_data: comm_jsons_generated,
    slide_photos: spec_jsons_generated
}));

// console.log(store.getState())

fetch('http://animals01.vbrqx.com/animals/fnode/comm_jsons_generated/front_en_json_file.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
            store.dispatch({
                type: 'MAIN',
                data: myJson
            })
    });

fetch('http://animals01.vbrqx.com/animals/fnode/spec_jsons_generated/front_en_json_file.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        store.dispatch({
            type: 'SLIDER',
            data: myJson
        })
    });

// setTimeout(()=> {
//     console.log(store.getState());
// }, 2000)

export default store;
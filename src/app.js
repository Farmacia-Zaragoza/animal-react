import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//css
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//import js files
import '../public/js/jquery.min.js';
import '../public/js/jquery.flexslider';
import '../public/js/main';

// const comm_any = document.getElementById('app').getAttribute('data_comm_any');
// const data_spec = document.getElementById('app').getAttribute('data_spec');
//Components
import App from './components/App';

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

//Get JSON Data
async function getComm_anyData() {
    // var j_link = document.getElementById('policyData').getAttribute('data');
    var data_comm = await document.getElementById('root').getAttribute('data-comm');
    // console.log(data_comm);
    var dataResponse = await fetch(data_comm);
    var jsonData = await dataResponse.json();
    return jsonData;
}
getComm_anyData().then(data => {
    // console.log(data);
    store.dispatch({
        type: 'MAIN',
        data: data
    })
});

async function getSpecData() {
    // var j_link = document.getElementById('policyData').getAttribute('data');
    const data_spec = document.getElementById('root').getAttribute('data-spec');
    // console.log(data_spec);
    var dataResponse = await fetch(data_spec);
    var jsonData = await dataResponse.json();
    return jsonData;
}
getSpecData().then(data => {
    // console.log(data);
    store.dispatch({
        type: 'SLIDER',
        data: data
    })
});

// fetch(comm_any)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         store.dispatch({
//             type: 'MAIN',
//             data: myJson
//         })
// }).catch(err => console.log(err));

// fetch(data_spec)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         store.dispatch({
//             type: 'SLIDER',
//             data: myJson
//         })
// }).catch(err => console.log(err));

// setTimeout(() => {
//     console.log(store.getState());
// }, 3000);

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
    // <h1>jjhjj</h1>
);

function initApp() {
    ReactDOM.render(jsx, document.getElementById('root'));
}
initApp();

window.addEventListener('resize', function() {
    initApp();
    console.log(window.innerWidth)
});
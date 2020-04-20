 const initialState = {
     count:0
}
const Increment = 'Increment';
const Decrement = 'Decrement';

export { Increment,Decrement }

export default (state = initialState, action = {}) => {
    console.log('reducer');
    switch(action.type){
        case Increment:
            return Object.assign( {}, state, { count: state.count+ 1} )
        case Decrement:
            return Object.assign( {}, state, { count: state.count - 1} )
        default: 
           console.log('default');
            return state;
    }
}

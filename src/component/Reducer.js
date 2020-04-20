 const initialState = {
     count:0
}
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export { INCREMENT,DECREMENT }

export default (state = initialState, action = {}) => {
    console.log('reducer');
    switch(action.type){
        case INCREMENT:
            return {
                count: state.count + 1
              };
        case DECREMENT:
            return {
                count: state.count - 1
              };
        default: 
           console.log('default');
            return state;
    }
}

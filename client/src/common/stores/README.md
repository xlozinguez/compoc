# STORES

## Reducers

Reducers update a specific prop in the application state, by operating
after the action which describes what to change.

To add a new action, add it to the switch statement in the store reducer

@example
case NEW_ACTION_CONSTANT:
  return assign({}, state, {
    stateVariable: action.var,
  });

To add a new reducer, add another file like this to the reducers folder, and
add it in rootReducer.js.

## Actions

Actions change things in your application.
In redux, actions are the only way to interact with your application state,
and are descriptions of what should change. This gaurantees that your state
is up to date.

To add a new action:

1) define your action in the action-type.js

Your action constants define the types of changes we can make to the root
reducer with actions.

Follow this format:
export const NEW_ACTION_CONSTANT = 'NEW_ACTION_CONSTANT';

2) Add a function like this in the action-creator.js

   export function newAction(var) {
     return {
       type: NEW_ACTION_CONSTANT,
       var: var,
     };
   }


3) (optional) Add an async function like this:
   export function asyncNewAction(var) {
     return (dispatch) => {
       // Do async stuff here
       return dispatch(newAction(var));
     };
   }

   If the regular action is only used by the async action, you can
   remove the export from regular action.

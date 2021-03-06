import { createSelector } from 'reselect';

/**
 * Direct selector to the toDo state domain
 */
const selectToDoDomain = () => (state) => state.get("toDo");

/**
 * Other specific selectors
 */


/**
 * Default selector used by ToDo
 */
function makeSelectToDo() {
	return createSelector(selectToDoDomain(),(substate) => substate);
}

export {
  selectToDoDomain,
};
export default makeSelectToDo;

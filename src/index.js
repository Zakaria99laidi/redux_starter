import { bugAdded, bugRemoved, bugResolved } from "./action";
import store from "./store";

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugAdded("Bug2"));
store.dispatch(bugAdded("Bug3"));
store.dispatch(bugAdded("Bug4"));

store.dispatch(bugResolved(4));
// store.dispatch(bugRemoved(1));

console.log(store.getState());

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Install Redux ToolKit and React-Redux
``` 
npm i @reduxjs/toolkit react-redux
```
### Immer 
It simplifies handling immutable data by allowing you to write code that appears to mutate the state directly, while actually creating new copies of the state with the desired updates.

### useDispatch
useDispatch gives you access to the dispatch function from the Redux store, allowing you to send actions to the store to modify the state.
### useSelector
This function receives the entire Redux store state and returns the portion of the state that your component needs.
### createAsyncThunk 
it is designed to handle asynchronous logic such as making API calls. Managing async operations like data fetching or other side effects (e.g., API calls) can be tricky in Redux because you need to handle different states (e.g., loading, success, error).
createAsyncThunk abstracts this by allowing you to define the async logic in one place, automatically generating action types for pending, fulfilled, and rejected states.


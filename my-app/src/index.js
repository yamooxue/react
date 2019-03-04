import App from './App';//最外层APP组件，大写开头
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from '_REDUCERS'
import 'animate.css';

let store = createStore(todoApp)

const renderDom = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('app')
    );
}

renderDom(App);
if (module.hot) {
    module.hot.accept(); 
}
// const renderDom = Component => {
//     ReactDOM.render(
//         <AppContainer>
//         <Component />
//         </AppContainer>,
//         document.getElementById('app')
//     );
// }




// if (module.hot) {
//     module.hot.accept('./App', () => {
//         const App = require('./App').default;
//         renderDom(App);
//     })
// } 



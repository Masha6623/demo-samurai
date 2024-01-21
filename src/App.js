import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { useLocation, useNavigate, useParams, BrowserRouter } from 'react-router-dom';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './Redux/redux-store';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <React.Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path='/dialogs/'
                element={<DialogsContainer />} />

              <Route path='/profile/:userId'
                element={<ProfileContainer />} />
              <Route path='/profile/*'
                element={<ProfileContainer />} />

              <Route path='/users'
                element={<UsersContainer />} />
              <Route path='/login'
                element={<LoginPage />} />

              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

function withRouter(App) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <App
        {...props}
        router={{ location, navigate, params }} />
    );
  }
  return ComponentWithRouterProp;
}


let AppContainer = compose(
  connect(mapStateToProps, { initializeApp }), withRouter)(App);


const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../Redux/profile-reducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from 'redux';
import  {useEffect} from 'react';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    render() {

        return (
            <Profile {...this.props} 
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        useEffect(() => {
            if (!props.isAuth) {
                try {
              navigate("/login");
                } catch(err) {
                    console.log('err')
                }
            }
          }, [props.isAuth, navigate]);
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}



export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
)(ProfileContainer);
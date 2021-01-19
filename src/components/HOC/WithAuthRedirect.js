// import { render } from "@testing-library/react"
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth
    }
  }

let WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'}></Redirect>
            return <Component {...this.props}></Component>
        }
    }

   let ConnetedAuthRedireactComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    
    return ConnetedAuthRedireactComponent
}


export default WithAuthRedirect
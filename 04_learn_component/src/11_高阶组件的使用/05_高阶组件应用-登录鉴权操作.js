import React, { PureComponent } from 'react'



class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        LoginPage
      </div>
    )
  }
}

class CartPage extends PureComponent {
  render() {
    return (
      <div>
        CartPage
      </div>
    )
  }
}

const withAuth = (WrappedComponent) => {
  const NewCom = (props) => {
    const { isLogin } = props;
    if (isLogin) {
      return <WrappedComponent />
    }
    else {
      return <LoginPage />
    }
  }

  NewCom.displayName = "AuthCpn"

  return NewCom;
}

const NewCartPage = withAuth(CartPage);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <NewCartPage isLogin={false} />
      </div>
    )
  }
}

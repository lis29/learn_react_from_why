import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  width: 100%;
  background-color: #242424;
  font-size: 14px;
  color: #fff;
  position: relative;

  .content {
    display: flex;
    height: 70px;
    justify-content: space-between;
    width: 1100px;
    margin: 0 auto;
  }

  .divider {
    height: 5px;
    width: 100%;
    background-color: #C20C0C;
    position: absolute;
    bottom: 0px;
  }

`

export const HeaderLeft = styled.div`
  display: flex;
  line-height: 70px;

  .logo {
    display: block;
    background-position: 0 0;
    width: 176px;
    height: 70px;
    text-indent: -99999px;
  }
  
  .select-list {
    display: flex;
    
    .select-item {
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
        position: relative;
      }

      &:hover a, .active {
        background-color: #000;
        color: #fff;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }

    }


  }
`

export const HeaderRight = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }


  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;

    &:hover {
      color:white;
      background-color: #000;
    }
  }

  .login {
     &:hover {
      color:white;
      background-color: #000;
     }
  }
`
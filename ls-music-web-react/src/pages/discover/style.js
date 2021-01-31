import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .top {
    height: 30px;
    background-color: #C20C0C;
  }
`


export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  height: 30px;

  .item {
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    a {
      height: 20px;
      line-height:20px;
      display:block;
      color: #fff;
      padding: 0 13px;
      margin: 0 17px;
      
      &:hover, &.active {
        text-decoration: none;
        background-color:#9B0909;
        border-radius: 20px; 
      }
    }
  }
`
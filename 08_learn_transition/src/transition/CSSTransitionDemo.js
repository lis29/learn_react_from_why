import React, { PureComponent } from 'react'

import { CSSTransition } from 'react-transition-group';
import './CSSTransition.css'

import { Card, Avatar } from 'antd'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
const { Meta } = Card;



export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true
    }
  }

  render() {
    const { isOn } = this.state;
    return (
      <div>
        CSSTransitionDemo
        <button onClick={() => { this.setState({ isOn: !isOn }) }}>显示/隐藏</button>
        <CSSTransition
          in={isOn}
          timeout={1000}
          classNames="card"
          unmountOnExit={true}
          appear
          onEnter={el => console.log('开始进入')}
          onEntering={el => console.log('进入中。。。')}
          onEntered={el => console.log("已经进入完成")}
          onExit={el => console.log("开始退出")}
          onExiting={el => console.log("正在退出")}
          onExited={el => console.log('退出完成！')}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    )
  }
}

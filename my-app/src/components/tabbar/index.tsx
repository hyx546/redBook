import React, { useState } from 'react';

import { TabBar } from 'antd-mobile';

import { Icon } from '../../Icon';
import Home from '../../pages/home';
import Market from '../../pages/market';

const Tabbar = () => {
  const [selectedTab,setSelectedTab]=useState('market');
  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000000"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="首页"
            key="home"
            selected={selectedTab === 'home'}
            onPress={() => {
              setSelectedTab('home')
            }}
            data-seed="logId"
            icon={<div/>}
            selectedIcon={<div/>}
          >
            <Home />
          </TabBar.Item>
          <TabBar.Item
            title="商城"
            key="market"
            selected={selectedTab === 'market'}
            onPress={() => {
              setSelectedTab('market')
            }}
            data-seed="logId"
            icon={<div/>}
            selectedIcon={<div/>}
          >
            <Market />
          </TabBar.Item>
          <Icon type="icon-jia"/>
          <TabBar.Item
            title="消息"
            key="message"
            badge={2}
            icon={<div/>}
            selectedIcon={<div/>}
            selected={selectedTab === 'message'}
            onPress={() => {
              setSelectedTab('message')
            }}
          >
            消息
          </TabBar.Item>
          <TabBar.Item
            title="我"
            key="my"
            icon={<div/>}
            selectedIcon={<div/>}
            selected={selectedTab === 'my'}
            onPress={() => {
              setSelectedTab('my')
            }}
          >
            我
          </TabBar.Item>
        </TabBar>
      </div>
  );
}

export default Tabbar;

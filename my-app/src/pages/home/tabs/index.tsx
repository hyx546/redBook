import React from 'react';
import { Tabs, Badge, SearchBar } from 'antd-mobile';

const tabs = [
  { title: '关注', sub: '1' },
  { title: '发现', sub: '2' },
  { title: '杭州', sub: '3' },
];

const MyTabs = () => {
  return (
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <SearchBar placeholder="Search" maxLength={8} />
      <SearchBar placeholder="Search" maxLength={8} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
  );
}

export default MyTabs;

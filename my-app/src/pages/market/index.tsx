import React, {
  useEffect,
  useState,
} from 'react';

import {
  Carousel,
  Icon,
  NavBar,
  SearchBar,
  WingBlank,
} from 'antd-mobile';

const Market = () => {
  const [data,setData] = useState(['1', '2', '3'])
  const [imgHeight,setImgHeight] = useState('176');

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setData(['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'])
      }, 100);
    }
  }, [data])
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="icon-gengduo" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="icon-leimupinleifenleileibie" />,
        ]}
      >
      </NavBar>
      <SearchBar placeholder="大家都在搜'香水'" maxLength={8} />

      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  setImgHeight('auto')
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    </div>
  )
}

Market.propTypes = {

}

export default Market

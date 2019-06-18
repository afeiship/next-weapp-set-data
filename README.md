# next-weapp-set-data
> AsyncSetData for weapp

## installation
```bash
npm install -S afeiship/next-weapp-set-data --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-weapp-set-data';

// old:
this.setData({
  data1: 'value1',
  list: bigList
});

// new:
nx.weappSetData(this,{
  data1: 'value1',
  list: bigList
});
```

## resources
- https://www.2cto.com/kf/201902/796401.html
- https://www.jianshu.com/p/d4fb22509eb9

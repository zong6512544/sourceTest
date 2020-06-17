// import { log } from './utils';
import MPServerless from '@alicloud/mpserverless-sdk';
import cloud from 'alipay-serverless-sdk';


// appId: '请输入小程序Id',
// 小程序云控制台中记得对比切换的空间是否正确哦~
// spaceId: '请输入spaceId',
// clientSecret: '请输入对应space的secret',
// endpoint: 'https://api.bspapp.com', 这个是API endpoint
my.serverless = my.serverless || new MPServerless({
  uploadFile: my.uploadFile,
  request: my.request,
  getAuthCode: my.getAuthCode,
}, {
  appId: '2021001166692361', // 小程序应用标识
  spaceId: '37de0d94-2213-40c8-a7a1-e68c1f84a3c4', // 服务空间标识
  clientSecret: 'arf1UT83z9VLLYTIYetbXQ==', // 服务空间 secret key
  endpoint: 'https://api.bspapp.com', // 服务空间地址，从小程序 serverless 控制台处获得
});

// 必须要初始化哦~cloud 是一个单例，初始化一次 App 引入均可生效
cloud.init(my.serverless);

App({
  async onLaunch(options) {
    // log.info('App onLaunch');
    // 授权登录方法
    await my.serverless.user.authorize({
      authProvider: 'alipay_openapi',
    });
  },
  onShow(options) {
    // log.info('App onShow');
  },
});

if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../client/app');
require('../../client/pages/order-info/components/readyPay/readyPay?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/order-info/components/reTime/reTime?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/handbag/components/location/location?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/handbag/components/Masonry/Masonry?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/Drawer/Drawer?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/select-button/select-button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/purchase-number/purchase-number?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/handbag/components/commodity-drawer/commodity-drawer?hash=8478053939abd129e3d278635f27a90d080c5fd1');
require('../../client/components/Search/Search?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/Empty/Empty?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/category-nav/category-nav?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/Tab/Tab?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/Title/Title?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/my-ticket/components/tab/tab?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/my-ticket/components/ticket/ticket?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/car-detail/components/head-swiper/head-swiper?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/my-order/my-order?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../client/pages/order-info/order-info?hash=c0228b0031f03e0656ea445db76947e472600527');
require('../../client/pages/handbag/handbag?hash=3788ffc7fd93eec2066b005a8126ba6c2fa6959f');
require('../../client/pages/shopping-cart/shopping-cart?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../client/pages/my/my?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../client/pages/category/category?hash=132dec136945b3b0a66fc76febf44a6e21f01fee');
require('../../client/pages/search/search?hash=ef4fb84887010afe7b7bb71b7080a3b22dd7a410');
require('../../client/pages/my-ticket/my-ticket?hash=5cbcbd88ecc7642955f3d3ee95e06e8eb58cac86');
require('../../client/pages/car-detail/car-detail?hash=954ed4e601ee0d02ec469747fc3a40443ad7cf3b');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}
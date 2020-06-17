Page({
  data: {
    currentUser: {
      name: '小明',
      credit: 1,
      creditList: ['未认证','已授权认证'],
      headImg:'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*O-qpSpu9vgQAAAAAAAAAAABkARQnAQ'
    },
    navList: [
      {
        name: '我的订单',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*Y8BATYqMN78AAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-order/my-order',
          }),
      }
    ],
  },
  onLoad() {},
  onListClick({ target: { dataset } }) {
    const { onClick } = this.data.navList[dataset.index];
    if (onClick) {
      onClick();
    }
  }
});

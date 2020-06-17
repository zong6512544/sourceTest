Page({
  data: {
    orderList: [
    ],
  },
  onLoad() {
    // 订单信息
    this.setData({
      orderList: [
        {
          contractNo: "1893047914572",//合同编号
          status: "已关闭",//合同状态:已关闭、待提车、待支付、已完成
          product: {
            image: [
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ'
            ],//产品图片
            name: "电动车",//产品名称
            price: 5000,//产品单价
            num: 1,//购买数量
            totalPrice: 5000//总计
          }
        },
        {
          contractNo: "1123047914572",//合同编号
          status: "待提车",//合同状态:已关闭、待提车、待支付、已完成
          product: {
            image: [
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ'
            ],//产品图片
            name: "电动车",//产品名称
            price: 5000,//产品单价
            num: 1,//购买数量
            totalPrice: 5000//总计
          }
        },
        {
          contractNo: "3213047914572",//合同编号
          status: "待支付",//合同状态:已关闭、待提车、待支付、已完成
          product: {
            image: [
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ'
            ],//产品图片
            name: "电动车",//产品名称
            price: 5000,//产品单价
            num: 1,//购买数量
            totalPrice: 5000//总计
          }
        },
        {
          contractNo: "1893047914572",//合同编号
          status: "已完成",//合同状态:已关闭、待提车、待支付、已完成
          product: {
            image: [
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ'
            ],//产品图片
            name: "电动车",//产品名称
            price: 5000,//产品单价
            num: 1,//购买数量
            totalPrice: 5000//总计
          }
        }
      ]
    });
  },
  onListClick(event) {
    console.log(event.target.dataset)
    my.navigateTo({
      url: `/pages/order-info/order-info?orderNo=${event.target.dataset.orderNo}&status=${event.target.dataset.status}`,
    })
  }
});

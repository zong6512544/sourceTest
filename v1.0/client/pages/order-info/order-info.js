Page({
  data: {
    contractAnotherInfo: {
    },
    // 是否为待支付
    unpaid:false
  },
  onLoad(query) {
    console.log(query)
    // 设置bar
    let title = query.status;
    my.setNavigationBar({
      title
    })
    // 是否为待支付
    let unpaid = query.status === "待支付"?true:false;
    // 获取订单信息
    let res = {
      orderNo: '919232030232293',
      exchangeNo: '919232030232293',
      createTime: '2020-6-17 15:08',
      paidTime: '2020-8-13 20:08',
      refundTime: '2020-8-13 20:08',
      refundNo: '2020-8-13 20:08',
      installment: {
        payfor: '178',
        total: '12'
      }
    }
    this.setData({
      // 订单信息
      contractAnotherInfo: res,
      // 待支付
      unpaid
    })
  },
  //  查看电子合同
  toElectricContract() {

  }
});

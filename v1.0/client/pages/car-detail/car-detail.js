import * as log from "../../utils/log";

Page({
  data: {
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    imgList: [
      { src: 'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ'},
      { src: 'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ'},
      { src: 'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ'},
      ]
  },
  onLoad({ carId }) {
    my.setNavigationBar({
      title: "小力鹰"
    });
    console.log(carId);
  },
  
});

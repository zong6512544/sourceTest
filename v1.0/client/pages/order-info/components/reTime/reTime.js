Component({
  mixins: [],
  data: {
    hours: 24,
    minutes: 0
  },
  props: {
    // 创建的时间
    reTime: '2020-6-17 15:08:00'
  },
  didMount() {
    // 创建的时间
    this.translateDate(this.props.reTime);
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    // 创建的时间
    // 时间戳？转换
    translateDate(reTime) {
      console.log(reTime)
      // 创建的时间
      let cTime = reTime.replace(/-/g,'/');
      cTime = new Date(cTime).getTime();
      console.log(cTime)
      // 当前时间
      let nowTime = Date.parse(new Date());
      // 剩余时间
      // 1.时间差
      let remainingTime = nowTime - cTime;
      // 2.处理
      let oneDay = 60*60*24;
      // remainingTime = oneDay - remainingTime;
      // 60*60*24
      console.log(cTime,nowTime,remainingTime,oneDay);

      this.setData({
        
      })
    }
  }
});

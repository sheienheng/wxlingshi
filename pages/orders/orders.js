// pages/orders/orders.js
Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    orders: [
      { id: 1, title: '果脯 半斤', image: '/img/guo1.jpg', num: 4, price: 0.01, selected: true },
      { id: 2, title: '肉脯 500g', image: '/img/rou1.png', num: 1, price: 0.03, selected: true }
    ]
  },

  onReady() {
    this.getTotalPrice();
  },

  onShow: function () {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '支付系统已屏蔽',
      text: 'center',
      complete() {
        wx.switchTab({
          url: '/pages/user/user'
        })
      }
    })
  }
})
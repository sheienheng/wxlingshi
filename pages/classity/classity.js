Page({
  data:{
    category: [
      { name: '果味', id: 'guowei' },
      { name: '菜蔬', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '肉脯', id: 'rou' },
      { name: '水产', id: 'yu' }
    ],
    detail: [
      {
        "id": "guowei",
        "banner": "/img/c1.png",
        "cate": "果味",
        "detail": [
          {
            "thumb": "/img/guo2.jpg",
            "name": "111 100g"
          },
          {
            "thumb": "/img/guo3.jpg",
            "name": "111 100g"
          },
          {
            "thumb": "/img/guo4.jpg",
            "name": "111 100g"
          },
          {
            "thumb": "/img/guo5.jpg",
            "name": "111 100g"
          },
          {
            "thumb": "/img/guo6.jpg",
            "name": "111 100g"
          },
          {
            "thumb": "/img/guo1.jpg",
            "name": "111 100g"
          }
        ]
      },
      {
        "id": "shucai",
        "banner": "/img/c1.png",
        "cate": "菜蔬",
        "detail": [
          {
            "thumb": "/img/shu1.jpg",
            "name": "222 200g"
          },
          {
            "thumb": "/img/shu2.jpg",
            "name": "222 200g"
          },
          {
            "thumb": "/img/shu3.jpg",
            "name": "222 200g"
          },
          {
            "thumb": "/img/shu4.jpg",
            "name": "222 200g"
          },
          {
            "thumb": "/img/shu6.jpg",
            "name": "222 200g"
          },
          {
            "thumb": "/img/shu5.jpg",
            "name": "222 200g"
          }
        ]
      },
      {
        "id": "chaohuo",
        "banner": "/img/c1.png",
        "cate": "炒货",
        "detail": [
          {
            "thumb": "/img/chao1.jpg",
            "name": "333 300g"
          },
          {
            "thumb": "/img/chao2.jpg",
            "name": "333 300g"
          },
          {
            "thumb": "/img/chao3.jpg",
            "name": "333 300g"
          },
          {
            "thumb": "/img/chao4.jpg",
            "name": "333 300g"
          },
          {
            "thumb": "/img/chao5.jpg",
            "name": "333 300g"
          },
          {
            "thumb": "/img/chao6.jpg",
            "name": "333 300g"
          }
        ]
      },
      {
        "id": "dianxin",
        "banner": "/img/c1.png",
        "cate": "点心",
        "detail": [
          {
            "thumb": "/img/dian1.jpg",
            "name": "444 400g"
          },
          {
            "thumb": "/img/dian2.jpg",
            "name": "444 400g"
          },
          {
            "thumb": "/img/dian3.jpg",
            "name": "444 400g"
          },
          {
            "thumb": "/img/dian4.jpg",
            "name": "444 400g"
          },
          {
            "thumb": "/img/dian5.jpg",
            "name": "444 400g"
          },
          {
            "thumb": "/img/dian6.jpg",
            "name": "444 400g"
          }
        ]
      },
      {
        "id": "rou",
        "banner": "/img/c1.png",
        "cate": "肉脯",
        "detail": [
          {
            "thumb": "/img/rou6.jpg",
            "name": "555 500g"
          },
          {
            "thumb": "/img/rou5.jpg",
            "name": "555 500g"
          },
          {
            "thumb": "/img/rou4.jpg",
            "name": "555 500g"
          },
          {
            "thumb": "/img/rou3.jpg",
            "name": "555 500g"
          },
          {
            "thumb": "/img/rou2.jpg",
            "name": "555 500g"
          },
          {
            "thumb": "/img/rou1.png",
            "name": "555 500g"
          }
        ]
      },
      {
        "id": "yu",
        "banner": "/img/c1.png",
        "cate": "水产",
        "detail": [
          {
            "thumb": "/img/yu1.jpg",
            "name": "666 600g"
          },
          {
            "thumb": "/img/yu2.jpg",
            "name": "666 600g"
          },
          {
            "thumb": "/img/yu3.jpg",
            "name": "666 600g"
          },
          {
            "thumb": "/img/yu4.jpg",
            "name": "666 600g"
          },
          {
            "thumb": "/img/yu5.jpg",
            "name": "666 600g"
          },
          {
            "thumb": "/img/yu6.jpg",
            "name": "666 600g"
          }
        ]
      }
    ],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  }
})
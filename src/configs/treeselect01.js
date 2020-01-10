const recommend = [
  {
    text: '智能机',
    id: 1
  },
  {
    text: '时尚套装',
    id: 2
  },
  {
    text: '连衣裙',
    id: 3,
    disabled: true
  },
  {
    text: '口红/唇膏',
    id: 4
  }
];

const food = [
  {
    text: '面食',
    id: 5
  },
  {
    text: '坚果/核桃',
    id: 6
  },
  {
    text: '蜜饯果干',
    id: 7
  },
  {
    text: '西式糕点',
    id: 8
  }
];

const underwear = [
  {
    text: '女袜/丝袜',
    id: 9
  },
  {
    text: '男士内裤',
    id: 10
  }
];

export const treeselect01 = [
  {
    text: '推荐',
    children: recommend
  },
  {
    text: '食品',
    children: food
  },
  {
    text: '内衣',
    disabled: true,
    children: underwear
  }
];

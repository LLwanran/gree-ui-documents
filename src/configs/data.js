export default {
  name: 'province',
  label: '请选择',
  options: [
    {
      value: 'hubei',
      label: '湖北省',
      children: {
        name: 'block',
        label: '请选择',
        options: [
          {
            value: 'wuhan',
            label: '武汉市'
          },
          {
            value: 'jingmen',
            label: '荆门市'
          },
          {
            value: 'jingzhou',
            label: '荆州市'
          }
        ]
      }
    },
    {
      value: 'guangdong',
      label: '广东省',
      children: {
        name: 'city',
        label: '请选择',
        options: [
          {
            value: 'guangzhou',
            label: '广州市',
            children: {
              name: 'block',
              label: '请选择',
              options: [
                {
                  value: 'tianhe',
                  label: '天河区'
                },
                {
                  value: 'haizhu',
                  label: '海珠区'
                },
                {
                  value: 'liwan',
                  label: '荔湾区'
                },
                {
                  value: 'yuexiu',
                  label: '越秀区'
                },
                {
                  value: 'panyu',
                  label: '番禺区'
                },
                {
                  value: 'huadu',
                  label: '花都区'
                },
                {
                  value: 'baiyun',
                  label: '白云区'
                },
                {
                  value: 'nansha',
                  label: '南沙区'
                },
                {
                  value: 'huangpu',
                  label: '黄埔区'
                },
                {
                  value: 'zengcheng',
                  label: '增城区'
                },
                {
                  value: 'conghua',
                  label: '从化区'
                },
                {
                  value: 'guangzhoudaxuecheng',
                  label: '广州大学城'
                }
              ]
            }
          },
          {
            value: 'shenzhen',
            label: '深圳市',
            children: {
              name: 'block',
              label: '请选择',
              options: [
                {
                  value: 'nanshan',
                  label: '南山区'
                },
                {
                  value: 'luohu',
                  label: '罗湖区'
                },
                {
                  value: 'futian',
                  label: '福田区'
                }
              ]
            }
          },
          {
            value: 'zhuhai',
            label: '珠海市',
            children: {
              name: 'block',
              label: '请选择',
              options: [
                {
                  value: 'doumen',
                  label: '斗门区'
                },
                {
                  value: 'jinwan',
                  label: '金湾区'
                },
                {
                  value: 'xiangzhou',
                  label: '香洲区'
                }
              ]
            }
          }
        ]
      }
    }
  ]
};

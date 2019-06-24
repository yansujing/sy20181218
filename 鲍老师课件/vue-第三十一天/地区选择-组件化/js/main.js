

const AppSelect = {
    props: {
        areaList: {
            type: Array,
            required: true
        },
        level: {
            type: String,
            default: '3'
        }
    },
    data() {
        return {
            select: {
                province: '',
                city: '',
                block: ''
            }
        }
    },
    computed: {
        getCity() {
            let list = [];
            this.areaList.map(item => {
                if (this.select.province === item.provinceId) {
                    list = item.city;
                    this.select.city = list[0].cityId;
                }
            });
            return list;
        },
        getBlock() {
            let list = [];
            this.getCity.map(item => {
                if (this.select.city === item.cityId) {
                    list = item.area;
                    this.select.block = list[0].areaId;
                }
            });
            return list;
        },
        getLevel() {
            const selectLevel = {
                first: true,
                second: true,
                third: true
            }
            if (this.level === '1') {
                selectLevel.second = false;
                selectLevel.third = false;
            }
            if (this.level === '2') {
                selectLevel.third = false;
            }

            return selectLevel;
        }
    },
    watch: {
        areaList: {
            handler() {
                if (this.areaList.length) {
                    console.log(this.areaList);
                    this.select.province = this.areaList[0].provinceId;
                    this.select.city = this.areaList[0].city[0].cityId;
                    this.select.block = this.areaList[0].city[0].area[0].areaId;
                }
            },
            // immediate:立即触发handler函数
            immediate: true
        }
    },
    template: `<div class='regional-selection'>
                <select v-model='select.province' v-if='getLevel.first'>
                  <option :value='item.provinceId' v-for='item of areaList'>{{item.provinceName}}</option>
                </select>
                <select v-model='select.city' v-if='getLevel.second'>
                  <option :value='item.cityId' v-for='item of getCity'>{{item.cityName}}</option>
                </select>
                <select v-model='select.block' v-if='getLevel.third'>
                  <option :value='item.areaId' v-for='item of getBlock'>{{item.areaName}}</option>
                </select>
              </div>`
};

const vm = new Vue({
    el: '#app',
    data: {
        list: []
    },
    components: {
        AppSelect
    },
    created() {
        // 模拟后端的数据
        const respnseData = [
            {
                provinceName: '北京',
                provinceId: '1',
                city: [
                    {
                        cityName: '北京市',
                        cityId: '11',
                        area: [
                            {
                                areaName: '昌平区',
                                areaId: '111'
                            },
                            {
                                areaName: '朝阳区',
                                areaId: '112'
                            },
                            {
                                areaName: '东城区',
                                areaId: '113'
                            },
                        ]
                    }
                ]
            },
            {
                provinceName: '江苏省',
                provinceId: '2',
                city: [
                    {
                        cityName: '常州市',
                        cityId: '21',
                        area: [
                            {
                                areaName: '金坛区',
                                areaId: '211'
                            },
                            {
                                areaName: '天宁区',
                                areaId: '212'
                            }
                        ]
                    },
                    {
                        cityName: '苏州市',
                        cityId: '22',
                        area: [
                            {
                                areaName: '常熟市',
                                areaId: '221'
                            },
                            {
                                areaName: '姑苏区',
                                areaId: '222'
                            },
                            {
                                areaName: '虎丘区',
                                areaId: '223'
                            },
                            {
                                areaName: '工业园区',
                                areaId: '224'
                            },
                            {
                                areaName: '吴中区',
                                areaId: '225'
                            }
                        ]
                    }
                ]
            },
            {
                provinceName: '安徽省',
                provinceId: '3',
                city: [
                    {
                        cityName: '安庆市',
                        cityId: '31',
                        area: [
                            {
                                areaName: '大观区',
                                areaId: '311'
                            },
                            {
                                areaName: '怀宁县',
                                areaId: '312'
                            }
                        ]
                    },
                    {
                        cityName: '亳州市',
                        cityId: '32',
                        area: [
                            {
                                areaName: '涡阳县',
                                areaId: '321'
                            },
                            {
                                areaName: '蒙城县',
                                areaId: '322'
                            },
                            {
                                areaName: '其他区',
                                areaId: '323'
                            }
                        ]
                    },
                    {
                        cityName: '合肥市',
                        cityId: '33',
                        area: [
                            {
                                areaName: '包河区',
                                areaId: '331'
                            },
                            {
                                areaName: '长丰县',
                                areaId: '332'
                            },
                            {
                                areaName: '肥东县',
                                areaId: '333'
                            },
                            {
                                areaName: '肥西县',
                                areaId: '334'
                            }
                        ]
                    }
                ]
            }
        ];

        setTimeout(() => {
            this.list = respnseData;
        }, 3000);

        console.log(this.list);
    }
});







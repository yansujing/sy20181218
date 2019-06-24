

const data = [
    {
        provinceId: '1',
        provinceName: '北京',
        city: [
            {
                cityId: '11',
                cityName: '北京市',
                block: [
                    {
                        blockId: '111',
                        blockName: '昌平区',
                    },
                    {
                        blockId: '112',
                        blockName: '朝阳区',
                    }
                ]
            }
        ]
    },
    {
        provinceId: '2',
        provinceName: '江苏省',
        city: [
            {
                cityId: '21',
                cityName: '常州市',
                block: [
                    {
                        blockId: '211',
                        blockName: '金坛区',
                    },
                    {
                        blockId: '212',
                        blockName: '武进区',
                    }
                ]
            },
            {
                cityId: '22',
                cityName: '苏州市',
                block: [
                    {
                        blockId: '221',
                        blockName: '高新区',
                    },
                    {
                        blockId: '222',
                        blockName: '工业园区',
                    },
                    {
                        blockId: '223',
                        blockName: '平江区',
                    }
                ]
            }
        ]
    },
    {
        provinceId: '3',
        provinceName: '安徽省',
        city: [
            {
                cityId: '31',
                cityName: '安庆市',
                block: [
                    {
                        blockId: '311',
                        blockName: '大观区',
                    },
                    {
                        blockId: '312',
                        blockName: '怀宁去',
                    }
                ]
            },
            {
                cityId: '32',
                cityName: '毫州市',
                block: [
                    {
                        blockId: '321',
                        blockName: '蒙城区',
                    },
                    {
                        blockId: '322',
                        blockName: '其他区',
                    }
                ]
            },
            {
                cityId: '33',
                cityName: '合肥市',
                block: [
                    {
                        blockId: '331',
                        blockName: '包河区',
                    },
                    {
                        blockId: '332',
                        blockName: '肥东县',
                    }
                ]
            }
        ]
    }
];

const provinceSelectEle = document.getElementById('province');
const citySelectEle = document.getElementById('city');
const blockSelectEle = document.getElementById('block');

let cityList = [];

function getProvince(data) {
    data.map(item => {
        const optionEle = document.createElement('option');
        optionEle.innerText = item.provinceName;
        optionEle.value = item.provinceId;

        provinceSelectEle.appendChild(optionEle);
    });
}

function getCity(provinceId) {

    citySelectEle.innerHTML = '';

    data.map(item => {
        if (item.provinceId === provinceId) {
            console.log(item.city);

            cityList = item.city;

            item.city.map(item => {
                const optionEle = document.createElement('option');
                optionEle.innerText = item.cityName;
                optionEle.value = item.cityId;

                citySelectEle.appendChild(optionEle);
            })

        }
    });

}

function getBlock(cityId) {

    blockSelectEle.innerHTML = '';

    cityList.map(item => {
        if (item.cityId === cityId) {

            item.block.map(item => {
                const optionEle = document.createElement('option');
                optionEle.innerText = item.blockName;
                optionEle.value = item.blockId;

                blockSelectEle.appendChild(optionEle);
            })
        }
    });


}

provinceSelectEle.onchange = function () {
    getCity(this.value);
    getBlock(citySelectEle.value);
}

citySelectEle.onchange = function () {
    getBlock(this.value);
}

getProvince(data);

getCity(provinceSelectEle.value);

getBlock(citySelectEle.value);



import storage from '../service/storage'
import isExist from '../utils/isExist'
export default {
    // token
    setToken(state, token) {
        storage.setInfo('token', token);
        state.token = token;
    },
    removeToken(state) {
        storage.removeInfo('token');
        state.token = null;
    },
    // shopcarList
    addProduct(state, product) {
        // console.log(product);
        let obj = isExist(product.id, state.shopcarList)
        if (obj.isExist) {
            if (state.shopcarList[obj.index].count < product.stock) {
                state.shopcarList[obj.index].count++;
            }
        } else {
            product.count = 1;
            state.shopcarList.push(product);
        }
        storage.setInfo('shopcarList', state.shopcarList);
    },
    delProduct(state, index) {
        state.shopcarList.splice(index, 1);
        storage.setInfo('shopcarList', state.shopcarList);
    },
    incrementProduct(state, obj) {
        // console.log(obj);
        if (state.shopcarList[obj.index].count === obj.stock) {
            return;
        }
        state.shopcarList[obj.index].count++;
        storage.setInfo('shopcarList', state.shopcarList);
    },
    decrementProduct(state, index) {
        if (state.shopcarList[index].count === 1) {
            return;
        }
        state.shopcarList[index].count--;
        storage.setInfo('shopcarList', state.shopcarList);
    },
    checkProduct(state, obj) {
        state.shopcarList[obj.index].check = obj.check;
        storage.setInfo('shopcarList', state.shopcarList);
    },
    validProduct(state, obj) {
        if (obj.invalid) {
            state.shopcarList[obj.index].check = false;
        }
        state.shopcarList[obj.index].invalid = obj.invalid;
        storage.setInfo('shopcarList', state.shopcarList);
    },
    setShopcarList(state, shopcarList) {
        state.shopcarList = shopcarList;
    }
}
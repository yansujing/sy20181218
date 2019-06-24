

// is特性
// 用来将 当前元素 替换为 相应的 组件

// is特性的值：1.组件名称 2.组件的配置选项

// 使用场景
// 1.解决 DOM内 模板的限制
// 2.用于 动态组件


const TableRow1 = {
    template: `<tr>
                        <td>表格数据1</td>
                        <td>表格数据1</td>
                        <td>表格数据1</td>
                        <td>表格数据1</td>
                        <td>表格数据1</td>
                      </tr>`
}

// 根组件
const vm = new Vue({
    el: '#app',
    data: {
        row: {
            template: `<tr>
                        <td>表格数据1</td>
                        <td>表格数据1</td>
                        <td>表格数据1</td>
                        <td>表格数据1</td>
                        <td>表格数据1</td>
                      </tr>`
        }
    },
    components: {
        TableRow: TableRow1
    }
});



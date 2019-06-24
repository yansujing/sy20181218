

// Web Storage(Web 存储)：分为 localStorage 和 sessionStorage，和http规范没有任何关系，只是用于在本地存储数据

// localStorage（本地存储）：可以存储大量数据（相对于cookie），一般可以存储5MB数据，不主动删除，永久存在
// sessionStorage（会话存储）：可以存储大量数据（相对于cookie），一般可以存储5MB数据，只在会话期间存在，也就是说页面一旦关闭就会被销毁

// 相同点：
// 1.同源页面（相同协议，相同域名，相同端口）之间可以 共享数据，sessionStorage存储的数据不能在不同页面之间共享，必须是同一会话
// 2.只能存储字符串，以key:value形式存储

// sessionStorage一般应用在页面之间的传值

// localStorage和sessionStorage有相同的存取和清除方法

// setItem(),参数1：key值，参数2：key对应的 value值，存储数据
// getItem(),参数：key值，获取数据
// removeItem(),参数：key值，删除数据
// clear()：清空所有数据



// 请求的 url 只能包含 英文字母、数字和某些 特殊符号（$%&+-.）

// encodeURI()
// encodeURIComponent()

// 对字符串进行编码(utf-8)

// 不同点：
// encodeURI()：是专门用于url编码的，它编码的是整个url，不会对 /?:@+=,. 编码
// encodeURIComponent()：用于对 url 的组成部分进行分别编码，不会对整个url编码，会对 /?:@+=,. 编码

var str1 = 'https://www.apiopen.top/weatherApi?city=杭州';

console.log(encodeURI(str1));

console.log(encodeURIComponent('city=杭州'));

// encodeURIComponent()的编码范围更大，它是专门对 参数 进行编码的
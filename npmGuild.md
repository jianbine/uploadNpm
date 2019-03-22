# 初始化npm包项目

1、进入到自定义项目目录

2、在项目目录底下 npm init

3、编写需要上传到npm源库的源码

# 源码Demo(index.js)
````
var fs = require("fs");

//获取文件集合
var entryArray = [];

//文件集合存储
function readFiles(path){
    var pa = fs.readdirSync(path);
    pa.forEach(function(ele,index){
        var info = fs.statSync(path + "/" + ele)
        if(info.isDirectory()){
            readDirSync(path + "/" + ele);
        }else{
            var entryStr = formatResult(path+"/"+ele);
            entryArray.push(entryStr);
        }
    })
}

//获取文件集合，包括文件路径
export function getFiles(path) {
    readFiles(path);
    return entryArray;
}

````

# 使用rollup打包源码（此处用这个会比较方便）

1、npm install rollup -g 全局安装rollup打包工具

2、配置rollup打包所需配置文件，如下

````
export default {
    input: 'src/index.js',
    output: [{
        file: 'dist/index.js',
        name: 'mibine',
        format: 'umd'
    },{
        file: 'dist/index.es.js',
        format: 'es'
    },{
        file: 'dist/index.amd.js',
        format: 'amd'
    },{
        file: 'dist/index.cjs.js',
        format: 'cjs'
    }]
};
````

配置参数：

input：入口文件位置

output.file：出口文件位置(umd规范需要设置name)

format：需要转成的模块规范

3、在根目录底下执行 rollup --config ，会根据配置文件生成对应模块规范

# 注册npm账号

# 上传到npm账号上面

1、npm adduser 绑定账号

(注意：需要将npm源改回到源官方源，命令如又 npm config set registry=http://registry.npmjs.org)

2、npm publish 根目录下执行，将npm包发布到npm官方源

(注意：过程可能会报错，检查您要上传的npm包名是否官方源库已经存在；存在则需要修改package.json文件里面的name)

# 查看使用

按正常npm包管理即可
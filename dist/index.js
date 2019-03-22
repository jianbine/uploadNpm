(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.mibine = {}));
}(this, function (exports) { 'use strict';

    var fs = require("fs");

    //获取文件集合
    var entryArray = [];

    //文件集合存储
    function readFiles(path){
        var pa = fs.readdirSync(path);
        pa.forEach(function(ele,index){
            var info = fs.statSync(path + "/" + ele);
            if(info.isDirectory()){
                readDirSync(path + "/" + ele);
            }else{
                var entryStr = formatResult(path+"/"+ele);
                entryArray.push(entryStr);
            }
        });
    }

    //获取文件集合，包括文件路径
    function getFiles(path) {
        readFiles(path);
        return entryArray;
    }

    exports.getFiles = getFiles;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

---
layout: note
title: iOS端H5选择照片旋转处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
        // 转换blob对象用于上传
        function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {type:mime});
        }
        
    
    var imgBlobIndex=[];  //存放多张图片的的容器。用于多张图片上传或者删除多张图片中某一张图片，
        

     $("#showImg").change(function() {
        var listNunber=$('#fileList').find('img').length,
            Orientation = null,
            _this = $(this)[0],
            _leng = this.files.length,
            maxSize = 2500000,// 限制单张大小2.5M
            minSize=100000;   //压缩临界 1M
           
                for (var j = 0; j < _leng; j++) {
                    var _filelist = _this.files[j],
                        fileType = _filelist.type,
                        size = _filelist.size;     //获取图片的大小
                    if (size < maxSize) {        
                                                  //获取图片Orientation参数
                        EXIF.getData(_filelist, function() {
                            Orientation = EXIF.getTag(this, 'Orientation');
                        });
                         
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(_filelist);
                        fileReader.onload = function (event) {
                            var result = event.target.result;   //返回的dataURL
                            var image = new Image();
                            image.src = result;
                            image.onload = function () {//创建一个image对象，给canvas绘制使用

                                var cvs = document.createElement('canvas');
                                var ctx = cvs.getContext('2d');
                                var scale = 1;          //预留压缩比
                    
                                cvs.width = this.width * scale;
                                cvs.height = this.height * scale;//计算等比缩小后图片宽高

                                if(Orientation && Orientation != 1){
                                    switch(Orientation){
                                        case 6:     // 旋转90度
                                            
                                            cvs.width = this.height * scale;
                                            cvs.height = this.width * scale;
                                            ctx.rotate(Math.PI / 2);
                                            // (0,-imgHeight) 从旋转原理图那里获得的起始点
                                            ctx.drawImage(this, 0,-this.height * scale,  this.width * scale, this.height * scale  );
                                            break;
                                        case 3:     // 旋转180度
                                            ctx.rotate(Math.PI);
                                            ctx.drawImage(this, this.width * scale, -this.height * scale,  this.width * scale, this.height * scale);
                                            break;
                                        case 8:     // 旋转-90度
                                        
                                            cvs.width = this.height * scale;
                                            cvs.height = this.width * scale;
                                            ctx.rotate(3 * Math.PI / 2);
                                            ctx.drawImage(this, - this.width * scale, 0,  this.width * scale, this.height * scale);
                                            break;

                                    }
                                }else{
                                    ctx.drawImage(this, 0, 0,  cvs.width, cvs.height);
                                }
                               /* ctx.drawImage(this, 0, 0, cvs.width, cvs.height);*/
                                if(size<minSize){    
                                     //小于压缩临界的，压缩0.7                              
                                    var newImageData = cvs.toDataURL(fileType, 0.7); 
                                }else {
                                     //大于压缩临界的，根据原图的大小动态设置压缩比
                                    var sca=1/(Math.sqrt([size/minSize])); //
                                    var newImageData = cvs.toDataURL(fileType, sca);
                                }
                                var img='<li class="list_b" data-id="'+imgid+'"><img  src="'+newImageData+'" class="removeImgname'+i+'" data-id="'+imgid+'"/></li>';  //创建预览对象
                                imgid++;
                                i++;
                                $('#fileList').append(img);   //图片预览容器

                                
                                var imgdata=dataURLtoBlob(newImageData);  //  创建blob 用于上传
                                imgBlobIndex.push(imgdata);                   //多张图片时上传用
                                                                
                            };
                        };
                    }else {    
                      alert('您照片大小超过2.5M了，请更换照片')
                    }
                }
           
      
    });
```
  

var gulp = require('gulp');

// 引入组件
var less = require('gulp-less'); // less 文件转换
var livereload = require('gulp-livereload');



//====================
/*打包路径存在问题
//合并压缩pc端css
gulp.task('pro-css-concat', function () {
  gulp.src('dist/pro/css/pc/*.css')
      .pipe(concat('fanwe-pc.min.css'))
      .pipe(minifycss())
      .pipe(gulp.dest('dist/pro/css-min/'))
})

gulp.task('pro-css-watch', function () {
    // 监听文件修改，当文件被修改则执行 script 任务
    gulp.watch('dist/pro/css/pc/*.css', ['pro-css-concat'])
})
*/
//=====================



//======================
//pc端单文件、文件夹监听
gulp.task('dev-less', function () {
  gulp.src(['resource/less/*.less'])
    .pipe(less())
    .pipe(gulp.dest('resource/css/'));
});
  //自动监听
gulp.task('dev-watch', function () {
  livereload.listen();
  gulp.watch('resource/less/*.less', ['dev-less'])
})
//======================


//======================
//wap端单文件、文件夹监听
gulp.task('dev-wap-less', function () {
  gulp.src(['dist/dev/wap/less/*.less'])
    .pipe(less())
    .pipe(gulp.dest('dist/pro/css/wap/'));
});
  //自动监听
gulp.task('dev-wap-watch', function () {
  gulp.watch('dist/dev/wap/less/*.less', ['dev-wap-less'])
})

//======================


//======================
//监听所有页面
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('index.html', function(e) {
    livereload.changed(e.path)
  })
})

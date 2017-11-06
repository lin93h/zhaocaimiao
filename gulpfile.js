
var gulp = require('gulp');

// 引入组件
var less = require('gulp-less'), // less 文件转换
minifycss = require('gulp-minify-css'), // css压缩
rename = require('gulp-rename'), // 文件更名
notify = require('gulp-notify');// 提示信息
livereload = require('gulp-livereload'),// 网页自动刷新
clean = require('gulp-clean'),
concat = require('gulp-concat'),//合并
uglify = require('gulp-uglify'),//js压缩
jshint = require('gulp-jshint');
var obfuscate = require('gulp-obfuscate');
var runSequence = require('run-sequence');
var jshint_cfg = {
  "asi"      : true,
  "browser"  : true,
  "eqeqeq"   : false,
  "eqnull"   : true,
  "es3"      : true,
  "expr"     : true,
  "jquery"   : true,
  "latedef"  : true,
  "laxbreak" : true,
  "nonbsp"   : true,
  "strict"   : false,
  "undef"    : true,
  "unused"   : true
};

//====================
//合并压缩pc端js
gulp.task('pro-js-concat', function () {
  gulp.src('dist/dev/pc/js/*.js')
      .pipe(concat('fanwe-pc.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/pro/js/'))
})

  //自动监听
gulp.task('pro-js-watch', function () {
    gulp.watch('dist/dev/pc/js/*.js', ['pro-js-concat'])
})
//=====================


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
  gulp.src(['dist/dev/pc/less/*.less'])
    .pipe(less())
    .pipe(gulp.dest('dist/pro/css/pc/'));
});
  //自动监听
gulp.task('dev-watch', function () {
  gulp.watch('dist/dev/pc/less/*.less', ['dev-less'])
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
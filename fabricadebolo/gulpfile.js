var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("default",function(){
	// Start a Browsersync proxy
	browserSync.init({
		proxy: "http://127.0.0.1/freelas/fabricadebolo/",
		ghostMode: false
  });
  gulp.watch("**/*.*").on("change",browserSync.reload);
});

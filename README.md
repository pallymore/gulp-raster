# gulp-raster
[![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]

## This is a fork.

This is a fork from Otouto/gulp-raster. The original repo seems to have been abandoned.
This repo brings most of the packages up to date (Gulp 4).

> Rasterization plugin for [gulp](https://github.com/wearefractal/gulp). It`s build on phantomjs, but, in contrast to svg2png, does not deal with fs(creating or reading tmp files).

## Usage

First, install `gulp-raster-update` as a development dependency:

```shell
npm i -S gulp-raster-update
```

Then, add it to your `gulpfile.js`:

```javascript
var raster = require('gulp-raster-update');
var rename = require('gulp-rename');

gulp.src('./src/**/svg/*.svg')
    .pipe(raster())
    .pipe(rename({extname: '.png'}))
    .pipe(gulp.dest('./dist')),
```

You also can specify scale and file format. Let`s say you want get icon set for retina:

```javascript
var raster = require('gulp-raster-update');
var rename = require('gulp-rename');

gulp.src('./src/**/svg/*.svg')
    .pipe(raster({format: 'jpg', scale: 2}))
    .pipe(rename({extname: '.jpg', suffix: '-2x'})
    .pipe(gulp.dest('./dist')),
```

## API

### raster(options)

#### options.scale
Type: `Number`
Default: `1`

Set scale rate of output image.

#### options.format
Type: `String`
Default: `png`

Set output file format, png/jpg are available.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-raster-update
[npm-image]: https://badge.fury.io/js/gulp-raster-update.png

[depstat-url]: https://david-dm.org/pallymore/gulp-raster
[depstat-image]: https://david-dm.org/pallymore/gulp-raster.png

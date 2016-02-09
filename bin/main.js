#! /usr/bin/env node
var path = require('path'),
  byline = require('byline'),
  cmd = require('commander'),
  chalk = require('chalk'),
  pkg = require(path.join(__dirname, '../package.json')),
  fs = require('fs');

var lower_case = /^([^A-Z]+)$/,
  lower_case_with_hyphen = '',
  lower_case_with_underscore = '',
  camel_case = '',
  linedata = '',
  upper_case = '/[A-Z]/',
  fileLog = fs.createWriteStream('files_error.log'),
  dirLog = fs.createWriteStream('directory_error.log'),
  stream = fs.createReadStream('.gitignore'),
  excludeArr = ['node_modules', 'bower_component', '.git', '.svn', '.hg'];

stream = byline.createStream(stream);

cmd.version(pkg.version)
  .description(pkg.description)
  .usage('[--path][--custom-regex][--exclude][--use-gitignore]')
  .option('-i, --gitignore', 'don\'t use ".gitignore"', true)
  .option('-x, --exclude [names]', 'files or Folder to exclude.')
  .option('-p, --path <folder path>', 'folder path to run a filename check', process.cwd())


cmd.parse(process.argv);
var finder = require('findit')(cmd.path);

var validateFileNames = {

  Folders: [],
  Files: [],
  files_with_error: [],
  folders_with_error: [],

  readAllFiles: function (srcPath, excludeArr,ignore) {
    //excludeArr: 
    stream.on('data', function (line) {
   if(ignore){
      lineData = line.toString();
      excludeArr.push(lineData);
      }
    });
    //fileReadError:
    stream.on('end', function () {

    });
    //readAllDirs: 
    finder.on('directory', function (dir, stat, stop) {
      var base = path.basename(dir);
      if (excludeArr.indexOf(base) > -1) {
        stop()
      } else {
        if (!validateFileNames.isLowerCase(base))
          validateFileNames.folders_with_error.push(base);
        validateFileNames.Folders.push(base);
      }
    });
    //readAllFiles:
    finder.on('file', function (file, stat) {
      var basefile = path.basename(file);
      if (!validateFileNames.isLowerCase(basefile)) {
        validateFileNames.files_with_error.push(basefile);
      }
      validateFileNames.Files.push(file);
    });
    //statLink:
    finder.on('link', function (link, stat) {
      // console.log(link);
    });
    //endOfFile:
    finder.on('end', function (link, stat) {
      validateFileNames.displayResults();
      validateFileNames.writeToFile(fileLog, validateFileNames.files_with_error);
      validateFileNames.writeToFile(dirLog, validateFileNames.folders_with_error);
    });
  },
  displayResults: function () {
    console.log("");
    console.log("====================================");
    console.log(chalk.white.bgRed.bold('Working path :'), chalk.white(cmd.path))
    console.log(chalk.white.bgRed.bold('Exclusions :'), chalk.white(excludeArr))
    console.log("====================================");
    console.log(chalk.blue('Total Folders Scanned:'), chalk.white(validateFileNames.Folders.length));
    console.log(chalk.blue('Total Files Scanned:'), chalk.white(validateFileNames.Files.length));
    console.log("====================================");
    console.log(chalk.red('Folders (lower case violation):'), chalk.red(validateFileNames.folders_with_error.length));
    console.log(chalk.red('Files (lower case violation):'), chalk.red(validateFileNames.files_with_error.length));
    console.log("====================================");
  },
  writeToFile: function (filename, arrLog) {

    for (var i = 0; i < arrLog.length; i++) {
      filename.write(arrLog[i] + '\n');
    }
  },
  isLowerCase: function (stringToCheck) {
    return lower_case.test(stringToCheck);
  }
};
if (cmd.path) {
  if (cmd.exclude) {
    excludeArr = (cmd.exclude.split(',')).slice();
  }
  validateFileNames.readAllFiles(cmd.path, excludeArr,cmd.gitignore);
}

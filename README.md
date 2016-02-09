#CheckName 

CLI tool to check filename convention for a project by recursively walking through directory trees. 

It also generates the logs of files and folders not following the specified convention in the present directory.

##Installation
Install this and you'll have access to the ```checkname``` command anywhere on your system.

```
npm -g install checkname
```


##Usage

```
//no params, runs on the current working directory
checkname

//this runs in the specified directory
checkname -p "D:/projects"

//exclude a few folders to search
checkname -x "comma, separated, values, for, folders, to, exclude"

//ignore files or folders list written in a .gitignore file
checkname -i

```

##Automated --help

The help information is auto-generated based on the information provided in the program, so the following `--help` info is for free:

```  
 $checkname --help
 
 Usage: main [--path][--custom-regex][--exclude][--use-gitignore]

validates the file and folder names of a project

Options:

  -h, --help                output usage information
  -V, --version             output the version number
  -i, --gitignore           don't use ".gitignore"
  -x, --exclude [names]     files or Folder to exclude.
  -p, --path <folder path>  folder path to run a filename check
  
```

##Output
```
====================================
Working path : C:\Users\debjyoti.paul\checkname
Exclusions : node_modules,bower_component,.git,.svn,.hg
====================================
Total Folders Scanned: 4
Total Files Scanned: 7
====================================
Folders (lower case violation): 0
Files (lower case violation): 1
====================================
```

##Licence

[MIT Licenced](./LICENCE).

##Suggestion

Please feel free to share your suggestions

##New to Git

Learn here: https://help.github.com/articles/set-up-git/

## Contribute

Fork and clone the project and then do `npm install` to install the dependencies and take it away.
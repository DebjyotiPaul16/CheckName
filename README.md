#CheckName 

CLI tool to check filename convention for a project by recursively walking through directory trees.

# Contribute

Fork and clone the project and then do `npm install` to install the dependencies and take it away.

## Argument syntax

```
"CLIappname optional arguments"
```

##Examples:

```
checkname -p "D:/users/projects"
```
It will traverse the whole directory tree present in the given system path and gennerate the log of erroneous files and directories  in the corrosponding text files. 

```
checkname 
```
It will generate the logs of files and folders in the present directory.


Arguments are optional with short hand porperties, by default it will run with some default argument values.

### Explanation of array options

A short name, single letter i.e. -f, or false if no short name is supported for this option, descriptions are as follows:
	

- **-V:** tells the version of the application.<tt>i.e. 0.1.0 </tt>
         
- **-i** reads the text file with some folder names and exclude them from traversing.
         - for default it is taking some default arguments as an array for exclusion.
```
checkname -i
```
##Output
```
====================================
Working path : C:\Users\debjyoti.paul\checkname
Exclusions : node_modules,bower_component,.git,.svn,.hg,node_modules
====================================
Total Folders Scanned: 4
Total Files Scanned: 7
====================================
Folders (lower case violation): 0
Files (lower case violation): 1
====================================
```
- **-x** It takes some folder names as comma separated values an exclude them from traversing.
         - if we specifically mention some filename it will only skip the input folder names form travering.
 ```
 checkname -x "node_modules,.git"
 ```
 ##Output
 ```
====================================
Working path : C:\Users\debjyoti.paul\checkname
Exclusions : node_modules,.git
====================================
Total Folders Scanned: 4
Total Files Scanned: 7
====================================
Folders (lower case violation): 0
Files (lower case violation): 1
====================================
 ```
- **-p** required path for traversing the directory tree
       - takes string value of the system path
```
checkname -p "D:/projects/checkname"
```
##Output
```
====================================
Working path : D:/projects/checkname
Exclusions : node_modules,bower_component,.git,.svn,.hg
====================================
Total Folders Scanned: 2
Total Files Scanned: 7
====================================
Folders (lower case violation): 0
Files (lower case violation): 2
====================================
```
Default values for traversing <tt>PATH => present directory</tt> and exclusion array <tt>['node_modules', 'bower_component', '.git', '.svn', '.hg']</tt>.

## Automated --help

The help information is auto-generated based on the information provided in the program, so the following `--help` info is for free:

```  
 $checkname --help
 
 Usage: main [--path][--custom-regex][--exclude][--use-gitignore]

validates the file and folder names of a project

Options:

  -h, --help                output usage information
  -V, --version             output the version number
  -c, --custom-regex        format type to check.
  -l, --uppercase           uppercase checking
  -i, --gitignore           don't use ".gitignore"
  -x, --exclude [names]     files or Folder to exclude.
  -p, --path <folder path>  folder path to run a filename check
  
```

# Licence

[MIT Licenced](./LICENCE).

# Suggestion

Please feel free to share your suggestions

# New to Git

Learn here: https://help.github.com/articles/set-up-git/

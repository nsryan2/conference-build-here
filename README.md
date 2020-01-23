# ANS 2021 Student Conference Website
This repository holds the ANS 2021 Student Conference Website.

# Using Git to Make Website Edits
This guide will show you how to make edits to the ANS Student Conference Website, 
specifically. It should also give you a sense of how to use `git` and GitHub for version 
control, a very useful skill. 

## Two Rules of using GitHub
1. **Do not** push to master. 
2. **Do not** merge your own pull requests. 
If you follow these two rules you will avoid a lot of headaches in the future.

## Quick Set Up Guide
This guide borrows heavily from Kathryn Huff's [guide](http://arfc.github.io/manual/guides/website) for the ARFC group website.
1. Make a Github account and join the organization ([ansuiuc](https://github.com/ansuiuc)). 
2. Install Git on your computer
3. Set up [SSH Keys](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) (_this step is optional but will save you a lot of time later_)
	* **Windows users** after you have installed Git you can navigate to the `Git Bash` app which allows you to use the commands in the guide. Linux and Mac can use the commands directly in Terminal.  
4. Install the build dependencies by clicking links and following instructions for your system type (macOS, linux, windows)
	* [ruby](https://www.ruby-lang.org/en/documentation/installation/)
	* [jekyll](https://jekyllrb.com/docs/installation/)
	* jekyll-scholar: execute the following `gem install jekyll-scholar` or `sudo gem install jekyll-scholar`
	* NOTE: If it says you do not have permission to install an item try running `sudo` on linux/mac or reopening command line with admin priveleges.
5. [Fork](https://github.com/ansuiuc/conference-build-here) the repository to a logical place on your computer. 
6. Clone the fork on your computer with the following command (USERNAME is _your_ username): 
	* `git clone git@github.com:USERNAME/conference-build-here.git`
	* **Caution**: Do not clone to another git repository (i.e. a folder that uses git tracking -- I'm not even sure if it's possible but don't try it). 
7. Run the following commands to finish setting up:
	* `cd conference-build-here`
	* `gem install bundler`
	* `jekyll serve` if this fails run `bundle exec jekyll serve`  
8. Adding your information to the website 
	* `git checkout -b source` 
	* Add your image to the `./img/members/` folder. If your name is Jane Doe you will add `jane_doe.png`. Check the file extension is the same in `contact_us.html`. 
	* Open the file `contact_us.html` and add your information to that file. 
	* `git add img/members/jane_doe.png`
	* `git commit -m "adds image of jane doe"`
	* `git add contact_us.html`
	* `git commit -m "adds jane doe information"`
	* `git push origin source`
9. Making your pull request (PR) 
	* Navigate to the organization repository on GitHub [here](https://github.com/ansuiuc/conference-build-here/pulls).
	* Select *New Pull Request* (a large green button).
	* You want to "compare across forks". The `head repository` should be your fork and the comparison branch should be `source`. 
	* Add a description of your PR. 
	* Request a review from someone to check your PR and merge it (see rule #2). 


### Errors

After cloning the repository and attempting to run 

`jekyll serve`
 
I received the error 

`Configuration file: C:/Users/samgd/conference-build-here/_config.yml                

jekyll 3.8.5 | Error:  The jekyll-theme-cayman theme could not be found.`


Solution: 

This problem arose because there was no `Gemfile`. I learned about Gemfiles from this [website](https://learn.cloudcannon.com/jekyll/gemfiles-and-the-bundler/).

`Gemfile.lock` is a built file and should not be included in a commit. 

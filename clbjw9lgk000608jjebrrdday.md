# Git and GitHub

# What is Git?

All developers use some sort of ***version control system(VCS)***, a tool to allow them to collaborate with other developers on the project without the danger to avoid each other's changes/work.

The most used and popular version control system is **Git**. along with GitHub, a site that provides you to host several repositories and several tools for working with them.

## Overview

*   When you are working with the other developers on the projects, there are good chances that your work is going to impact there as far as the code is concerned.
    
*   To avoid this we should have some mechanism in place. To avoid the loss of work.
    
*   You will need to have the code at the central(i.e. consolidate at one) place, and get its backup as and when required.
    
*   Every coder who is writing the code will create his/her **separate repo/branches** in **Git**, which will feature their version of the code and get it merged in a controlled manner. (Here we will use pull requests) with **the master/main** version when they are done it.
    
*   A GitHub provides you the reviewing tools and project management features such as assigning tasks etc.
    
*   It is a cheap environment to maintain and provides an isolated environment for every change you make to your codebase.
    
*   Each developer gets a copy to work on.
    
*   And you can ask the other developer to merge your changes with help of **a pull request** and check it and let them discuss the flow for further project roadmap.
    
*   You can compare the code changes as per the timeline i.e. the push made into the codebase.
    
*   You can find the piece of code that causes the problem and also when and who has contributed to the codebase and what extra features are been added to it.
    

## Advantages of Git

*   **<mark>Tracks History</mark>**
    
*   **<mark>Free and Open Source</mark>**
    
*   **<mark>Supports Non-Linear Development</mark>**
    
*   **<mark>Creates Backups</mark>**
    
*   **<mark>Scalable</mark>**
    
*   **<mark>Supports Collaboration</mark>**
    
*   **<mark>Branching is Easier</mark>**
    
*   **<mark>Distributed Development</mark>**
    

## Pre-requisites to Git and GitHub

*   Install the latest version of the **Git** form [here](https://git-scm.com/downloads).
    
*   Create your GitHub account from [here](https://github.com/).
    

## Commands used in Git

```xml
echo "# javascript-developer" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/moreshwarp/javascript-developer.git
git push -u origin main
```

## <mark>10 most frequently used GIT commands</mark>

## 1\. Git clone

```xml
git clone <https://name-of-the-repository-link>
```

*   Downloading existing **source code** from the **remote repository** (`GitHub`)
    
*   This will help you to download the exact copy of the **source code to your local machine/computer**.
    

![Git Clone](https://cdn.hashnode.com/res/hashnode/image/upload/v1670176690619/9RXM_Q8bX.png align="center")

## 2\. Git branch

```xml
git branch <branch-name>
```

*   Branches help several developers parallel work on the same task.
    
*   We can use the ***Git branch*** command for ***creating***, ***listing*** and ***deleting*** branches.
    
    ```xml
    git branch <branch-name>
    ```
    
    This will allow you to create a new branch locally.
    
    ```xml
    git push -u <remote> <branch-name>
    ```
    
    *   This will allow you to **push code** to the new **branch** into a new repository using the above command.
        
    
    ```xml
    git branch or git branch --list
    ```
    
    *   This will allow you to **view** all the branches of the repo.
        
    
    ```xml
    git branch -d <branch-name>
    ```
    
    *   This will allow you to **delete specified** branches from the repo.
        

## 3\. Git checkout

```xml
git checkout <name-of-your-branch>
```

*   This command works in a branch, first, you need to switch to it. We use
    
    `git checkout <name-of-your-branch>` mostly to switch from one branch to another. We also use checking out files as commits.
    
*   Here, you have to ensure you will have to ***commit the changes*** or ***stash*** them before checkout.
    
*   And also ensure the branch you want to check out should exist on your local.
    

```xml
git checkout -b <name-of-your-branch>
```

*   You can also create a new branch and switch to them at the same time
    
    `git checkout -b <name-of-your-branch> (i.e. which you want to create)`
    
*   The above command creates a branch on your local (*\-b stands for the branch*) and ***checks*** the branch out to new right after it has been created.
    

## 4\. Git status

```xml
git status
```

*   Gives all the necessary information about the current branch.
    
*   Here we can gather information like:
    
    1.  Whether the current branch is up to date.
        
    2.  Whether there is anything to **commit**, **push** or **pull**.
        
    3.  Whether there are files staged, unstaged or untracked.
        
    4.  Whether there are files created, modified or deleted.
        

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1670776097328/DieB0UIY2.png align="center")

## 5\. Git add

When we create, modify or delete the files/code, these changes will happen in our local and won't be included in the next commit (unless we change the configurations).

Here will need to add these changes for commit by using this command.

To add the single file

```xml
git add <file-name>
```

To add everything at once,

```xml
git add .
```

**<mark>Note</mark>**: **<mark>The</mark>** `git add` **<mark>the command doesn't change the repository and the changes are not saved until we use the git commit.</mark>**

**Reference Screenshot:**

![git add .](https://cdn.hashnode.com/res/hashnode/image/upload/v1670776561079/XV6Doza5G.png align="left")

Files with green are now staged with <mark>git add</mark>

## 6\. Git commit

```xml
git commit -m "commit message"
```

*   One of the most used commands on **Git**. Once we are almost/ or done.
    
*   It's like setting <mark>the checkpoint</mark>, in the development process which you can go back to later if required.
    
*   We will need to write a short message to explain what we have developed or changed in the source code.
    
*   **<mark>Note: Git commit saves our changes only locally.</mark>**
    

## 7\. Git push

```xml
git push <remote> <branch-name>
```

*   After committing your changes, the next thing you want to do is send your changes to the remote server. Git push uploads your commits to the remote repository.
    
*   However, if the branch is newly created, then you also need to upload the branch with the following command
    
    ```xml
     git push --set-upstream <remote> <name-of-your-branch>
    ```
    
    **Or**
    
    ```xml
    git push -u origin <branch_name>
    ```
    

**<mark>Note: Git push only uploads changes that are committed.</mark>**

## 8\. Git Pull

*   The Git pull is used to get the updates from the remote repo. This command is a combination of git fetch and git merge which means that when we use a git pull(***git fetch***) it updates the remote repository and immediately applies the latest changes on your local changes(***git merge***).
    

```xml
git pull <remote>
```

**<mark>Note: At times after executing this command or while executing this command there might be some conflicts that you need to resolve manually.</mark>**

## 9\. Git revert

```xml
git revert <hash-code>
```

*   To undo the changes you have to do. There are various ways to undo our changes locally or remotely, but we must carefully use these commands to avoid unwanted deletions.
    
*   A safer way that can undo our commit is by using git revert. To see our commit history, first, we need to use
    
    ```xml
    git log
    ```
    

## 10\. Git merge

*   When you have completed the development in your branch and everything works fine, the final step is merging the branch with the parent branch (***dev*** or ***master***).
    
    ```xml
    git merge
    ```
    
*   `git merge` integrate your feature branch with all of its commits back to the dev (or master) branch. It's important to remember that you first need to be in the specific branch that you want to merge with your feature branch.
    

1\. First you should switch to dev branch:

```xml
git checkout dev
```

Before merging, you should update your local dev branch:

```xml
git fetch
```

Finally, you can merge your feature branch into dev:

```xml
git merge <branch-name>
```

**<mark>Note: Make sure your dev branch has the latest version before you merge your branches, otherwise you may face conflicts or other unwanted problems.</mark>**
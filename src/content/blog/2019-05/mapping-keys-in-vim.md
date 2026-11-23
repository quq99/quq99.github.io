---
title: "Mapping keys in vim"
date: 2019-05-26
summary: "Things started when Apple started using touch bar on MacBook. Admittedly, touch bar is good, but as a vimer, I found it really inconvenient to switch between normal mode and insert mode. One day, I could not bear it, so I decided to make some changes."
tags: ["vim"]
archived: true
---

Things started when Apple started using `touch bar` on MacBook. Admittedly, touch bar is good, but as a vimer, I found it really inconvenient to switch between `normal` mode and `insert` mode. One day, I could not bear it, so I decided to make some changes. 

Vim has a nick name "Text editor of the Gods", so there are a lot of things you can do about vim. You can customize your vim to make it easier to use, also more powerful.



# Mapping

So I decided to use `map` in Vimscript. Mapping is a very useful feature of Vimscript, and the magic of mapping is that mapping keys lets you tell Vim: 

> When I press these pattern, I want vim to do this perticular stuff rather than whatever vim would normally do.

You can treat is as a shortcut. And you can map keys in `normal` mode,  `insert` mode and other modes.

So, for example, look at this Vimscript below:

```shell
:map - dd
```

When you put this line in your `.vimrc` file and run `source .vimrc` to make the `.vimrc` work. You are telling vim that the next time, in `normal` mode, when I press "-", the vim will do exactly what you do with pressing two characters `dd`. So the vim will delete that line. And I find `map` command also works in `visual` mode.

And, there are also some similar command. We can use `nmap`, `vmap`, `imap` to tell vim to only use the mapping in `normal`,` visual`, or `insert` mode respectively.



# Side Effects of map

There are two side effects of using `map` command. 

* The danger of recursing
* May have conflict to vim-plugin mapping keys



For example, 

```c
nmap dd o<esc>jdd
```

you may think this command would open a new line, and esc to normal mode and move down one line and delete this line. However, because **o\<esc>jdd** include "dd", so it will do it recursively and can never end.



# Nonrecursive Mapping

Vim offers another commands that would ignore recursive mapping. Just add *nore* in the front of `map`. So now we would like to use `noremap` rather than `map`. 

There are  `nnoremap`, `inoremap`, `vnoremap` and used in normal, insert and visual mode respectively. There are similar to `map` sets.



# Leaders

Another trick is **leaders** in vim.

There are some keys that we don't use very often in our daily vim usage. Such as `-`, `+`, `,`. Those are really safe to be used in mappings.

So how about using them as a **Prefix** key.

```c
let mapleader=','
```

Then we can use 'leaders' in vimscripts.

For example, 

```c
nnoremap <leader>x d$
```

and `:source %` in vim to make it works. The next time when you press `,x` in normal mode, vim will delete to the end of current line from the cursor position.



# Get rid of "\<esc>"

Now come back to the problem I have, the touch bar. I feel really uncomfortable to use "\<esc>" to switch between `normal` mode and `insert` mode. So I add the following lines to my `.vimrc` file.

```
let mapleader=','

" save file
inoremap <leader>w <Esc>:w<cr>
noremap <leader>w :w<cr>

" map <Esc> to jj
inoremap jj <Esc>
```





The line starts with `"` means comments.

I first use `,` as my **leader**. Then I map the **save** command to `,w` so next time whenever in `insert` mode or `normal` mode and when I press `,w` it would save the file and back to `normal` mode. Because I can use `ZZ` to **save and quit**, I do not need to map them. At last, I map "\<esc>" to `jj`. Because there is no continues two *j* characters in english words and *j* is exactly where my index finger is placed on the keyboard. There we are^_^
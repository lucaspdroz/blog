---
layout: ../../layouts/post.astro
title: "Linux reset password (Debian based)"
pubDate: 2024-11-22
description: "Dive in how to work around."
author: "lucaspdroz"
excerpt: Dive in how to work around.
image:
  src: /password_reseting_linux_debian.mp4
  alt: Dive in how to work around.
tags: ["cybersecurity", "ethical hacking", "linux"]
---

<iframe width="100%" height="315" src="https://www.youtube.com/embed/t-C25ygqIA8"></iframe>

### 1. Configuration

- Linux has a grub configuration to initialize our OS
- Press E enter on grub mode (if your grub doesn't show) PS: it could be other character
- Press E to enter into edit mode
- Look for a line that begins with linux and probably ends with quiet

then follow the command to call bash on the next initialization after grub

```bash
rw init=/bin/bash
```

Wait to enter as **$roort#**

### 2. Setting password

```sh
passwd [user]
```

For list user you can use (you find probably at end of the list):

```sh
less /etc/passwd
```

To restart you can't use shutdown because it's not started the OS itself, so use the following command to  restart:

```sh
exec /sbin/init 6
```

### 3. **Done! You has changed the user password!**

This is only for study or necessity cases use at your own responsibility

---
layout: ../../layouts/post.astro
title: "Easy way to bypassing Windows 11 TPM installation"
pubDate: 2024-12-07
description: "Bypassing Windows 11 installation"
author: "lucaspdroz"
excerpt: Bypassing Windows 11 installation
image:
  src: /showcase.jpg
  alt: "Microsoft has gaved us a way to solve this issue"
tags: ["Windows", "ethical hacking"]
---

Download the oficial ISO on [Microsoft](https://www.microsoft.com/en-gb/software-download/windows11)

### Steps to Follow

1. Download Right Windows 11 version language :

![a](/wind11bypass/1.webp)

2 Mount Windows 11 Drive or Extract the ISO file using 7Zip software for free

![a](/wind11bypass/2.webp)

3.Now open CMD “command prompt” on your windows 10 go to start and search
4.Now go to your Windows 11 folder or Mount Disk folder  “Sources” with Command:

![a](/wind11bypass/3.webp)

ex:

```shell showLineNumbers
F:
```

then enter in your sources:

```shell showLineNumbers
cd F:\sources
```

5.Now write here on CMD this command:
![a](/wind11bypass/5.webp)

```shell showLineNumbers
.\setupprep.exe /product server
```

than go install now you will see “installing windows server”

![a](/wind11bypass/6.webp)

Enjoy Windows 11 on any "old"" computer. 🤘 🦆

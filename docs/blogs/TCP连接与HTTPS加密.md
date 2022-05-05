---
title: 三握四挥，HTTPS加密
date: 2022-03-08
tags:
  - HTTPS
  - TCP
categories: blog
---# 三握四挥，HTTPS 加密

## 三次握手

---

#### 图解：

<img src="./imgs/tcp-https/tcp-three.jpg" style="zoom:50%;" />

#### 名词解释：

- SYN 报文：SYN，全称 synchronization，表示同步的意思
- ACK 报文：ACK，全称 acknowledgment，表示确认的意思
- Seq 序号：Seq，全称 sequence 序号，用以保证连接的唯一性，判断那些连接是多余累赘的
- SYS_SENT：客户端进入 SYN 报文已发送状态
- SYN_RCVD：服务端进入已回复同步状态

#### 图解 TCP 三次握手过程详解：

- 客户端发送一个 SYN 报文 + Seq 序号给服务器请求建立连接。（第一次握手）
- 服务端收到客户端的连接请求，会响应一个 SYN 报文 + ACK 报文 + ack 序号 + seq 序号，SYN+ACK 表示确认同步，ack 序号是客户端 seq 序号+1，服务端 seq 序号是服务端生成，这两个序号用以保证连接的唯一性。（第二次握手）
- 客户端接收到服务端的响应后，会发送 ack 序号给服务端表示已经收到，正式建立连接。ack 序号为服务端 seq 序号+1。（第三次握手）

#### 为什么是三次握手，而不是两次或四次：

因为三次可以保证连接的唯一性，双方都可以通过序号来确认连接的准确性，同时也可以保证不是已经失效的连接请求造成服务端一直收不到响应而造成资源浪费。

两次的话就无法保证连接的唯一性，假若客户端发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达服务端，服务端响应后就建立了连接但是双方都没数据传输，就造成了资源浪费，同时序号也没有能对上，这样这个连接的准确性就不准了。

四次的话属于多余操作了，三次客户端和服务端就都能确认到双方的序号，保证了这次连接的唯一性和准确性。那么第四次握手纯属于没必要，再多握一次就浪费资源，连接时长也会变长。

## 四次挥手

---

#### 图解：

<img src="./imgs/tcp-https/tcp-four.jpg" style="zoom: 70%">

#### 名词解释：

- FIN：全称 finish，表示要结束连接的意思

- MSL：最大报文生存时间，MSL 可以自定义为 30s，1min，2min，2MSL 表示两倍最大生存时间

#### 图解四次挥手过程详解：

关闭 TCP 连接，客户端和服务端都可以提出，这里假设客户端提出关闭连接 TCP

- 客户端发送关闭连接 TCP 请求，里面会有 FIN 报文 + seq 序号 u（假设客户端序号为 u ），客户端进入 FIN-WAIT-1 状态。（第一次挥手）
- 服务端接收到客户端的关闭请求，返回 ACK 确认报文 + seq 序号 v（假设服务端的序号为 v）+ ack 序号 u+1，服务端进入 CLOSE-WAIT 状态，这个时候会开始将还没传输完的继续数据传输。（第二次挥手）
- 等数据都传输完了，给客户端再发一个 FIN 结束报文 + ACK 确认报文 + seq 序号 w（假设服务端的序号为 w，重新生成）+ ack 序号 u+1，进入 LAST-ACK 状态。（第三次挥手）
- 客户端收到服务端的关闭请求，会发送 ACK 确认报文 + seq 序号 u+1 + ack 序号 w+1，然后进入 TIME-WAIT 状态。等待报文过了最大生存时间，进入 CLOSED 已关闭状态，服务端收到客户端的确认关闭请求后，进入 CLOSED 已关闭状态，TCP 连接正式关闭。（第四次挥手）

#### 为什么需要 TIME-WAIT 状态以及等待呢？

假设网络延迟或者断网，客户端发送的确认关闭请求没有到达服务端，服务端就等待一段时间后还没有收到客户端的确认，那么会再次发送 FIN 结束报文然后等待客户端的确认关闭请求。若没有 TIME-WAIT 状态，客户端关闭了连接，但是由于网络问题服务端没有收到确认，只能空等着，然后重新发 FIN 给客户端，但是客户端已经关闭了，这样就会导致服务端的资源浪费。

#### 为什么连接的时候是三次握手，关闭的时候却是四次握手？

因为当服务端收到客户端的 SYN 连接请求报文后，可以直接发送 SYN+ACK 报文。其中 ACK 报文是用来应答的，SYN 报文是用来同步的。但是关闭连接时，当服务端收到 FIN 报文时，很可能并不会立即关闭 SOCKET，所以只能先回复一个 ACK 报文，告诉客户端，"你发的 FIN 报文我收到了"。只有等到我服务端所有的报文都发送完了，我才能发送 FIN 报文，因此不能一起发送。故需要四步握手。

## HTTPS 加密过程

---

#### 图解：

<img src="./imgs/tcp-https/tls.png" style="zoom: 50%;" />

#### 图解过程详解：

首先 Client 端会发一个**Client Hello**的消息给 server 端，消息里面包含 Client 端生成的一个随机数 A，TLS 版本号，支持的密码套件。（TLS 第一次握手）

Server 端收到**Client Hello**的消息后会确认是否支持 TLS 版本号，从密码套件中选出一个密码套件，以及生成一个随机数 B，接着返回**Server Hello**消息，消息里面包含确认的 TLS 版本号，从密码套件中选出的合适密码套件，Server 端生成的随机数 B。

而后为了表明身份，Server 端会发出**Server Certificate**消息，里面包含了数字证书。随后再发**Server Hello Done**消息，表示 Server 端已经将该给的东西都给了。（TLS 第二次握手）

待 Client 端验证服务器证书可信后，Client 端会生成一个新的随机数 C（pre-master），然后用 Server 端选择的密码套件的公钥对这个随机数进行加密，随后通过发送**Change Cipher Key Exchange**消息将随机数发给 Server 端。

Server 端收到这个随机数 C 后，至此 Client 端和 Server 端都有了三个随机数 A，B，C，然后双方使用这三个随机数生成**会话密钥**用于对后续的 HTTP 请求响应数据加解密。

生成会话密钥后，Client 端会发送**Change Cipher Spec**告诉 Server 端开始使用加密方式进行通信，然后 Client 端再发**Encrypted Handshake Message（Finished）**消息把之前的所有数据做摘要，再用会话密钥加密发送，让 Server 端做验证加密通信是否可用和之前握手信息是否有被中途篡改过。（TLS 第三次握手）

服务器也是同样的操作，发**Change Cipher Spec**和**Encrypted Handshake Message**消息，如果双方都验证加密和解密没问题，那么握手正式完成。（TLS 第四次握手）

#### 衍生的问题：

#### Client 怎么验证证书真伪？

首先数字证书是由用户信息（持有者的公钥、用途、颁发者、有效时间等）打成一个包，然后对信息使用 hash 算法计算得到一个 hash 值，然后 CA 用密钥将 hash 值加密，生成**Certificate Signature**，也就是 CA 对证书做了签名，然后添加到证书上。

Client 只要用同样的 hash 算法计算 hash 值 H1，通常浏览器和操作系统中集成了 CA 的公钥信息，收到证书后使用 CA 公钥对 Certificate Signature 值进行解密得到 hash 值 H2，最后对比 H1 和 H2 内容是否一致即可判断证书真伪。

#### 是否每次请求都会进行一个 TLS 加密过程？

当生成会话密钥后，同一个连接对数据都用会话密钥进行加解密，并且会话密钥只对一个连接起作用，所以同一个连接不会每次都进行一个 TLS 加密过程。

#### 证书存储的地方？

Server 端。

---

### 参考文章：

[三次握手和四次挥手](https://www.bilibili.com/video/BV18h41187Ep/?spm_id_from=333.788)

[https 加密过程视频简解](https://www.bilibili.com/video/BV1KY411x7Jp?spm_id_from=333.337.search-card.all.click)

[https 加密过程](https://mp.weixin.qq.com/s?__biz=MzUxODAzNDg4NQ==&mid=2247487650&idx=1&sn=dfee83f6773a589c775ccd6f40491289&chksm=f98e5408cef9dd1ed900a15c27f00c811a5587ffa59a90a69a73d1794800838b6fd4b061ff9f&scene=178&cur_album_id=1337204681134751744#rd)

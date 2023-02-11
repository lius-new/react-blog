## Cookie 和 Session 和 jwt+token

### Cookie

一种会话保存的机制,当访问服务器的时候服务器会下发名为 cookie 数据,该数据又服务器决定存放的时间.当再次请求服务器的时候,会携带cookie数据进行请求.

### Session

session 与cookie的差别在于数据是保存在服务器上的,每次请求服务器通过一个密钥进行访问,这个密钥通常是cookie. 
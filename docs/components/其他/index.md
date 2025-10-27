## java的安装
cd /usr/local
tar -zxvf /root/jdk-17_linux-x64_bin.tar.gz

vim /etc/profile
在文件末尾添加以下内容（注意路径要和你解压的目录一致）：

export JAVA_HOME=/usr/local/jdk-17
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

source /etc/profile

## nginx
、添加官方 Nginx Yum 源

执行以下命令：

cat > /etc/yum.repos.d/nginx.repo << 'EOF'
[nginx-stable]
name=nginx stable repo
baseurl=https://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOF


这一步是告诉 yum 去 nginx 官方仓库找包。

🧰 二、清理并更新 yum 缓存
yum clean all
yum makecache

🧱 三、查看可安装的版本
yum list nginx --showduplicates


输出中会看到类似：

nginx.x86_64   1.28.0-1.el8.ngx   nginx-stable
nginx.x86_64   1.26.2-1.el8.ngx   nginx-stable

🚀 四、安装指定版本（例如 1.28.0）

根据上一步的输出，执行：

yum install nginx-1.28.0-1.el8.ngx -y


1️⃣ 标准重启命令
sudo systemctl restart nginx


功能：停止并重新启动 Nginx

用于配置修改后立即生效

2️⃣ 只重新加载配置（不停止服务）
sudo systemctl reload nginx


功能：在不停止服务的情况下，加载新的配置文件

推荐修改配置后用 reload，这样不会中断连接

3️⃣ 停止和启动
sudo systemctl stop nginx   # 停止服务
sudo systemctl start nginx  # 启动服务

4️⃣ 查看 Nginx 状态
sudo systemctl status nginx

## 证书

正确安装方式（CentOS 8 / OpenCloudOS 8）
1️⃣ 安装 Certbot 和 Nginx 插件
yum install certbot python3-certbot-nginx -y

2️⃣ 检查版本
certbot --version


输出类似：

certbot 2.8.0


⚡ 使用 Certbot 自动配置 Nginx
certbot --nginx -d example.com -d www.example.com


Certbot 会自动生成证书并修改 Nginx 配置

如果你只有 .crt / .key，就按之前我教的 手动配置方法

🔄 自动续期（CentOS 8 系统自带 systemd 定时任务）

Certbot 会在安装时自动创建 /etc/systemd/system/certbot.timer 定时任务，每天检查是否需要续期。

可以手动测试：

certbot renew --dry-run
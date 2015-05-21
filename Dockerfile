FROM    centos:centos6

# RUN     mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
# RUN     mv /src/resources/CentOS6-Base-163.repo /etc/yum.repos.d/CentOS6-Base-163.repo
# RUN     yum clean all
# RUN     yum makecache

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
RUN     yum install -y npm
RUN     yum install -y git-core

COPY . /src
RUN cd /src; npm install
RUN npm install -g pm2
RUN npm install -g nodemon

EXPOSE  3000

CMD ["pm2", "start", "/src/pm2.json"]
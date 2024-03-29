# CSRF(Cross Site Request Forgery) Protection

Simulation Perequisite
1. Referer validation
2. CSRF token validation


### Spring
1. Install Java Packages 
```terminal
$ mvn package
```

2. Run Spring
Java LuckStoreApplication.java 

![image](https://user-images.githubusercontent.com/73173310/236589000-1da636cd-8940-4ee6-bf5c-bdc4a836b648.png)

![image](https://user-images.githubusercontent.com/73173310/236589659-2b0775ac-142c-4b6a-8468-1cdfd8b41999.png)

### Angular 
1. Install Node Packages
```terminal
$ npm i
```

2. Run Angular
```terminal
$ npm run dev
```

![image](https://user-images.githubusercontent.com/73173310/236589015-c2590a03-3dea-4529-9544-687fdb237180.png)

# REST API
![image](https://user-images.githubusercontent.com/73173310/236589039-b2e569a6-0ae8-4166-9225-bd1c25b25b4f.png)

# UI
![image](https://user-images.githubusercontent.com/73173310/236589060-9e6de7d6-4d53-4dc3-a3a9-1cdbbab24e14.png)

# RabbitMQ Docker Install
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 -p 15674:15674 -p 15675:15675 --restart=unless-stopped -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin rabbitmq:3.8-management

# RabbitMQ Plugin
rabbitmq-plugins enable rabbitmq_tracing rabbitmq_web_stomp

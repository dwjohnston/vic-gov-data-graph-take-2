# vic-gov-data-graph-take-2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




## Difficulty using APIS

The https://www.developer.vic.gov.au/ website is incredibly frustrating to use. It takes 20 seconds to load each page. 


https://www.developer.vic.gov.au/index.php?option=com_apiportal&view=apitester&usage=api&tab=tests&apiName=Popular+Baby+Names+Victoria+API&apiId=9eebc13b-f4fa-40ab-a9e7-8429da6f4e90&managerId=1&type=rest&apiVersion=1.0.0&menuId=153&renderTool=1#!/v1.0

Note this page takes about 20 seconds to load. 


While the API gives me the URI - it doesn't me the URL and that ends up being hard to find. 


For the popular baby names API - I couldn't see a mechanism for allowing requests from origin - requests from my browser responded with 403. (Requests from postman were fine). 

So the only way to use this would be to set up a proxy to make the requests on the browsers behalf. 



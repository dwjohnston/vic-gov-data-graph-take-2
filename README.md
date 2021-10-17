# vic-gov-data-graph-take-2

Project scaffolded from vue CLI (Vue2).  
See [Configuration Reference](https://cli.vuejs.org/config/).


## Use of SDP Ripple

I've not used [SDP Ripple](https://github.com/dpc-sdp/ripple). 

I had a fair bit of difficulty getting it working. 

Mainly, the issue is that the dependency is not transpiled, which means that the user (myself) needs to setup all all the transpilation config themself. 

https://github.com/dpc-sdp/ripple/issues/1069

Other issues I raised on the repo: 

https://github.com/dpc-sdp/ripple/issues/1070

https://github.com/dpc-sdp/ripple/issues/1066

Pull request to update documentation: 

https://github.com/dpc-sdp/ripple/pull/1068




## Plotly

I've used [vue-plotly](https://github.com/David-Desmaisons/vue-plotly) for the graphs. Works well. 

## Difficulty using APIS

The https://www.developer.vic.gov.au/ website is frustrating to use. It takes 20 seconds to load each page. 

While the API gives me the URI - it doesn't me the URL and that ends up being hard to find. 

For the popular baby names API - I couldn't see a mechanism for allowing requests from origin - requests from my browser responded with 403. (Requests from Postman were fine.) 

So the only way to use this would be to set up a proxy to make the requests on the browsers behalf. 

So instead I've just copy pasted the result into my `main.js` and to simulate the response. 
## Testing. 

I've set up tests using Jest and Testing Library. 

I have one test which is just assertion that text exists. 

Testing charts is actually an interesting proposition. The philosophy of Testing Library is 'Write tests as the user would use the site' and 'Use accessibile selectors to make assertions'. So testing that 'The bar chart has these values' would necessitate the chart also being accessible. At time of writing, I don't know what the best practises for this are.  


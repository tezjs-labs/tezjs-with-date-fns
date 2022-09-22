# tezjs-with-date-fns

- date-fns is a JavaScript Date utility library
- We can use date-fns with the Tezjs through the below steps.
- create a fresh tezjs project
```
npm create tez@latest
```
- install package for date-fns
```
npm install date-fns
```
- Now make one plugin directory and create one index.ts file inside it import functions of the date-fns library and make it global property. See the below code for reference.

```
import {format} from "date-fns";

export default function(vue:any){
    vue.config.globalProperties.$format = format;
}
```
- Now you can use global property in your component.
- In current project implemented one example to use date-fns library with tezjs. 
- If you want to learn more about date-fns you can visit: https://date-fns.org/
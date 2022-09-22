import {format,addDays,subDays,isWeekend,isDate,} from "date-fns";
import {fr} from "date-fns/locale";
import getMinutes from "date-fns/getMinutes";
import addHours from "date-fns/addHours";
export default function(vue:any){
    vue.config.globalProperties.$format = format;
    vue.config.globalProperties.$addDays = addDays;
    vue.config.globalProperties.$subDays = subDays;
    vue.config.globalProperties.$isWeekend = isWeekend;
    vue.config.globalProperties.$isDate = isDate;
    vue.config.globalProperties.$fr = fr;   
    vue.config.globalProperties.$getMinutes = getMinutes;
    vue.config.globalProperties.$addHours = addHours;
     
}
 

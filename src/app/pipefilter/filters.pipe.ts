import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value : any[], filterString: string, araName:string): any[] {
    const result:any =[];
    if(!value || filterString==='' || araName ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[araName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}

import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent 
{
    public temp:string="";
    public pass:any;
    public Arr:any[]=[1,2,3];
    public Sum:number=0;
    public countCapital()
    {
      var i:number=0;
      var iCount:number=0;
        for(i=0;i<this.temp.length;i++)
        {
           if(this.temp[i]>='A' && this.temp[i]<='Z')
           {
                iCount++;
           } 
        }
        return iCount;
    }
    public chkPass()
    {
      var i:number=0;
      var iCount:number=0;
      var iSmall:number=0;
      var idigit:number=0;
      var red=false;
        for(i=0;i<this.pass.length;i++)
        {
           if(this.pass[i]>='A' && this.pass[i]<='Z')
           {
                iCount++;
           } else
           if(this.pass[i]>='a' && this.pass[i]<='z')
           {
              iSmall++;
           }else 
           if(this.pass[i]>=0 && this.pass[i]<=9)
           {
              idigit++;
           }else
           {
              red=true;
           }
        }
        if(red&&iCount>=2 && iSmall>=3 && idigit>=1)
        {
            return ("Valid");
        }else
        {
          return ("Invalid");
        }
    }
    public sum()
    {
      var i:number=0;
      // var sum:number=0;
       for(i=0;i<this.Arr.length;i++)
       {
          this.Sum=this.Sum+this.Arr[i];
       }
      //  return (this.Arr);
      
    }
}

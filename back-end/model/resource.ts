export class Resource {
   private readonly name : string;
   private readonly manufacturer:string;
   private readonly serviceDuration:number;
   private readonly serviceStartDate:Date;


   constructor (resource:{
    name : string;
    manufacturer:string;
    service_duration:number;
    service_start_date:Date;
   }){
    this.name=resource.name;
    this.manufacturer=resource.manufacturer;
    this.serviceDuration=resource.service_duration;
    this.serviceStartDate=resource.service_start_date;

   }

   getName():string{
        return this.name;
   }

   getManufacturer():string{
    return this.manufacturer;
   }

   getServiceDuration():number{
    return this.serviceDuration;
   }

   getServiceStartDate():Date{
    return this.serviceStartDate;
   }
}
public with sharing class Controlador {
    public Controlador() {
        
    }
   @AuraEnabled
    public static Object[] callWithParam(Object[] coche){
       System.debug(coche);
       
        return coche; 
    }
    
   /* @AuraEnabled
    public static Object[] callWithParam(String model, String color, String price){
       System.debug(model , color, price);
       var car = new Object();
        car.model = model;
        car.color = color;
        car.price = price;
        return car; 
    }*/
}

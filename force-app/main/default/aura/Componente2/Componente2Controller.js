({
    myAction : function(component, event, helper) {

    },
    callAuraMethod : function(component, event, helper) {
        
        var coche = new Object();
        var action =component.get("c.callWithParam");
         action.setParams({
              coche        
        });
        alert(action)
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==="SUCCESS"){
                
               var conce = component.get("v.concessionarie"); 
               conce.push(action.getParams({coche})) ;   
               component.set("v.concessionarie", conce);    
                //alert(action.getParams({coche}).model);       
            }
        });
        $A.enqueueAction(action);
    }
})

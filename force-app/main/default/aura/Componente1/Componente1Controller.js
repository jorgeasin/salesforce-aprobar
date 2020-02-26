({  
    myAction : function(component, event, helper) {

    },
    setCar: function(component,event ){
        var dato1 = component.find("input1").get('v.value');
        component.set("v.model", dato1);
        
        var dato2 = component.find("input2").get('v.value');
        component.set("v.color", dato2);

        var dato3 = component.find("input3").get('v.value');
        component.set("v.price", dato3);
        
       
        
    },
    doInit: function(component, event, helper){
        helper.populateObjectList(component,event);
    },

    handleClick: function(component, event, helper){
        helper.augmentObject(component, event);
    }
})

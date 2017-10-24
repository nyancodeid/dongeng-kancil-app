/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Kancil dan Buaya */
    
    
        /* listitem  Kancil dan Buaya */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory1"); 
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_13", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* listitem  Kancil dan Harimau */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory2"); 
         return false;
    });
    
        /* listitem  Kancil dan Siput */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory3"); 
         return false;
    });
    
        /* listitem  Kancil Mencuri Mentimun */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory4"); 
         return false;
    });
    
        /* listitem  Kancil dan Monyet */
    $(document).on("click", ".uib_w_8", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory5"); 
         return false;
    });
    
        /* listitem  Kancil dan Beruang */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory6"); 
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_27", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Next */
    $(document).on("click", ".uib_w_15", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory2"); 
         return false;
    });
    
        /* button  Next story */
    
    
        /* button  Next story */
    
    
        /* button  Log out */
    
    
        /* button  Next story */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory6"); 
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_38", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Next story */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory3"); 
         return false;
    });
    
        /* button  Next Story */
    $(document).on("click", ".uib_w_34", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory4"); 
         return false;
    });
    
        /* button  Next story1 */
    $(document).on("click", ".uib_w_45", function(evt)
    {
         /*global activate_page */
         activate_page("#pagestory5"); 
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_43", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Log out */
    $(document).on("click", ".uib_w_40", function(evt)
    {
         /*global activate_page */
         activate_page("#pagepesan"); 
         return false;
    });
    
        /* button  .uib_w_50 */
    $(document).on("click", ".uib_w_50", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

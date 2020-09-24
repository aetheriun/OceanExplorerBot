ar grammarSource =
 {
    "origin": ["#[#SetMyShip#]PassageLength#"],
    //"origin": ["#[#SetMyShip#]Condition_Generic#"],
    
    "PassageLength": ["#Length_Short#","#Length_Medium#","#Length_Long#"],
    
    Length_Short: [
      "#Location#.",
      "#Condition#.",
      "#Event#."],
    
    Length_Medium: ["#LM_Start#"],
    
      LM_Start: [
        "#Location_Generic#. #LM_Location_Generic_Start#.",
        "#Location_Weather#. #LM_Location_Weather_Start#.",
        "#Location_Animal#. #LM_Location_Animal_Start#.",
        "#Location_Plant#. #LM_Location_Plant_Start#.",
        "#Location_Supernatural#. #LM_Location_Supernatural_Start#.",
        "#Condition_Generic#. #LM_Condition_Generic_Start#.",
        "#Condition_Weather#. #LM_Condition_Weather_Start#.",
        "#Condition_Animal#. #LM_Condition_Animal_Start#.",
        "#Condition_Plant#. #LM_Condition_Plant_Start#.",
        "#Condition_Supernatural#. #LM_Condition_Supernatural_Start#.",
        "#Event_Generic#. #LM_Event_Generic_Start#.",
        "#Event_Weather#. #LM_Event_Weather_Start#.",
        "#Event_Animal#. #LM_Event_Animal_Start#.",
        "#Event_Plant#. #LM_Event_Plant_Start#.",
        "#Event_Supernatural#. #LM_Event_Supernatural_Start#."
      ],
    
      LM_Location_Generic_Start: [ "#Condition_Generic#", "#Condition_Weather#", "#Condition_Animal#", "#Condition_Plant#", "#Condition_Supernatural#", "#Event_Generic#", "#Event_Weather#", "#Event_Animal#", "#Event_Plant#", "#Event_Supernatural#" ],
      LM_Location_Weather_Start: [ "#Condition_Generic#", "#Condition_Animal#", "#Condition_Plant#", "#Condition_Supernatural#", "#Event_Generic#", "#Event_Animal#", "#Event_Plant#", "#Event_Supernatural#" ], 
      LM_Location_Animal_Start: [ "#Condition_Generic#", "#Condition_Weather#", "#Condition_Plant#", "#Condition_Supernatural#", "#Event_Generic#", "#Event_Weather#", "#Event_Plant#", "#Event_Supernatural#" ], 
      LM_Location_Plant_Start: [ "#Condition_Generic#", "#Condition_Weather#", "#Condition_Animal#", "#Condition_Supernatural#", "#Event_Generic#", "#Event_Weather#", "#Event_Animal#", "#Event_Supernatural#" ], 
      LM_Location_Supernatural_Start: [ "#Condition_Generic#", "#Condition_Weather#", "#Condition_Animal#", "#Condition_Plant#", "#Event_Generic#", "#Event_Weather#", "#Event_Animal#", "#Event_Plant#", ], 
      LM_Condition_Generic_Start: [ "#Location_Generic#", "#Location_Weather#", "#Location_Animal#", "#Location_Plant#", "#Location_Supernatural#", "#Event_Generic#", "#Event_Weather#", "#Event_Animal#", "#Event_Plant#", "#Event_Supernatural#" ], 
      LM_Condition_Weather_Start: [ "#Location_Generic#", "#Location_Animal#", "#Location_Plant#", "#Location_Supernatural#", "#Event_Generic#", "#Event_Animal#", "#Event_Plant#", "#Event_Supernatural#" ], 
      LM_Condition_Animal_Start: [ "#Location_Generic#", "#Location_Weather#", "#Location_Plant#", "#Location_Supernatural#", "#Event_Generic#", "#Event_Weather#", "#Event_Plant#", "#Event_Supernatural#" ], 
      LM_Condition_Plant_Start: [ "#Location_Generic#", "#Location_Weather#", "#Location_Animal#", "#Location_Supernatural#", "#Event_Generic#", "#Event_Weather#", "#Event_Animal#", "#Event_Supernatural#" ],
      LM_Condition_Supernatural_Start: [ "#Location_Generic#", "#Location_Weather#", "#Location_Animal#", "#Location_Plant#", "#Event_Generic#", "#Event_Weather#", "#Event_Animal#", "#Event_Plant#", ], 
      LM_Event_Generic_Start: ["#Location_Generic#", "#Location_Weather#", "#Location_Animal#", "#Location_Plant#", "#Location_Supernatural#", "#Condition_Generic#", "#Condition_Weather#", "#Condition_Animal#", "#Condition_Plant#", "#Condition_Supernatural#"],
      LM_Event_Weather_Start: ["#Location_Generic#", "#Location_Animal#", "#Location_Plant#", "#Location_Supernatural#", "#Condition_Generic#", "#Condition_Animal#", "#Condition_Plant#", "#Condition_Supernatural#"],
      LM_Event_Animal_Start: ["#Location_Generic#","#Location_Weather#","#Location_Plant#","#Location_Supernatural#","#Condition_Generic#","#Condition_Weather#","#Condition_Plant#","#Condition_Supernatural#"],
      LM_Event_Plant_Start: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Supernatural#","#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Supernatural#"],
      LM_Event_Supernatural_Start: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Plant#","#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Plant#"],
      
    Length_Long: ["#LL_Start#"],
    
      LL_Start: [
        "#Location_Generic#. #LL_Location_Generic_Mid#",
        "#Location_Weather#. #LL_Location_Weather_Mid#",
        "#Location_Animal#. #LL_Location_Animal_Mid#",
        "#Location_Plant#. #LL_Location_Plant_Mid#",
        "#Location_Supernatural#. #LL_Location_Supernatural_Mid#",
        "#Condition_Generic#. #LL_Condition_Generic_Mid#",
        "#Condition_Weather#. #LL_Condition_Weather_Mid#",
        "#Condition_Animal#. #LL_Condition_Animal_Mid#",
        "#Condition_Plant#. #LL_Condition_Plant_Mid#",
        "#Condition_Supernatural#. #LL_Condition_Supernatural_Mid#",
        "#Event_Generic#. #LL_Event_Generic_Mid#",
        "#Event_Weather#. #LL_Event_Weather_Mid#",
        "#Event_Animal#. #LL_Event_Animal_Mid#",
        "#Event_Plant#. #LL_Event_Plant_Mid#",
        "#Event_Supernatural#. #LL_Event_Supernatural_Mid#"
      ],
    
        LL_Location_Generic_Mid: [ "#Condition_Generic#. #LL_Location_Generic_Mid_Condition_Generic_End#.", "#Condition_Weather#. #LL_Location_Generic_Mid_Condition_Weather_End#.", "#Condition_Animal#. #LL_Location_Generic_Mid_Condition_Animal_End#.", "#Condition_Plant#. #LL_Location_Generic_Mid_Condition_Plant_End#.", "#Condition_Supernatural#. #LL_Location_Generic_Mid_Condition_Supernatural_End#.", "#Event_Generic#. #LL_Location_Generic_Mid_Event_Generic_End#.", "#Event_Weather#. #LL_Location_Generic_Mid_Event_Weather_End#.", "#Event_Animal#. #LL_Location_Generic_Mid_Event_Animal_End#.", "#Event_Plant#. #LL_Location_Generic_Mid_Event_Plant_End#.", "#Event_Supernatural#. #LL_Location_Generic_Mid_Event_Supernatural_End#." ], 
        LL_Location_Weather_Mid: [ "#Condition_Generic#. #LL_Location_Weather_Mid_Condition_Generic_End#.", "#Condition_Animal#. #LL_Location_Weather_Mid_Condition_Animal_End#.", "#Condition_Plant#. #LL_Location_Weather_Mid_Condition_Plant_End#.", "#Condition_Supernatural#. #LL_Location_Weather_Mid_Condition_Supernatural_End#.", "#Event_Generic#. #LL_Location_Weather_Mid_Event_Generic_End#.", "#Event_Animal#. #LL_Location_Weather_Mid_Event_Animal_End#.", "#Event_Plant#. #LL_Location_Weather_Mid_Event_Plant_End#.", "#Event_Supernatural#. #LL_Location_Weather_Mid_Event_Supernatural_End#." ], 
        LL_Location_Animal_Mid: [ "#Condition_Generic#. #LL_Location_Animal_Mid_Condition_Generic_End#.", "#Condition_Weather#. #LL_Location_Animal_Mid_Condition_Weather_End#.", "#Condition_Plant#. #LL_Location_Animal_Mid_Condition_Plant_End#.", "#Condition_Supernatural#. #LL_Location_Animal_Mid_Condition_Supernatural_End#.", "#Event_Generic##. #LL_Location_Animal_Mid_Event_Generic_End#.", "#Event_Weather#. #LL_Location_Animal_Mid_Event_Weather_End#.", "#Event_Plant#. #LL_Location_Animal_Mid_Event_Plant_End#.", "#Event_Supernatural#. #LL_Location_Animal_Mid_Event_Supernatural_End#." ], 
        LL_Location_Plant_Mid: [ "#Condition_Generic#. #LL_Location_Plant_Mid_Condition_Generic_End#.", "#Condition_Weather#. #LL_Location_Plant_Mid_Condition_Weather_End#.", "#Condition_Animal#. #LL_Location_Plant_Mid_Condition_Animal_End#.", "#Condition_Supernatural#. #LL_Location_Plant_Mid_Condition_Supernatural_End#.", "#Event_Generic#. #LL_Location_Plant_Mid_Event_Generic_End#.", "#Event_Weather#. #LL_Location_Plant_Mid_Event_Weather_End#.", "#Event_Animal#. #LL_Location_Plant_Mid_Event_Animal_End#.", "#Event_Supernatural#. #LL_Location_Plant_Mid_Event_Supernatural_End#." ], 
        LL_Location_Supernatural_Mid: [ "#Condition_Generic#. #LL_Location_Supernatural_Mid_Condition_Generic_End#.", "#Condition_Weather#. #LL_Location_Supernatural_Mid_Condition_Weather_End#.", "#Condition_Animal#. #LL_Location_Supernatural_Mid_Condition_Animal_End#.", "#Condition_Plant#. #LL_Location_Supernatural_Mid_Condition_Plant_End#.", "#Event_Generic#. #LL_Location_Supernatural_Mid_Event_Generic_End#.", "#Event_Weather#. #LL_Location_Supernatural_Mid_Event_Weather_End#.", "#Event_Animal#. #LL_Location_Supernatural_Mid_Event_Animal_End#.", "#Event_Plant#. #LL_Location_Supernatural_Mid_Event_Plant_End#." ], 
        LL_Condition_Generic_Mid: [ "#Location_Generic#. #LL_Condition_Generic_Mid_Locaiton_Generic_End#.", "#Location_Weather#. #LL_Condition_Generic_Mid_Locaiton_Weather_End#.", "#Location_Animal#. #LL_Condition_Generic_Mid_Locaiton_Animal_End#.", "#Location_Plant#. #LL_Condition_Generic_Mid_Locaiton_Plant_End#.", "#Location_Supernatural#. #LL_Condition_Generic_Mid_Locaiton_Supernatural_End#.", "#Event_Generic#. #LL_Condition_Generic_Mid_Event_Generic_End#.", "#Event_Weather#. #LL_Condition_Generic_Mid_Event_Weather_End#.", "#Event_Animal#. #LL_Condition_Generic_Mid_Event_Animal_End#.", "#Event_Plant#. #LL_Condition_Generic_Mid_Event_Plant_End#.", "#Event_Supernatural#. #LL_Condition_Generic_Mid_Event_Supernatural_End#." ], 
        LL_Condition_Weather_Mid: [ "#Location_Generic#. #LL_Condition_Weather_Mid_Locaiton_Generic_End#.", "#Location_Animal#. #LL_Condition_Weather_Mid_Locaiton_Animal_End#.", "#Location_Plant#. #LL_Condition_Weather_Mid_Locaiton_Plant_End#.", "#Location_Supernatural#. #LL_Condition_Weather_Mid_Locaiton_Supernatural_End#.", "#Event_Generic#. #LL_Condition_Weather_Mid_Event_Generic_End#.", "#Event_Animal#. #LL_Condition_Weather_Mid_Event_Animal_End#.", "#Event_Plant#. #LL_Condition_Weather_Mid_Event_Plant_End#.", "#Event_Supernatural#. #LL_Condition_Weather_Mid_Event_Supernatural_End#." ], 
        LL_Condition_Animal_Mid: [ "#Location_Generic#. #LL_Condition_Animal_Mid_Locaiton_Generic_End#.", "#Location_Weather#. #LL_Condition_Animal_Mid_Locaiton_Weather_End#.", "#Location_Plant#. #LL_Condition_Animal_Mid_Locaiton_Plant_End#.", "#Location_Supernatural#. #LL_Condition_Animal_Mid_Locaiton_Supernatural_End#.", "#Event_Generic#. #LL_Condition_Animal_Mid_Event_Generic_End#.", "#Event_Weather#. #LL_Condition_Animal_Mid_Event_Weather_End#.", "#Event_Plant#. #LL_Condition_Animal_Mid_Event_Plant_End#.", "#Event_Supernatural#. #LL_Condition_Animal_Mid_Event_Supernatural_End#." ], 
        LL_Condition_Plant_Mid: [ "#Location_Generic#. #LL_Condition_Plant_Mid_Locaiton_Generic_End#.", "#Location_Weather#. #LL_Condition_Plant_Mid_Locaiton_Weather_End#.", "#Location_Animal#. #LL_Condition_Plant_Mid_Locaiton_Animal_End#.", "#Location_Supernatural#. #LL_Condition_Plant_Mid_Locaiton_Supernatural_End#.", "#Event_Generic#. #LL_Condition_Plant_Mid_Event_Generic_End#.", "#Event_Weather#. #LL_Condition_Plant_Mid_Event_Weather_End#.", "#Event_Animal#. #LL_Condition_Plant_Mid_Event_Animal_End#.", "#Event_Supernatural#. #LL_Condition_Plant_Mid_Event_Supernatural_End#.", ], 
        LL_Condition_Supernatural_Mid: [ "#Location_Generic#. #LL_Condition_Supernatural_Mid_Locaiton_Generic_End#.", "#Location_Weather#. #LL_Condition_Supernatural_Mid_Locaiton_Weather_End#.", "#Location_Animal#. #LL_Condition_Supernatural_Mid_Locaiton_Animal_End#.", "#Location_Plant#. #LL_Condition_Supernatural_Mid_Locaiton_Plant_End#.", "#Event_Generic#. #LL_Condition_Supernatural_Mid_Event_Generic_End#.", "#Event_Weather#. #LL_Condition_Supernatural_Mid_Event_Weather_End#.", "#Event_Animal#. #LL_Condition_Supernatural_Mid_Event_Animal_End#.", "#Event_Plant#. #LL_Condition_Supernatural_Mid_Event_Plant_End#.", ], 
        LL_Event_Generic_Mid: [ "#Location_Generic#. #LL_Event_Generic_Mid_Locaiton_Generic_End#.", "#Location_Weather#. #LL_Event_Generic_Mid_Locaiton_Weather_End#.", "#Location_Animal#. #LL_Event_Generic_Mid_Locaiton_Animal_End#.", "#Location_Plant#. #LL_Event_Generic_Mid_Locaiton_Plant_End#.", "#Location_Supernatural#. #LL_Event_Generic_Mid_Locaiton_Supernatural_End#.", "#Condition_Generic#. #LL_Event_Generic_Mid_Condition_Generic_End#.", "#Condition_Weather#. #LL_Event_Generic_Mid_Condition_Weather_End#.", "#Condition_Animal#. #LL_Event_Generic_Mid_Condition_Animal_End#.", "#Condition_Plant#. #LL_Event_Generic_Mid_Condition_Plant_End#.", "#Condition_Supernatural#. #LL_Event_Generic_Mid_Condition_Supernatural_End#.", ], 
        LL_Event_Weather_Mid: [ "#Location_Generic#. #LL_Event_Weather_Mid_Locaiton_Generic_End#.", "#Location_Animal#. #LL_Event_Weather_Mid_Locaiton_Animal_End#.", "#Location_Plant#. #LL_Event_Weather_Mid_Locaiton_Plant_End#.", "#Location_Supernatural#. #LL_Event_Weather_Mid_Locaiton_Supernatural_End#.", "#Condition_Generic#. #LL_Event_Weather_Mid_Condition_Generic_End#.", "#Condition_Animal#. #LL_Event_Weather_Mid_Condition_Animal_End#.", "#Condition_Plant#. #LL_Event_Weather_Mid_Condition_Plant_End#.", "#Condition_Supernatural#. #LL_Event_Weather_Mid_Condition_Supernatural_End#." ], 
        LL_Event_Animal_Mid: [ "#Location_Generic#. #LL_Event_Animal_Mid_Locaiton_Generic_End#.", "#Location_Weather#. #LL_Event_Animal_Mid_Locaiton_Weather_End#.", "#Location_Plant#. #LL_Event_Animal_Mid_Locaiton_Plant_End#.", "#Location_Supernatural#. #LL_Event_Animal_Mid_Locaiton_Supernatural_End#.", "#Condition_Generic#. #LL_Event_Animal_Mid_Condition_Generic_End#.", "#Condition_Weather#. #LL_Event_Animal_Mid_Condition_Weather_End#.", "#Condition_Plant#. #LL_Event_Animal_Mid_Condition_Plant_End#.", "#Condition_Supernatural#. #LL_Event_Animal_Mid_Condition_Supernatural_End#.", ], 
        LL_Event_Plant_Mid: [ "#Location_Generic#. #LL_Event_Plant_Mid_Location_Generic_End#.", "#Location_Weather#. #LL_Event_Plant_Mid_Location_Weather_End#.", "#Location_Animal#. #LL_Event_Plant_Mid_Location_Animal_End#.", "#Location_Supernatural#. #LL_Event_Plant_Mid_Location_Supernatural_End#.", "#Condition_Generic#. #LL_Event_Plant_Mid_Condition_Generic_End#.", "#Condition_Weather#. #LL_Event_Plant_Mid_Condition_Weather_End#.", "#Condition_Animal#. #LL_Event_Plant_Mid_Condition_Animal_End#.", "#Condition_Supernatural#. #LL_Event_Plant_Mid_Condition_Supernatural_End#.", ], 
        LL_Event_Supernatural_Mid: [ "#Location_Generic#. #LL_Event_Supernatural_Mid_Location_Generic_End#.", "#Location_Weather#. #LL_Event_Supernatural_Mid_Location_Weather_End#.", "#Location_Animal#. #LL_Event_Supernatural_Mid_Location_Animal_End#.", "#Location_Plant#. #LL_Event_Supernatural_Mid_Location_Plant_End#.", "#Condition_Generic#. #LL_Event_Supernatural_Mid_Condition_Generic_End#.", "#Condition_Weather#. #LL_Event_Supernatural_Mid_Condition_Weather_End#.", "#Condition_Animal#. #LL_Event_Supernatural_Mid_Condition_Animal_End#.", "#Condition_Plant#. #LL_Event_Supernatural_Mid_Condition_Plant_End#." ], 
    
        LL_Location_Generic_Mid_Condition_Generic_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Plant#"],
        LL_Location_Generic_Mid_Condition_Weather_End: ["#Event_Generic#","#Event_Animal#","#Event_Plant#","#Event_Supernatural#"],
        LL_Location_Generic_Mid_Condition_Animal_End: ["#Event_Generic#","#Event_Weather#","#Event_Plant#","#Event_Supernatural#"],
        LL_Location_Generic_Mid_Condition_Plant_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Supernatural#"],
        LL_Location_Generic_Mid_Condition_Supernatural_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Plant#"],
        LL_Location_Generic_Mid_Event_Generic_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Location_Generic_Mid_Event_Weather_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Location_Generic_Mid_Event_Animal_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Location_Generic_Mid_Event_Plant_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Supernatural#"],
        LL_Location_Generic_Mid_Event_Supernatural_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Plant#"],
        LL_Location_Weather_Mid_Condition_Generic_End: ["#Event_Generic#","#Event_Animal#","#Event_Plant#","#Event_Supernatural#"],
        LL_Location_Weather_Mid_Condition_Animal_End: ["#Event_Generic#","#Event_Plant#","#Event_Supernatural#"],
        LL_Location_Weather_Mid_Condition_Plant_End: [ "#Event_Generic#","#Event_Animal#","#Event_Supernatural#"],
        LL_Location_Weather_Mid_Condition_Supernatural_End: [ "#Event_Generic#", "#Event_Animal#", "#Event_Plant#" ],
        LL_Location_Weather_Mid_Event_Generic_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Location_Weather_Mid_Event_Animal_End: ["#Condition_Generic#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Location_Weather_Mid_Event_Plant_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Supernatural#"],
        LL_Location_Weather_Mid_Event_Supernatural_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Plant#"],
        LL_Location_Animal_Mid_Condition_Generic_End: ["#Event_Generic#", "#Event_Weather#","#Event_Plant#","#Event_Supernatural#"],
        LL_Location_Animal_Mid_Condition_Weather_End: ["#Event_Generic#","#Event_Plant#","#Event_Supernatural#"],
        LL_Location_Animal_Mid_Condition_Plant_End: ["#Event_Generic#","#Event_Weather#","#Event_Supernatural#"],
        LL_Location_Animal_Mid_Condition_Supernatural_End: ["#Event_Generic#","#Event_Weather#","#Event_Plant#"],
        LL_Location_Animal_Mid_Event_Generic_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Location_Animal_Mid_Event_Weather_End: ["#Condition_Generic#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Location_Animal_Mid_Event_Plant_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Supernatural#"],
        LL_Location_Animal_Mid_Event_Supernatural_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Plant#"],
        LL_Location_Plant_Mid_Condition_Generic_End: [ "#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Supernatural#"],
        LL_Location_Plant_Mid_Condition_Weather_End: ["#Event_Generic#","#Event_Animal#","#Event_Supernatural#"],
        LL_Location_Plant_Mid_Condition_Animal_End: ["#Event_Generic#","#Event_Weather#","#Event_Supernatural#"],
        LL_Location_Plant_Mid_Condition_Supernatural_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#"],
        LL_Location_Plant_Mid_Event_Generic_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Supernatural#"],
        LL_Location_Plant_Mid_Event_Weather_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Supernatural#"],
        LL_Location_Plant_Mid_Event_Animal_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Supernatural#"],
        LL_Location_Plant_Mid_Event_Supernatural_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#"],
        LL_Location_Supernatural_Mid_Condition_Generic_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Plant#"],
        LL_Location_Supernatural_Mid_Condition_Weather_End: ["#Event_Generic#","#Event_Animal#","#Event_Plant#"],
        LL_Location_Supernatural_Mid_Condition_Animal_End: ["#Event_Generic#","#Event_Weather#","#Event_Plant#"],
        LL_Location_Supernatural_Mid_Condition_Plant_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#"],
        LL_Location_Supernatural_Mid_Event_Generic_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#", "#Condition_Plant#"],
        LL_Location_Supernatural_Mid_Event_Weather_End: ["#Condition_Generic#","#Condition_Animal#", "#Condition_Plant#"],
        LL_Location_Supernatural_Mid_Event_Animal_End: [ "#Condition_Generic#", "#Condition_Weather#", "#Condition_Plant#"],
        LL_Location_Supernatural_Mid_Event_Plant_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#"],
        LL_Condition_Generic_Mid_Locaiton_Generic_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Plant#","#Event_Supernatural#"],
        LL_Condition_Generic_Mid_Locaiton_Weather_End: ["#Event_Generic#","#Event_Animal#","#Event_Plant#","#Event_Supernatural#"],
        LL_Condition_Generic_Mid_Locaiton_Animal_End: ["#Event_Generic#","#Event_Weather#","#Event_Plant#","#Event_Supernatural#"],
        LL_Condition_Generic_Mid_Locaiton_Plant_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Supernatural#"],
        LL_Condition_Generic_Mid_Locaiton_Supernatural_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Plant#"],
        LL_Condition_Generic_Mid_Event_Generic_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Plant#", "#Location_Supernatural#"],
        LL_Condition_Generic_Mid_Event_Weather_End: ["#Location_Generic#","#Location_Animal#","#Location_Plant#","#Location_Supernatural#"],
        LL_Condition_Generic_Mid_Event_Animal_End: ["#Location_Generic#","#Location_Weather#","#Location_Plant#","#Location_Supernatural#"],
        LL_Condition_Generic_Mid_Event_Plant_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Supernatural#"],
        LL_Condition_Generic_Mid_Event_Supernatural_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Plant#"],
        LL_Condition_Weather_Mid_Locaiton_Generic_End: ["#Event_Generic#","#Event_Animal#",  "#Event_Plant#", "#Event_Supernatural#"  ],
        LL_Condition_Weather_Mid_Locaiton_Animal_End: [ "#Event_Generic#", "#Event_Plant#", "#Event_Supernatural#"],
        LL_Condition_Weather_Mid_Locaiton_Plant_End: [ "#Event_Generic#", "#Event_Animal#","#Event_Supernatural#" ],
        LL_Condition_Weather_Mid_Locaiton_Supernatural_End: [ "#Event_Generic#", "#Event_Animal#","#Event_Plant#"],
        LL_Condition_Weather_Mid_Event_Generic_End: ["#Location_Generic#","#Location_Animal#","#Location_Plant#","#Location_Supernatural#"],
        LL_Condition_Weather_Mid_Event_Animal_End: ["#Location_Generic#","#Location_Plant#","#Location_Supernatural#"],
        LL_Condition_Weather_Mid_Event_Plant_End: [ "#Location_Generic#", "#Location_Animal#","#Location_Supernatural#"],
        LL_Condition_Weather_Mid_Event_Supernatural_End: ["#Location_Generic#","#Location_Animal#","#Location_Plant#"],
        LL_Condition_Animal_Mid_Locaiton_Generic_End: [ "#Event_Generic#", "#Event_Weather#","#Event_Plant#","#Event_Supernatural#"],
        LL_Condition_Animal_Mid_Locaiton_Weather_End: [ "#Event_Generic#","#Event_Plant#","#Event_Supernatural#"],
        LL_Condition_Animal_Mid_Locaiton_Plant_End: ["#Event_Generic#","#Event_Weather#", "#Event_Supernatural#"],
        LL_Condition_Animal_Mid_Locaiton_Supernatural_End: [ "#Event_Generic#","#Event_Weather#","#Event_Plant#"],
        LL_Condition_Animal_Mid_Event_Generic_End: ["#Location_Generic#",  "#Location_Weather#","#Location_Plant#","#Location_Supernatural#"],
        LL_Condition_Animal_Mid_Event_Weather_End: ["#Location_Generic#","#Location_Plant#","#Location_Supernatural#"],
        LL_Condition_Animal_Mid_Event_Plant_End: [ "#Location_Generic#",   "#Location_Weather#",  "#Location_Supernatural#"],
        LL_Condition_Animal_Mid_Event_Supernatural_End: [ "#Location_Generic#", "#Location_Weather#", "#Location_Plant#" ],
        LL_Condition_Plant_Mid_Locaiton_Generic_End: [ "#Event_Generic#", "#Event_Weather#",  "#Event_Animal#",  "#Event_Supernatural#"  ],
        LL_Condition_Plant_Mid_Locaiton_Weather_End: [ "#Event_Generic#",  "#Event_Animal#", "#Event_Supernatural#"  ],
        LL_Condition_Plant_Mid_Locaiton_Animal_End: [  "#Event_Generic#", "#Event_Weather#", "#Event_Supernatural#"  ],
        LL_Condition_Plant_Mid_Locaiton_Supernatural_End: [ "#Event_Generic#", "#Event_Weather#", "#Event_Animal#"],
        LL_Condition_Plant_Mid_Event_Generic_End: [ "#Location_Generic#", "#Location_Weather#","#Location_Animal#","#Location_Supernatural#"],
        LL_Condition_Plant_Mid_Event_Weather_End: ["#Location_Generic#", "#Location_Animal#","#Location_Supernatural#"],
        LL_Condition_Plant_Mid_Event_Animal_End: ["#Location_Generic#","#Location_Weather#","#Location_Supernatural#"],
        LL_Condition_Plant_Mid_Event_Supernatural_End: ["#Location_Generic#","#Location_Weather#", "#Location_Animal#"],
        LL_Condition_Supernatural_Mid_Locaiton_Generic_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Plant#"],
        LL_Condition_Supernatural_Mid_Locaiton_Weather_End: ["#Event_Generic#","#Event_Animal#","#Event_Plant#"],
        LL_Condition_Supernatural_Mid_Locaiton_Animal_End: ["#Event_Generic#","#Event_Weather#","#Event_Plant#"],
        LL_Condition_Supernatural_Mid_Locaiton_Plant_End: ["#Event_Generic#","#Event_Weather#","#Event_Animal#"],
        LL_Condition_Supernatural_Mid_Event_Generic_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Plant#"],
        LL_Condition_Supernatural_Mid_Event_Weather_End: ["#Location_Generic#","#Location_Animal#","#Location_Plant#"],
        LL_Condition_Supernatural_Mid_Event_Animal_End: ["#Location_Generic#","#Location_Weather#","#Location_Plant#"],
        LL_Condition_Supernatural_Mid_Event_Plant_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#"],
        LL_Event_Generic_Mid_Locaiton_Generic_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Event_Generic_Mid_Locaiton_Weather_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Event_Generic_Mid_Locaiton_Animal_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Event_Generic_Mid_Locaiton_Plant_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Supernatural#"],
        LL_Event_Generic_Mid_Locaiton_Supernatural_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Plant#"],
        LL_Event_Generic_Mid_Condition_Generic_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Plant#","#Location_Supernatural#"],
        LL_Event_Generic_Mid_Condition_Weather_End: ["#Location_Generic#","#Location_Animal#","#Location_Plant#","#Location_Supernatural#"],
        LL_Event_Generic_Mid_Condition_Animal_End: ["#Location_Generic#","#Location_Weather#","#Location_Plant#","#Location_Supernatural#"],
        LL_Event_Generic_Mid_Condition_Plant_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Supernatural#"],
        LL_Event_Generic_Mid_Condition_Supernatural_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Plant#"],
        LL_Event_Weather_Mid_Locaiton_Generic_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Event_Weather_Mid_Locaiton_Animal_End: ["#Condition_Generic#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Event_Weather_Mid_Locaiton_Plant_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Supernatural#"],
        LL_Event_Weather_Mid_Locaiton_Supernatural_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Plant#"],
        LL_Event_Weather_Mid_Condition_Generic_End: ["#Location_Generic#","#Location_Animal#","#Location_Plant#","#Location_Supernatural#"],
        LL_Event_Weather_Mid_Condition_Animal_End: ["#Location_Generic#","#Location_Plant#","#Location_Supernatural#"],
        LL_Event_Weather_Mid_Condition_Plant_End: ["#Location_Generic#","#Location_Animal#","#Location_Supernatural#"],
        LL_Event_Weather_Mid_Condition_Supernatural_End: ["#Location_Generic#","#Location_Animal#","#Location_Plant#"],
        LL_Event_Animal_Mid_Locaiton_Generic_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Event_Animal_Mid_Locaiton_Weather_End: ["#Condition_Generic#","#Condition_Plant#","#Condition_Supernatural#"],
        LL_Event_Animal_Mid_Locaiton_Plant_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Supernatural#"],
        LL_Event_Animal_Mid_Locaiton_Supernatural_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Plant#"],
        LL_Event_Animal_Mid_Condition_Generic_End: ["#Location_Generic#","#Location_Weather#","#Location_Plant#","#Location_Supernatural#"],
        LL_Event_Animal_Mid_Condition_Weather_End: ["#Location_Generic#","#Location_Plant#","#Location_Supernatural#"],
        LL_Event_Animal_Mid_Condition_Plant_End: ["#Location_Generic#","#Location_Weather#","#Location_Supernatural#"],
        LL_Event_Animal_Mid_Condition_Supernatural_End: ["#Location_Generic#","#Location_Weather#","#Location_Plant#"],
        LL_Event_Plant_Mid_Location_Generic_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Supernatural#"],
        LL_Event_Plant_Mid_Location_Weather_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Supernatural#"],
        LL_Event_Plant_Mid_Location_Animal_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Supernatural#"],
        LL_Event_Plant_Mid_Location_Supernatural_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#"],
        LL_Event_Plant_Mid_Condition_Generic_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Supernatural#"],
        LL_Event_Plant_Mid_Condition_Weather_End: ["#Location_Generic#","#Location_Animal#","#Location_Supernatural#"],
        LL_Event_Plant_Mid_Condition_Animal_End: ["#Location_Generic#","#Location_Weather#","#Location_Supernatural#"],
        LL_Event_Plant_Mid_Condition_Supernatural_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#"],
        LL_Event_Supernatural_Mid_Location_Generic_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Plant#"],
        LL_Event_Supernatural_Mid_Location_Weather_End: ["#Condition_Generic#","#Condition_Animal#","#Condition_Plant#"],
        LL_Event_Supernatural_Mid_Location_Animal_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Plant#"],
        LL_Event_Supernatural_Mid_Location_Plant_End: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#"],
        LL_Event_Supernatural_Mid_Condition_Generic_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Plant#"],
        LL_Event_Supernatural_Mid_Condition_Weather_End: ["#Location_Generic#","#Location_Animal#","#Location_Plant#"],
        LL_Event_Supernatural_Mid_Condition_Animal_End: ["#Location_Generic#","#Location_Weather#","#Location_Plant#"],
        LL_Event_Supernatural_Mid_Condition_Plant_End: ["#Location_Generic#","#Location_Weather#","#Location_Animal#"],
    
    
    Location: ["#Location_Generic#","#Location_Weather#","#Location_Animal#","#Location_Plant#","#Location_Supernatural#"],
    
      Location_Generic: [
      "I #LGPassageStart# #LSConnector# #TypeOfLocation#",
      "I have #DiscoveredSub# #TypeOfLocation#",
      "#MapDescriptor.a# #MapType# has lead me to #TypeOfLocation#",
      ],
    
      Location_Weather: [
        "To evade #StormName.a#, I sail through #WaterType#",
        "#PushedSub.capitalize# off course by #StormName.a#, I #FindSelf# in #TypeOfLocation#",
      ],
    
      Location_Animal: [
        "#AnimalFollow.capitalize# #AnimalGroup.a# of #AnimalType# has #LeadTo# #TypeOfLocation#"
      ],
    
      Location_Plant: [
         "Diverting around #PlantGroup.a# of #PlantType#, I #FindSelf# in #TypeOfLocation#",
      ],
    
      Location_Supernatural: [
        "#AnimalFollowed# by a #SupAnimalDescription# #AnimalType#, I take refuge in #TypeOfLocation#",
        "Charting my course against a mysterious star on the horizon leads me to #TypeOfLocation#"
      ],
    
    
    Condition: ["#Condition_Generic#","#Condition_Weather#","#Condition_Animal#","#Condition_Plant#","#Condition_Supernatural#"],
    
      Condition_Generic: [
      "My #MyShip# #SwaySub# in the #GentleSub# #TideSub# of the #WaterLocation#", 
      "My #MyShip# struggles against the #TideSub#",
      "I #AttemptSub# to #RepairSub# #DamagedSub.a# #ShipParts#",
      "I #AttemptSub# to #Scavenge# some #SupplyType#"
      ],
    
      Condition_Weather: [
        "#StormDescription.a.capitalize# #StormName# has left my #MyShip# with #DamagedSub.a# #ShipParts#",
      ],
    
      Condition_Animal: [
        "#AnimalGroup.a.capitalize# of #AnimalType# #CollidedSub# my #MyShip#, #BreakingSub# the #ShipParts#",
        "Somehow #SingleSub.a# #AnimalType# has found its way aboard",
        "Using #FishingImpliment# I catch #FewSub.a# #AnimalType#, to replenish my food #StockP#"
      ],
    
      Condition_Plant: [
        "I find a #StrandSub# of #PlantType# #PlantDamage# the #ShipParts#",
        "I #PlantHunt# #PlantUse# #PlantType# to #Replace# my #StockP#"
      ],
    
      Condition_Supernatural: [
        "The #ShipRoom# is found to be completely filled with #AnimalTypeP#",
        "All of the #SupplyType# aboard has mysteriously turned in #FoodEffect#"
      ],
    
    Event: ["#Event_Generic#","#Event_Weather#","#Event_Animal#","#Event_Plant#","#Event_Supernatural#"],
    
      Event_Generic: [
        "The #WavesSub# #GlittersSub# in #LightSource#",
        "#FeelingOf.a.capitalize# of #Emotions# #FeelingAction#",
        "#TempDevice.capitalize#"
      ],
    
      Event_Weather: [
        "#StormName.a.capitalize# #StormFormation# #StormLocation#",
        "#StormLocation.capitalize# #StormName.a# #StormFormation#",
      ],
    
      Event_Animal: [
      "#AnimalGroup.a.capitalize# of #AnimalTypeP# #AnimalAction#",
      "#SingleSub.a.capitalize# #AnimalType# #IdlesSub# in the #WavesSub#",
      "#EventProximity.capitalize# I see #SingleSub.a# #AnimalType# #AnimalMovement#",
      "#EventProximity.capitalize# I see #AnimalGroup.a# of #AnimalTypeP# #AnimalMovement#",
      "#SeaBirdGroup.a.capitalize# of #SeaBirdsP# #SeaBirdAction# #BirdActionLink#"
      ],
    
      Event_Plant: [
        "#PlantGroup.a.capitalize# of #PlantType# #BloomSub.s# #BelowSub# the #WavesSub#",
        "I #PlantDive# #PlantGroup.a# of #PlantType#, #FeelingSub# the #PlantDescriptior# #PlantPart# #PlantAction# my #BodyPart#",
        "#SampleFind.capitalize# #SampleDecription.a# #SampleType#, I #SampleAction# my #BotanicalSub# #Archive#"
      ],
    
      Event_Supernatural: [
        "#EventProximity.capitalize# #DecrepitSub.a# #VesselType# #SupShipAction#",
        "#StrangeSub.a.capitalize# #ShapeSub# #ShapeAction# the #WavesSub#",
        "#HorizonSub.capitalize# is #CoveredSub# by #CloudDescriptor.a# #CloudType#",
        
      ],
    
    "TypeOfLocation" : ["#WaterType#","#LandedType#"],
    "WaterType": ["#WaterDescriptor.a# #WaterLocation#"],
    "LandedType": ["#LandedDescriptor.a# #LandedLocation#"],
   
    "FindSelf" : ["find myself", "ended up", "awoke", "am adrift", "stopped"],
    "LeadTo" : ["lead me to", "guided me to", "helped me discover"],
    "Refuge" : ["take refuge", "hide", "stow away", "take cover", "lurk"],
    "SailThrough" : ["sail through", "traverse", "navigate through", "circumnavagate"],
    "LGPassageStart" : ["am adrift","am lost","find myself","wake up","decide to #StopSub#","drop anchor","have come to a #StopSub#",],
    "LSConnector": ["near","in","beside","aside","at","alongside","on"],
    
    "WaterLocation": ["sea", "ocean", "bay", "cove", "gulf", "lagoon", "reef", "river", "delta", "lake", "trench"],
    "WaterDescriptor": ["#WDEmotional#", "#WDGeographical#"],
    "WDEmotional": ["mysterious","treacherous","peaceful","silent","turbulent","desolate","calm","lonely","tranquil","serene"],
    "WDGeographical": ["Cambrian", "Arctic", "Antarctic", "arctic", "tropical", "subtropical", "underground", "suboceanic", "subterranean", "freshwater", "saline", "saltwater", "prehistoric", "abyssal", "cavernous", "volcanic", "moonlit"],
    
    "LandedLocation": ["coast","lagoon","reef", "skerry","coastline","beach","cove","port","island","atoll","archipelago","islet","ismuth","ayre","cay","sound","sand bar"],
    "LandedDescriptor": ["lonely","isolated","desolate","secluded","silent","peaceful","serene","tranquil","empty","abandoned","barren", "lush", "untouched", "ravaged"],
    
    "EventProximity": ["nearby","beside me","in the distance","close by","on the horizon","#DistanceNumber# #DistanceTerms.s# away"],
    "Scavenge" : ["scavenge","hunt for", "look for","forage for","gather","collect"],
    
    "SupplyType" : ["supplies","food","food rations","medical supplies","drinking water","firewood","lamp oil"],
    "FoodEffect" : ["molasses", "sea shells", "ash", "#PlantType.s#", "#AnimalTypeP#"],
    
    "AnimalGroup": ["pod", "school", "swarm", "troop", "group", "shoal", "fleet"],
    "AnimalType": ["#AnimalFish#", "#AnimalMamal#"],
    "AnimalFish": ["jellyfish", "shrimp", "manta ray","sting ray", "eel", "coelacanth", "marlin", "seahorse", "giant squid", "squid", "fish", "octopus"],
    "AnimalMamal": ["dolphin", "whale", "shark", "seal", "porpoise", "sea lion","orca" ,"manatee", "walrus", "manatee", "dugong","narwhal"],
    "AnimalTypeP": ["#AnimalFishP#", "#AnimalMamalP#"],
    "AnimalFishP": ["jellyfishes", "shrimp", "manta rays","sting rays", "eels", "coelacanths", "marlins", "seahorses", "giant squid", "squid","fish","octopuses"],
    "AnimalMamalP": ["dolphins", "whales", "sharks", "seals", "porpoises", "sea lions", "orcas", "manatees", "walruses", "manatees", "dugongs"],
    
    "AnimalAction":["#AnimalMovement#", "#AnimalMovement# #EventProximity#"],
    "AnimalMovement": ["#RiseAction# surface", "jump out of the #WavesSub#", "break through the #WavesSub#", "#IdleSub# in the #TideSub#"],
    "RiseAction": ["rise to the", "comes to the"],
    "AnimalFollow" : ["following","hunting","trailing","stalking","shadowing","tracking"],
    
    "SupAnimalDescription" : ["huge", "gigantic", "vicious", "unearthly", "mutated", "ghostly", ""],
    "AnimalFollowed" : ["followed", "hunted", "trailed", "stalked", "shadowed", "tracked","traced"],
    
    "FishingImpliment" : ["nets","fishing nets", "traps", "fishing rods", "a harpoon", "rods", "bait"],
    "BreakingSub" : ["breaking", "smashing", "damaging", "rupturing", "shattering","splintering"],
    "CollidedSub" : ["hit","collided with", "smashed into", "ran into", "dove into", "intercepted"],
    
    "SeaBirds" : ["albatross", "petrel", "pelican", "gannet", "booby", "cormorant", "frigatebird", "gull","seagull","tern","scissorbill","shearwater"],
    "SeaBirdsP" : ["albatrosses", "petrels", "pelicans", "gannets", "boobie", "cormorants", "frigatebirds", "gulls","seagulls","terns","scissorbills", "whearwaters"],
    "SeaBirdGroup" : ["flock", "colony", "fleet", "cloud", "mass", "group", "throng", "formation","flight"],
    "SeaBirdAction" : ["glide", "fly", "wheel", "hover", "swoop", "drift", "float", "soar", "dart"],
    "BirdActionLink" : ["in the air", "across the horizon", "in the sky", "through the air", "through the sky", "across the sky"],
    
    "VesselType": ["ship", "craft", "vessel", "boat", "barge", "dinghy", "skiff", "frigate", "longship", "galleon", "schooner"],
    "ShipParts": ["rudder", "anchor", "railing", "sail", "decking", "mast", "hull", "keel"],
    "ShipRoom": ["bridge", "brig", "bulkhead", "cabin", "caboose", "kitchen", "captain’s cabin", "compartment", "deck","#DeckType# deck", "forecastle", "hold", "quarterdeck", "steerage", "wardroom"],
    "DeckType": ["well","promenade","orlop","gun"],
    
    "PlantType": ["algae", "kelp", "seaweed", "coral", "sea-grass", "anemone", "gulfweed", "red algae", "rockweed"],
    "PlantGroup": ["forest", "garden", "clump", "colony", "bed", "grove", "copse", "thicket", "meadow"],
    "PlantDamage": ["tangled in", "wrapped around","stuck in","covering","blocking","obstructing"],
    
    "StormName": ["hurricane", "storm", "thunder storm", "blizzard","lightning storm","fog","mist","fogbank","monsoon","typhoon","cyclone","tsunami"],
    "StormFormation": ["brews","swirls","grows","gathers","looms","forms","breaks"],
    "StormLocation": ["in the distance","on the horizon","above me","behind me", "in front of me","#DistanceNumber# #DistanceTerms.s# away"],
    "StormDescription": ["terrible", "sudden", "furious", "firghtening", "unexpected"],
    
    "PushedSub" : ["pushed","thrown","thrust","shoved","swpet","nudged"],    
    
    "MapDescriptor": ["ancient","tattered","battered","recently discovered","stolen","treasured","treasure"],
    "MapType": ["map","atlas","compass","almanac"],
    
    "DistanceTerms": ["mile","league","nautical mile","furlong","meter","kilometer"],
    "DistanceNumber": ["several", "a #FewSub#", "a dozen","a #FewSub# dozen","several dozen"],
    
    "LightSource" : ["the sunlight","the starlight","the moonlight","my #MyShip#'s lanterns"],
    "GlittersSub" : ["glitters", "shines", "sparkles", "twinkles", "gleams", "glints", "shimmers", "flashes", "glistens"],
    
    "FeelingOf" : ["feeling", "sense", "moment", "touch", "memory", "pang"],
    "Emotions" : ["#PosEmotion#", "#NegEmotion#"],
    "NegEmotion" : ["unease", "foreboding", "fear", "uncertainty", "melancholy", "sadness", "loss", "agitation"],
    "PosEmotion" : ["calmness","serenity", "tranquility", "peace", "happiness", "contentment", "awe", "marvel","comfort","solace", "joy"],
    "FeelingAction" : ["#FeelingResponse# me", "makes me pause", "gives me pause", "fills the air","blankets the air", "catches me unawares"],
    "FeelingResponse" : ["overwhelms","fills","hits","strikes","catches"],
    
    "TempDevice" : ["#Barometer#","#Themometer#"],
    "PressureType" : ["air","wind","atmospheric"],
    "DegreeType" : ["degrees", "degrees Celcius"],
    "Barometer" : ["The barometer #RecordsSub# a #TempDescription# #TempDirection# in #PressureType# pressure"],
    "Themometer" : ["The themometer #RecordsSub# a #TempDescription# #TempDirection# in tempterature","the themometer reads #DegreeNumber# #DegreeType#"],
    "TempDescription" : ["sharp", "sudden", "gentle","noticable","slight"],
    "TempDirection" : ["#Increase#","#Decrease#"],
    "Increase" : ["increase","rise", "climb", "surge", "hike", "jump"],
    "Decrease" : ["decrease", "drop", "fall", "reduction"],
    "DegreeNumber" : ["-30", "-25", "-20", "-15", "-10", "-5", "0", "5", "10", "15", "20", "25", "30", "35", "40"],
    "RecordsSub" : ["records", "shows", "displays", "indicates"],
    
    "SampleFind" : ["finding", "discovering", "obtaining", "coming across", "picking up", "harvesting"],
    "SampleDecription" : ["rare", "unique", "odd", "strange-looking", "mysterious", "unrecorded"],
    "SampleType" : ["#PlantType# sample", "#PlantType# specimen", "#PlantType# bloom", "type of #PlantType#", "breed of #PlantType#", "strain of #PlantType#"],
    "SampleAction" : ["add it to", "put it in", "include it in", "file it in", "display it in", "register it in"],
    "Archive" : ["archive", "catalogue", "storage chest","register"],
    "BotanicalSub" : ["botanical", "plant", "aquatic plant"],
    
    "PlantHunt" : ["hunt for","forage for","gather","look for"],
    "PlantUse" : ["medicinal","edible","healing","seasonal","rare","nourishing","filling","harvestable"],
    "Replace" : ["refill","replinsh","replace","top up","preserve"],
    "StockP" : ["reserves","stocks","supplies"],
    
    "PlantDive" : ["dive into", "swim through", "float in", "relax in","explore"],
    "BodyPart" : ["neck", "leg", "legs", "arm", "arms", "back", "chest", "stomach", "foot", "hand"],
    "PlantAction" : ["caress", "touch", "brush against", "wrap around", "tangle around", "stick to", "billow against"],
    "PlantPart" : ["fronds", "tendrils", "limbs", "branches", "growths", "segments"],
    "PlantDescriptior" : ["leafy", "slimy", "delicate", "fuzzy", "thorny", "sharp"],
    "FeelingSub" : ["feeling", "sensing", "watching", "letting"],
    
    "SupShipAction" : ["#SubShipDirection# #SeaFloorSub#","#SwaySub# #OnSub# the #WavesSub#"],
    "SubShipDirection" : ["rises from", "sinks to", "spirals towards", "lifts from"],
    
    "ShapeAction" : ["vanishes below", "sinks into", "sinks below", "retreats into", "fades into"],
    
    "CloudDescriptor" : ["thick","opaque", "stifling", "#Colours#", "stinging", "sulfurous", "cloying", "murkey", "damp", "slimy"],
    "Colours" : ["crimson", "vermillion", "scarlett", "red", "blood red","black", "ebony", "gray", "grey", "cobalt", "pewter", "ochre"],
    "CloudType" : ["cloud", "mist", "fog", "miasma", "smog", "haze"],
    "HorizonSub" : ["the horizon","the skyline", "the shoreline", "the sky", "the world", "the night sky", "the #CelestialObjects#"],
    "CoveredSub" : ["obscured", "covered", "blocked out", "hidden", "covered up"],
    "CelestialObjects" : ["moon", "stars", "sun"],
    
    "WaterSurfaceDescription" : ["foamy", "churning", "bubbly", "seething", "frothing", "swirling"],
    "OnSub": ["on","atop", "above", "amidst"],
    
    "SeaFloorSub": ["the sea floor", "the sea bed", "the ocean floor", "the bottom of the #WaterLocation#", "somewhere below"],
    "DecrepitSub": ["derelict", "decrepit", "ancient", "ruined", "dilapidated", "wrecked"],
    "DiscoveredSub": ["reached","come to","discovered","stumbled upon","re-discovered","found","happened upon"],
    "BloomSub": ["bloom","sprout","flower","grow","flourish"],
    "WavesSub": ["waves","water","surface","#WaterSurfaceDescription# water","surface of the water"],
    "BelowSub": ["below","beneath","underneath"],
    "TideSub": ["tide","current","riptide","undertow","waves","swell","water"],
    "SwaySub": ["sways","bobs","floats","drifts","sits","skims","hangs"],
    "SwaySubR": ["sways","lurches","reels","pitches","rocks"],
    "GentleSub": ["gentle","steady","calm","placid","mild"],
    "RoughSub": ["rough","violent","turbulent","churning","roiling","choppy"],
    "StrandSub": ["strand","piece","fragment","clump","tangle","wisp","tendril"],
    "SingleSub": ["single","lone","rogue","solitary","lost","tiny","infant"],
    "DamagedSub": ["damadged","broken","shattered","worn","weathered","crumbling"],
    "AttemptSub": ["attempt","begin","try","set out","struggle"],
    "IdleSub":["play","swim","roll","idle","dart","spin"],
    "RepairSub": ["fix","repair","salvage","maintain","replace","upgrade","patch"],
    "StopSub": ["stop","rest","halt"],
    "FewSub": ["few","couple"],
    "IdlesSub": ["idles","waits","lingers","loiters","remains"],
    "StrangeSub" : ["strange", "odd", "mysterious", "unusual", "peculiar", "unsettling","disconcerting"],
    "ShapeSub" : ["shape", "form", "figure", "silhouette","presence"],
    
    "SetMyShip" : ["[MyShip:ship]", "[MyShip:craft]", "[MyShip:vessel]", "[MyShip:boat]", "[MyShip:barge]", "[MyShip:dinghy]", "[MyShip:skiff]", "[MyShip:frigate]", "[MyShip:longship]", "[MyShip:galleon]", "[MyShip:schooner]"]
  };

// 2.⁠ ⁠Write a program to determine the shipping cost based on the region:
//     - 1: North America ($10)
//     - 2: South America ($20)
//     - 3: Europe ($30)
//     - 4: Asia ($40)
//     - 5: Australia ($50)


let region="Asia";
switch(region){
    case("North America"):{
        console.log("you are in North America so the cost is $10");
        break;
        
    }
    case("South America"):{
        console.log("you are in South America so the cost is $20");
        break;
        
    }
    case("Europe"):{
        console.log("you are in Europe so the cost is $30");
        break;
        
    }
    case("Asia"):{
        console.log("you are in Asia so the cost is $40");
        break;
        
    }
    case("Australia"):{
        console.log("you are in Australia so the cost is $50");
        break;
        
    }
    default:{
        console.log("you are in out of state we cannot estimate");
        
    }
}
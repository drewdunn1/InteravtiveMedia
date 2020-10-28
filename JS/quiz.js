d3.select("#George")
    .on("click",function()
{
    
    d3.select("#correct")
        .text("Correct!");
        
        })
d3.select("#Abe")
    .on("click",function()
{
    d3.select("#correct")
        .text("Not quite Try again.");
})
    
    d3.select("Thomas")
    .on("click"function()
{
        d3.select("#correct")
            .text("Inorrect Try again.");
    })
        

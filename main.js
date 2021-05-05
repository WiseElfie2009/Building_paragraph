var paragraph=[];
function get_paragraph(){
    for(var i=1; i<=6;i++)
    {
        paragraph.push(document.getElementById("input"+i).value);
        document.getElementById("showp").innerHTML=paragraph.join(". ");
    }
}
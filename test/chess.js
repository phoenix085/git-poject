
function createTable()

{
    var mytable = document.createElement("table");
    mytable.setAttribute("id","chesstable");
    chess.appendChild(mytable);
    var stroka;
    var stolb;
    var alphabet= "abcdefgh".split("");
    var figure= new Array();
    figure[0]="БЛ/БК/БС/БФ/БКр/БС/БК/БЛ".split('/');
    figure[1]="БП/БП/БП/БП/БП/БП/БП/БП".split('/');
    for (var i=2;i<6;i++){figure[i]="///////".split('/');}
    figure[6]="ЧП/ЧП/ЧП/ЧП/ЧП/ЧП/ЧП/ЧП/".split('/');
    figure[7]="ЧЛ/ЧК/ЧС/ЧФ/ЧКр/ЧС/ЧК/ЧЛ".split('/');
    var $figimg[0][0]="img/horse_filled-100.png";
    console.log(figure);
    var cont=false;
    for(var i=0;i<9;i++)
    {
        cont = !cont;
        stroka = document.createElement("tr");
        chesstable.appendChild(stroka);
        for(var j=0;j<9;j++)
        {
            var stolb= document.createElement("td");
            stolb.setAttribute("class", "vira");
            if(j==0 && i>0)stolb.innerHTML = i;
            else if(i==0 && j>0)stolb.innerHTML = alphabet[j-1];
            else if(cont && i>0 && j>0){
                stolb.setAttribute("class", "black");
                stolb.innerHTML=figure[i-1][j-1];
                cont = !cont;
            }
            else
            {
                cont = !cont;
                if(i>0)stolb.innerHTML=figure[i-1][j-1];
            }
            chesstable.appendChild(stolb);
        }
    }
}

createTable();

function createTable()

{
    var mytable = document.createElement("table");
    mytable.setAttribute("id","chesstable");
    chess.appendChild(mytable);
    var stroka;
    var stolb;
    var alphabet= "abcdefgh".split("");
    var figure= new Array();
    figure[0]="БЛ/БК/БС/БФ/БКр/БС/БК/БЛ".split('/');
    figure[1]="БП/БП/БП/БП/БП/БП/БП/БП".split('/');
    for (var i=2;i<6;i++){figure[i]="///////".split('/');}
    figure[6]="ЧП/ЧП/ЧП/ЧП/ЧП/ЧП/ЧП/ЧП/".split('/');
    figure[7]="ЧЛ/ЧК/ЧС/ЧФ/ЧКр/ЧС/ЧК/ЧЛ".split('/');

    console.log(figure);
    var cont=false;
    for(var i=0;i<9;i++)
    {
        cont = !cont;
        stroka = document.createElement("tr");
        chesstable.appendChild(stroka);
        for(var j=0;j<9;j++)
        {
            var stolb= document.createElement("td");
            stolb.setAttribute("class", "vira");
            if(j==0 && i>0)stolb.innerHTML = i;
            else if(i==0 && j>0)stolb.innerHTML = alphabet[j-1];
            else if(cont && i>0 && j>0){
                stolb.setAttribute("class", "black");
                stolb.innerHTML=figure[i-1][j-1];
                cont = !cont;
            }
            else
            {
                cont = !cont;
                if(i>0)stolb.innerHTML=figure[i-1][j-1];
            }
            chesstable.appendChild(stolb);
        }
    }
}

createTable();
*/
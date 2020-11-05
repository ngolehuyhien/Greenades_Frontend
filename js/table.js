var data = {"1": ["Tanay", "216190000", "Tanay", "233", "62", "107", "28", "74", "69", "54", "70"], "2": ["Warnécourt", "84980000", "Warnécourt", "366", "73", "125", "39", "63", "85", "67", "78"], "3": ["Busset", "30450000", "Busset", "940", "80", "94", "62", "67", "99", "73", "88"], "4": ["Criquetot-l'Esneval", "761960000", "Criquetot-l'Esneval", "2568", "90", "107", "68", "92", "103", "81", "99"], "5": ["Grigny", "912860107", "La Grande Borne I", "3033.888395", "99", "57", "98", "106", "118", "85", "114"], "6": ["L'Isle-Adam", "953130105", "Le Haut de l'ISLE-Adam", "2803.179388", "100", "114", "85", "78", "119", "94", "105"], "7": ["Mimizan", "401840102", "Plage", "1902.807094", "104", "98", "111", "78", "112", "107", "101"], "8": ["Écully", "690810102", "Vianney", "1890.952158", "114", "127", "130", "101", "100", "129", "100"], "9": ["Lavangeot", "392840000", "Lavangeot", "135", "124", "91", "197", "74", "92", "161", "86"], "10": ["Gap", "50610101", "Gap Centre", "2381.345487", "132", "99", "171", "213", "69", "147", "117"]}

var table = document.getElementById('main-table');
console.log(table);
for (var key in data) {
    if (data.hasOwnProperty(key)) {
        // console.log(key + " -> " + data[key]);
        // console.log(data[key][1]);

        tr = table.insertRow(-1);

        for (var j = 0; j < data[key].length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[key][j];
            if (j==0){tabCell.className += "sticky-col-1";}
            if (j==1){tabCell.className += "sticky-col-2";}
            if (j==2){tabCell.className += "sticky-col-3";}
        }
    }
}

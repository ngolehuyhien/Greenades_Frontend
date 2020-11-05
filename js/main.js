function openShare() {
    document.getElementById("myForm").style.display = "block";
}

function closeShare() {
    document.getElementById("myForm").style.display = "none";
}

document.getElementById('export').addEventListener('click',exportPDF);

var specialElementHandlers = {
  '.no-export': function(element, renderer) {
    return true;
  }
};

function exportPDF() {
    var doc = new jsPDF('p', 'pt', 'a4');
    var source = document.getElementById('table-content').innerHTML;
    var margins = {
        top: 10,
        bottom: 0,
        left: 10,
        width: 595
    };

    doc.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left,
    margins.top, {
        'width': margins.width,
        'elementHandlers': specialElementHandlers
    },

    function(dispose) {
        doc.save('Data.pdf');
    }, margins);
}
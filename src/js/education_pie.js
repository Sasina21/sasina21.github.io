google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['งบ', 'งบประมาณ'],
        ['งบบุคลากร', 390782200],
        ['งบดำเนินงาน', 7508157],
        ['งบลงทุน', 674658220],
        ['งบอุดหนุน', 7794284900],
        ['งบรายจ่ายอื่นๆ', 71517900],
    ]);

    var options = {
        title: 'งบประมาณกระทรวงศึกษาธิการ',
        pieHole: 0
    };

    data.sort([{ column: 1 }]);

    var chart = new google.visualization.PieChart(document.getElementById('education_pie'));
    chart.draw(data, options);
}
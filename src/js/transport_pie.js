google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['งบ', 'งบประมาณ'],
        ['งบลงทุน', 2077833600],
        ['งบรายจ่ายอื่นๆ', 7492500],
    ]);

    var options = {
        title: 'งบประมาณกระทรวงคมนาคม',
        pieHole: 0
    };

    data.sort([{ column: 1 }]);

    var chart = new google.visualization.PieChart(document.getElementById('transport_pie'));
    chart.draw(data, options);
}
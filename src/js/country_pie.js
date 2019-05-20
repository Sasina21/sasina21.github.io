google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['จังหวัด', 'งบประมาณ'],
        ['นครนายก', 4418795647],
        ['ปราจีนบุรี', 5579013247],
        ['สระแก้ว', 5382134847],
        ['จันทบุรี', 6253304134],
        ['ตราด', 2828784744]
    ]);

    var options = {
        title: 'งบประมาณแบ่งตามจังหวัด',
        pieHole: 0.5, 
        width: 900,
        height: 500
    };

    data.sort([{ column: 1 }]);

    var chart = new google.visualization.PieChart(document.getElementById('country_pie'));
    chart.draw(data, options);
}
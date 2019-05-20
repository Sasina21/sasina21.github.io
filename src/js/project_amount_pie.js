google.charts.load('42', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['จังหวัด', 'แผนงาน'],
        ['นครนายก', 31],
        ['ปราจีนบุรี', 30],
        ['สระแก้ว', 30],
        ['จันทบุรี', 38],
        ['ตราด', 31]
    ]);

    var options = {
        chart: {
            title: 'จำนวนแผนงานแบ่งตามจังหวัด',
            subtitle: 'งบประมาณปี พ.ศ.2562'
        },
        width: 900,
        height: 500
    };

    var chart = new google.charts.Bar(document.getElementById('project_amount_pie'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}
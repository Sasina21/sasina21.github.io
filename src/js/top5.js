google.charts.load('42', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['กระทรวง', 'งบประมาณ'],
        ['กระทรวงศึกษาธิการ',8938751377],
        ['กระทรวงคมนาคม',2085326100],
        ['กระทรวงเกษตรและสหกรณ์',1589197400],
        ['กระทรวงมหาดไทย',595203500],
        ['จังหวัดและกลุ่มจังหวัด',511966800],
    ]);

    var options = {
        chart: {
            title: 'Top 5 กระทรวงที่ได้งบประมาณมากที่สุด',
            subtitle: 'งบประมาณปี พ.ศ.2562'
        },
        width: 900,
        height: 500
    };

    var chart = new google.charts.Bar(document.getElementById('top5_bar'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}
google.charts.load('42', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ปี');
    data.addColumn('number', 'งบกระทรวงศึกษาธิการ');

    data.addRows([
        [2551,3859096314],
        [2552,3356424300],
        [2553,3386811400],
        [2554,4140610483],
        [2555,3660762381],
        [2556,4380647219],
        [2557,5307334515],
        [2558,6061672678],
        [2559,5408626140],
        [2560,6058774820],
        [2561,8328744902],
        [2562,8938751377],

    ]);

    var options = {
        width: "100%",
        height: 900,
        hAxis: {
            title: 'Time',
            format: '####'
        },
        vAxis: {
            title: 'งบประมาณ',
        },
        series: {
            1: { curveType: 'function' }
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('budget_ts'));
    chart.draw(data, options);
}
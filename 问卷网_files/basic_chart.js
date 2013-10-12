function get_pie_chart_base_options_value(question_id) {
  var options = {
    chart: {
      type: 'pie',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Question Title',
      style:{
        fontFamily:'Microsoft YaHei'
      }
    },
    subtitle: {
      text:'',
      style:{
        fontFamily:'Microsoft YaHei'
      }
    },
    tooltip: {
      formatter: function () {
          return '<b>' + this.point.name + '</b>: ' + this.y;
      },
      percentageDecimals: 1,
      style:{
        fontFamily:'Microsoft YaHei'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          color: '#000000',
          connectorColor: '#000000',
          style:{
            fontFamily:'Microsoft YaHei'
          },
          formatter: function() {
            if(this.point.name.length>10)
              return '<b>' + this.point.name.substr(0,10) + '...</b>: '  + this.point.y;
            else
              return '<b>' + this.point.name + '</b>: '  + this.point.y;
          }
        }
      }
    },
    series: []
  };
  return options;
}

function get_pie_chart_base_options_percent(question_id) {
  var options = {
    chart: {
      type: 'pie',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Question Title',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    tooltip: {
      formatter: function () {
          return '<b>' + this.point.name + '</b>: ' + Highcharts.numberFormat(this.percentage, 2) + ' %';
      },
      percentageDecimals: 1,
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          color: '#000000',
          connectorColor: '#000000',
          style:{
            fontFamily:'Microsoft YaHei'
          },
          formatter: function() {
            if(this.point.name.length>10)
              return '<b>' + this.point.name.substr(0,10) + '...</b>: '  + Highcharts.numberFormat(this.percentage, 2) + '%';
            else
              return '<b>' + this.point.name + '</b>: '  + Highcharts.numberFormat(this.percentage, 2) + '%';
          }
        }
      }
    },
    series: []
  };
  return options;
}

function get_donut_chart_base_options_value(question_id) {
  var options = {
    chart: {
      type: 'pie',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Question Title',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>',
      percentageDecimals: 1,
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          color: '#000000',
          style:{
            fontFamily:'Microsoft YaHei'
          },
          connectorColor: '#000000',
          formatter: function() {
            if(this.point.name.length>10)
              return '<b>' + this.point.name.substr(0,10) + '...</b>: '  + this.point.y;
            else
              return '<b>' + this.point.name + '</b>: '  + this.point.y;
          }
        }
      }
    },
    series: [{
      name: 'Browsers',
      data: [],
      size: '60%',
      innerSize: '50%'
    }]
  };
  return options;
}

function get_donut_chart_base_options_percent(question_id) {
  var options = {
    chart: {
      type: 'pie',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Question Title',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage.toFixed(0)}%</b>',
      percentageDecimals: 1,
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          color: '#000000',
          connectorColor: '#000000',
          style:{
            fontFamily:'Microsoft YaHei'
          },
          formatter: function() {
            if(this.point.name.length>10)
              return '<b>' + this.point.name.substr(0,10) + '...</b>: '  + this.point.y;
            else
              return '<b>' + this.point.name + '</b>: '  + this.point.y;
          }
        }
      }
    },
    series: [{
      name: 'Browsers',
      data: [],
      size: '60%',
      innerSize: '50%'
    }]
  };
  return options;
}

function get_column_chart_base_options_value(question_id) {
  var options = {
    chart: {
      type: 'column',
      margin: [50, 50, 100, 80],
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Question Title',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          style:{
            fontFamily:'Microsoft YaHei'
          },
          formatter: function(){
            return this.y.toFixed(0);
          }
        }
      }
    },
    xAxis: {
      categories: ['Tokyo', 'Jakarta', 'New York', 'Tokyo', 'Jakarta', 'New York', 'Seoul', 'Manila', 'Mumbai', 'Sao Paulo', 'Mexico City', 'Dehli', 'Osaka', 'Cairo', 'Kolkata', 'Los Angeles', 'Shanghai', 'Moscow', 'Beijing', 'Buenos Aires', 'Guangzhou', 'Shenzhen', 'Istanbul'],
      labels: {
        rotation: -20,
        align: 'right',
        style:{
          fontFamily:'Microsoft YaHei'
          }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '数量',
        style:{
          fontFamily:'Microsoft YaHei'
          }
      }
    },
    legend: {
      enabled: true
    },
    tooltip: {
      style:{
          fontSize: '13px',
          fontFamily:'Microsoft YaHei'
          },
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' + '选中人数: ' + Highcharts.numberFormat(this.y, 0);
      }
    },
    series: [{
      name: '选中人数',
      data: [34.4, 21.8, 20.1, 20, 19.6, 19.5, 19.1, 18.4, 18, 17.3, 16.8, 15, 14.7, 14.5, 13.3, 12.8, 12.4, 11.8, 11.7, 11.2]
    }]
  };
  return options;
}

function get_column_chart_base_options_percent(question_id) {
  var options = {
    chart: {
      type: 'column',
      margin: [50, 50, 100, 80],
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Question Title',
      style:{
          fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
          fontFamily:'Microsoft YaHei'
          }
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          style:{
          fontFamily:'Microsoft YaHei'
          },
          formatter: function(){
            return this.y.toFixed(1) + '%';
          }
        }
      }
    },
    xAxis: {
      categories: ['Tokyo', 'Jakarta', 'New York', 'Tokyo', 'Jakarta', 'New York', 'Seoul', 'Manila', 'Mumbai', 'Sao Paulo', 'Mexico City', 'Dehli', 'Osaka', 'Cairo', 'Kolkata', 'Los Angeles', 'Shanghai', 'Moscow', 'Beijing', 'Buenos Aires', 'Guangzhou', 'Shenzhen', 'Istanbul'],
      labels: {
        rotation: -20,
        align: 'right',
        style: {
          fontFamily: 'Microsoft YaHei'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '百分比(%)',
        style:{
            fontFamily:'Microsoft YaHei'
          }
      }
    },
    legend: {
      enabled: true
    },
    tooltip: {
      style:{
            fontFamily:'Microsoft YaHei'
          },
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' + '选中人数: ' + Highcharts.numberFormat(this.y.toFixed(1), 1) + '%';
      }
    },
    series: [{
      name: '选中人数',
      data: [34.4, 21.8, 20.1, 20, 19.6, 19.5, 19.1, 18.4, 18, 17.3, 16.8, 15, 14.7, 14.5, 13.3, 12.8, 12.4, 11.8, 11.7, 11.2]
    }]
  };
  return options;
}

function get_bar_chart_base_options_value(question_id) {
  var options = {
    chart: {
      type: 'bar',
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Historic World Population by Region',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
        text: '',
        style:{
            fontFamily:'Microsoft YaHei'
          }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '数量',
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        style:{
            fontFamily:'Microsoft YaHei'
          }
      }
    },
    tooltip: {
      valueSuffix: '',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          style:{
            fontFamily:'Microsoft YaHei'
          },
          enabled: true
        }
      }
    },
    legend: {
      enabled:true
    },
    credits: {
      enabled: false
    },
    series: [{
      data: [107, 31, 635, 203, 2]
    }]
  };
  return options;
}

function get_bar_chart_base_options_percent(question_id) {
  var options = {
    chart: {
      type: 'bar',
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Historic World Population by Region',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
        text: '百分比(%)',
        style:{
            fontFamily:'Microsoft YaHei'
          }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
        align: 'high',
        style:{
            fontFamily:'Microsoft YaHei'
          }
      },
      labels: {
        overflow: 'justify',
        style:{
            fontFamily:'Microsoft YaHei'
          }
      }
    },
    tooltip: {
      style:{
            fontFamily:'Microsoft YaHei'
          },
      formatter: function() {
        return this.y.toFixed(1)+'%';
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          style:{
            fontFamily:'Microsoft YaHei'
          },
          formatter:function(){
            return this.y.toFixed(1)+'%';
          }
        }
      }
    },
    legend: {
      enabled:true
    },
    credits: {
      enabled: false
    },
    series: [{
      data: [107, 31, 635, 203, 2]
    }]
  };
  return options;
}

function get_line_chart_base_options_value(question_id) {
  var options = {
    chart: {
      type: 'line',
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Question Title',
      x: -20 ,
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          },
      x: -20
    },
    xAxis: {
      labels: {
        zIndex: 100,
        rotation: -20,
        align: 'right',
        style:{
          fontFamily:'Microsoft YaHei'
          }
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        style:{
            fontFamily:'Microsoft YaHei'
          },
        text: '选中人数'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: ''
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -10,
      y: 100,
      borderWidth: 0
    },
    series: [{}]
  };
  return options;
}

function get_line_chart_base_options_percent(question_id) {
  var options = {
    chart: {
      type: 'line',
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    plotOptions: {
      line: {
        dataLabels: {
          style:{
            fontFamily:'Microsoft YaHei'
          },
          enabled: false,
          formatter: function(){
            return this.y.toFixed(1) + '%';
          }
        }
      }
    },
    title: {
      text: 'Question Title',
      style:{
            fontFamily:'Microsoft YaHei'
          },
      x: -20 //center
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          },
      x: -20
    },
    xAxis: {
      labels: {
        rotation: -20,
        align: 'right',
        style:{
          fontFamily:'Microsoft YaHei'
          }
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: '百分比(%)',
        style:{
            fontFamily:'Microsoft YaHei'
          }
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      formatter: function() {
        return this.y.toFixed(1)+'%';
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -10,
      y: 100,
      borderWidth: 0
    },
    series: [{}]
  };
  return options;
}

function get_radar_chart_base_options(question_id) {
  var options = {
    chart: {
      polar: true,
      type: 'line',
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Question Title',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    pane: {
      size: '80%'
    },
    xAxis: {
      categories: ['Sales', 'Marketing', 'Development', 'Customer Support', 'Information Technology', 'Administration'],
      tickmarkPlacement: 'on',
      lineWidth: 0,
      labels:{
        style:{
            fontFamily:'Microsoft YaHei'
          }
      }
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      labels:{
        style:{
            fontFamily:'Microsoft YaHei'
          }
      }
    },
    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.1f}%</b><br/>',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    plotOptions: {
      radar:{
        dataLabels:{
          enabled: true,
          style:{
            fontFamily:'Microsoft YaHei'
          },
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          formatter : function(){
            return point.y.toFixed(1) + '%';
          }
        }
      }
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 100,
      layout: 'vertical'
    },
    series: [{
      name: 'Allocated Budget',
      data: [1, 2, 3],
      pointPlacement: 'on'
    }]

  };
  return options;
}

function get_stackcolumn_chart_base_options(question_id) {
  var options = {
    chart: {
      type: 'column',
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Stacked bar chart',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
      labels:{
        style:{
            fontFamily:'Microsoft YaHei'
          }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
        style:{
            fontFamily:'Microsoft YaHei'
          }
      }
    },
    legend: {
      backgroundColor: '#FFFFFF',
      reversed: true
    },
    tooltip: {
      style:{
            fontFamily:'Microsoft YaHei'
          },
      formatter: function() {
        return this.y.toFixed(1)+'%';
      }
    },
    plotOptions: {
      column:{
        stacking: 'normal',
        dataLabels:{
          style:{
            fontFamily:'Microsoft YaHei'
          },
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          formatter : function(){
            if(this.y.toFixed(0) == 0)
              return '';
            else
              return this.y.toFixed(1) + '%';
          }
        }
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }]
  };
  return options;
}

function get_stackbar_chart_base_options(question_id) {
  var options = {
    chart: {
      type: 'bar',
      renderTo: 'container_' + question_id
    },
    exporting:{
      enabled:true
    },
    colors:['#22b5c3', '#a3be57', '#ff9c9c', '#48cfef', '#25bf6e', '#ea5f35', '#7e85e0', '#f2bd7c', '#bbbbba', '#7257a2'],
    title: {
      text: 'Stacked bar chart',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    subtitle: {
      text:'',
      style:{
            fontFamily:'Microsoft YaHei'
          }
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        style:{
            fontFamily:'Microsoft YaHei'
          },
        text: ''
      }
    },
    legend: {
      backgroundColor: '#FFFFFF',
      reversed: true
    },
    plotOptions: {
      bar:{
        stacking: 'normal',
        dataLabels:{
          style:{
            fontFamily:'Microsoft YaHei'
          },
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          formatter : function(){
            if(this.y.toFixed(0) == 0)
              return '';
            else
              return this.y.toFixed(1) + '%';
          }
        }
      }
    },
    tooltip: {
      style:{
            fontFamily:'Microsoft YaHei'
          },
      formatter: function() {
        return this.y.toFixed(1)+'%';
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }]
  };
  return options;
}

function get_chart_base_options(question_id, chart_type, display_type) {
  if(chart_type == 'pie') {
    if(display_type == 'show_value')
      return get_pie_chart_base_options_value(question_id);
    else if(display_type == 'show_percent')
      return get_pie_chart_base_options_percent(question_id);
  } else if(chart_type == 'donut') {
    if(display_type == 'show_value')
      return get_donut_chart_base_options_value(question_id);
    else if(display_type == 'show_percent')
      return get_donut_chart_base_options_percent(question_id);
  } else if(chart_type == 'line') {
    if(display_type == 'show_value')
      return get_line_chart_base_options_value(question_id);
    else if(display_type == 'show_percent')
      return get_line_chart_base_options_percent(question_id);
  } else if(chart_type == 'bar') {
    if(display_type == 'show_value')
      return get_bar_chart_base_options_value(question_id);
    else if(display_type == 'show_percent')
      return get_bar_chart_base_options_percent(question_id);
  } else if(chart_type == 'column') {
    if(display_type == 'show_value')
      return get_column_chart_base_options_value(question_id);
    else if(display_type == 'show_percent')
      return get_column_chart_base_options_percent(question_id);
  } else if(chart_type == 'radar') {
    return get_radar_chart_base_options(question_id);
  } else if(chart_type == 'stackcolumn') {
    return get_stackcolumn_chart_base_options(question_id);
  } else if(chart_type == 'stackbar') {
    return get_stackbar_chart_base_options(question_id);
  } else {
    var options = {
      chart: {
        renderTo: 'container_' + question_id,
        type: 'spline'
      },
      series: [{}]
    };
    return options;
  }
}
var chart_obj_dict = {};
function show_chart_and_table(question_id, chart_type, sort_type, display_type, chart_status, table_status) {
  var chart_options = get_chart_base_options(question_id, chart_type, display_type);
  //图表和数据表数据均从此入口
  var chart_info = get_chart_and_table_info(question_id, chart_type, sort_type, display_type, chart_status, table_status);
  if(chart_info == null) {
    return; //由chart_info_callback返回数据后重新调用show_chart
  }
  if(chart_info.rspd_count == 0||chart_info.rspd_count == '0')
  {
    $("#container_"+question_id).html("该题无答题数据");
    $("#container_"+question_id).css("height",'18px');
    return;
  }
  //展示数据表数据
  if(chart_info.table_data != null)
  {
    var str_table_html = "<table border='1' style='width:100%' bordercolor = '#CACACA'>";
    var rspd_count;
    for(var r=0;r<chart_info.table_data.length;r++)
    {
      if(r==0||r==chart_info.table_data.length-1)
        str_table_html += "<tr bgcolor='#EAEAEA'>";
      else
        str_table_html += "<tr>";
      var row_item = chart_info.table_data[r];
      for(var c=0;c<row_item.length;c++)
      {
        if(row_item.length == 1)
          rspd_count = row_item[c];
        else if(c==row_item.length-1&&r==chart_info.table_data.length-1)
        {
          var colspan = chart_info.table_data[r-1].length-1;//取上一行来计算跨度
          str_table_html += "<td colspan='" + colspan + "'> " + row_item[c] + "</td>";
        }
        else
          str_table_html += "<td>" + row_item[c] + "</td>" ;
      }
      str_table_html += "</tr>";
    }
    str_table_html += "</table>";
    if(rspd_count != null)
    {
      str_table_html += "<br/><div>"+rspd_count+"</div>";
    }
    $("#data_container_"+question_id).html(str_table_html);
  }
  //展示图表数据
  // if($("#param_chart_height_"+question_id).val())
  //   chart_options.chart.height = $("#param_chart_height_"+question_id).val();
  // if($("#param_chart_width_"+question_id).val())
  //   chart_options.chart.width = $("#param_chart_width_"+question_id).val();
  // chart_options.chart.width = 100%;
  var title = chart_info.title;
  if(title) {
    chart_options.title.text = title;
    chart_options.title.margin = chart_info.title_margin;
  }
  var subtitle = chart_info.subtitle;
  if(subtitle) {
    chart_options.subtitle.text = subtitle;
  }
  if(chart_type == 'pie') {
    chart_options.series[0] = {
      'data': chart_info.pie_data,
      'name':''
    };
  } else if(chart_type == 'donut') {
    chart_options.series[0] = {
      'data': chart_info.pie_data,
      'innerSize': '50%'
    };
  } else if(chart_type == 'column') {
    chart_options.xAxis.categories = chart_info.labels;
    if(chart_info.labels.length<=3)
    {
      chart_options.plotOptions.column.pointWidth = 50;//当选项小于3项时，宽度设置为50
    }
    //多系列情况下系列项里面有data这个属性，单系列没有
    if(chart_info.datas[0].data != null)
    {
      if(chart_info.datas.length>3)
        chart_options.plotOptions.column.dataLabels.enabled = false;
      chart_options.series = chart_info.datas;
    }
    else
      chart_options.series[0].data = chart_info.datas;
  } else if(chart_type == 'bar') {
    chart_options.xAxis.categories = chart_info.labels;
    // if(chart_info.labels.length<=3)
    // {
    //   chart_options.plotOptions.bar.pointWidth = 50;//当选项小于3项时，宽度设置为50
    // }
    if(chart_info.datas[0].data != null)
    {
      if(chart_info.datas.length>3)
        chart_options.plotOptions.bar.dataLabels.enabled = false;
      chart_options.series = chart_info.datas;
    }
    else
    {
      chart_options.series[0] = {
      'data': chart_info.datas,
      'name': '选中人数'
    };
    }
  } else if(chart_type == 'line') {
    if(chart_info.question_type == 50 || chart_info.question_type == 7)
    {
      if(chart_info.display_type == 'show_value')
        chart_options.yAxis.title.text = '均值';
    }
    chart_options.xAxis.categories = chart_info.labels;
    if(chart_info.suffix != null)
      chart_options.tooltip.valueSuffix = chart_info.suffix;
    if(chart_info.datas[0].data != null)
      chart_options.series = chart_info.datas;
    else
    {
      chart_options.series[0] = {
      'data': chart_info.datas,
      'name': '选中人数'
    };
    }
  } else if(chart_type == 'radar') {
    chart_options.xAxis.categories = chart_info.labels;
    chart_options.series = chart_info.datas;
    /*chart_options.series[0] = {
      'data': chart_info.datas,
      'name': '平均值',
      'pointPlacement': 'on'
    };*/
  } else if(chart_type == 'stackcolumn' || chart_type == 'stackbar') {
    chart_options.xAxis.categories = chart_info.labels;
    chart_options.series = chart_info.datas;
  }

  var chart = new Highcharts.Chart(chart_options);
  //chart.exportChart();
  //渲染完之后默认设置导出图标隐藏
  $("#container_"+question_id).find(".highcharts-button").hide();
}

function get_chart_and_table_info(question_id, chart_type, sort_type, display_type, chart_status, table_status) {
  var chart_info = chart_info_dict[[question_id, chart_type, sort_type, display_type]];
  if(chart_info == null) {
    $("#form_chart_info").find('input[name="question_id"]').val(question_id);
    $("#form_chart_info").find('input[name="chart_type"]').val(chart_type);
    $("#form_chart_info").find('input[name="sort_type"]').val(sort_type);
    $("#form_chart_info").find('input[name="display_type"]').val(display_type);
    $("#form_chart_info").find('input[name="chart_status"]').val(chart_status);
    $("#form_chart_info").find('input[name="table_status"]').val(table_status);
    $("#form_chart_info").find('input[name="version"]').val(view_version);
    ajaxSubmit($("#form_chart_info"));
    return null;
  } else {
    return chart_info;
  }
}

function chart_info_callback(info) {
  var question_id = info.question_id;
  var chart_type = info.chart_type;
  var sort_type = info.sort_type;
  var display_type = info.display_type;
  chart_info_dict[[question_id, chart_type, sort_type, display_type]] = info;
  if(info) {
    var chart_status = $("#param_chart_show_or_hide_"+question_id).val();
    var table_status = $("#param_table_show_or_hide_"+question_id).val();
    show_chart_and_table(question_id, chart_type, sort_type, display_type, chart_status, table_status);
  }
}

function chart_type_changed(obj) {
  var question_id = obj.id.replace('chart_type_', '');
  var chart_type = $(obj).attr('typename');
  $("#param_chart_type_"+question_id).val(chart_type);
  var sort_type = $("#param_sort_type_"+question_id).val();
  var display_type = $("#param_show_type_"+question_id).val();
  //矩阵多选默认百分比
  if($("#param_question_type_"+question_id).val() == '5')
    display_type = "show_percent";
  var chart_status = $("#param_chart_show_or_hide_"+question_id).val();
  var table_status = $("#param_table_show_or_hide_"+question_id).val();
  show_chart_and_table(question_id, chart_type, sort_type, display_type, chart_status, table_status);
}

function sort_type_changed(obj){
  var question_id = obj.id.replace('sort_type_','');
  var sort_type = $(obj).attr('sortname');
  $("#param_sort_type_"+question_id).val(sort_type);
  var chart_type = $("#param_chart_type_"+question_id).val();
  var display_type = $("#param_show_type_"+question_id).val();
  if(display_type == null || display_type == '')
    display_type = 'show_value';
  var chart_status = $("#param_chart_show_or_hide_"+question_id).val();
  var table_status = $("#param_table_show_or_hide_"+question_id).val();
  show_chart_and_table(question_id, chart_type, sort_type, display_type, chart_status, table_status);
}

function display_type_change(obj){
  var question_id = obj.id.replace('display_type_','');
  var display_type = $(obj).attr('dispname');
  if(!display_type)
    display_type = 'show_value';
  //只有显示值或百分比才需要记录值
  if(display_type == 'show_value'||display_type == 'show_percent')
    $("#param_show_type_"+question_id).val(display_type);
  var chart_type = $("#param_chart_type_"+question_id).val();
  var sort_type = $("#param_sort_type_"+question_id).val();
  //记录图表与数据表显示或隐藏值
  if(display_type == 'show_chart'||display_type == 'show_data'||display_type == 'hide_chart'||display_type == 'hide_data')
  {
    if(display_type == 'show_chart'||display_type == 'hide_chart')
      $("#param_chart_show_or_hide_"+question_id).val(display_type);
    else if(display_type == 'show_data'||display_type == 'hide_data')
      $("#param_table_show_or_hide_"+question_id).val(display_type);
  }
  //数据请求,切换数据类型需要发送请求加载图表数据[显示隐藏图表和数据只是前端DIV控制]
  if(display_type == 'show_value'||display_type == 'show_percent')
  {
    var chart_status = $("#param_chart_show_or_hide_"+question_id).val();
    var table_status = $("#param_table_show_or_hide_"+question_id).val();
    show_chart_and_table(question_id,chart_type,sort_type,display_type,chart_status,table_status);
  }
  //标签处理
  if(display_type == 'hide_chart')
  {
    $("#container_"+question_id).css('display','none');
    // $("#param_chart_height_"+question_id).val($("#container_"+question_id).attr("height"));
    // $("#param_chart_width_"+question_id).val($("#container_"+question_id).attr("width"));
    $(obj).attr('dispname','show_chart');
    $(obj).text('显示图表');
  }
  else if(display_type == 'show_chart')
  {
    $("#container_"+question_id).css('display','');
    $(obj).attr('dispname','hide_chart');
    $(obj).text('隐藏图表');
  }
  else if(display_type == 'show_data')
  {
    $("#data_container_"+question_id).css('display','');
    $(obj).attr('dispname','hide_data');
    $(obj).text('隐藏数据');
  }
  else if(display_type == 'hide_data')
  {
    $("#data_container_"+question_id).css('display','none');
    $(obj).attr('dispname','show_data');
    $(obj).text('显示数据');
  }
  else if(display_type == 'show_value')
  {
    $(obj).attr('dispname','show_percent');
    $(obj).text('显示百分比');
  }
  else if(display_type == 'show_percent')
  {
    //打分题
    if($("#record_chart_type_"+question_id).val() == "50")
    {
      $(obj).attr('dispname','show_value');
      $(obj).text('显示均值');
    }
    else
    {
      $(obj).attr('dispname','show_value');
      $(obj).text('显示数值');
    }
  }
}

function selectQuestionChangeHandler(obj){
  if($(obj).get(0).selectedIndex == 0 )
  {
    for(var i=0;i<question_list.length;i++)
    {
      $("#question_content_"+question_list[i].qid).css("display","");
    }
  }
  else
  {
    for(var j=0;j<question_list.length;j++)
    {
      $("#question_content_"+question_list[j].qid).css("display","none");
    }
    var q_index = $(obj).get(0).selectedIndex - 1;
    $("#question_content_"+question_list[q_index].qid).css("display","");
    var chart_type = $("#param_chart_type_"+question_list[q_index].qid).val();
    if(chart_type==""||chart_type==undefined||chart_type==null)
      chart_type = $("#chart_type_"+question_list[q_index].qid).attr("typename");
    var sort_type = $("#param_sort_type_"+question_list[q_index].qid).val();
    if(sort_type==""||sort_type==undefined||sort_type==null)
      sort_type = "Keep";
    var show_type = $("#param_show_type_"+question_list[q_index].qid).val();
    if(show_type==""||show_type==undefined||show_type==null)
      show_type = "show_value";
    show_chart_and_table(question_list[q_index].qid,chart_type,sort_type,show_type,"show_chart","show_table");
  }
}

function chart_con_mouse_over(obj){
  $(obj).find('.highcharts-button').show();
  $(obj).find('#operation_btn').show();
}

function chart_con_mouse_out(obj){
  $(obj).find('.highcharts-button').hide();
  $(obj).find('#operation_btn').hide();
}



//生成历史数据时间轴
function DateData(data){
  
  var Dl = data.length;
  var timeArr=[];
  var nowtime = new Date();
  var MaxMargin =600;
  var Con ="";
  var Focus="";
  var mz=40;
  var FocusM=[];
  
  //if(Dl>8){$('.DateDataN').width(Dl*120+60);}
  if(Dl==0)return false;
  
  var marginL= new spacingFn();
  for(var i=0;i<Dl;i++){
	  if(Dl>11){
		   var pjz = 790/(Dl-1);
		   mz = i*pjz;
	  }else{
		   var pjz = 796/(Dl-1);
		   mz = i*pjz;
	  }
	  
	  if(data[i].focus==1){
		  Focus="Pf";
		  FocusM.push(i);
		  for(var mi=i+1;mi<Dl;mi++){
			 if(data[mi].is_merge==0){
				FocusM.push(mi);
				break;	 
			 }; 
		  }

	  }else{Focus=""};
	  
	  
	  var rspd_count = "第 "+(Dl-i-1)+" 次修改";
	  var time_count = wbtime(data[i].time)+" "+data[i].rspd_count+ "份";
	  
	  if(i==0){
		  var rspd_counts = "最新数据 "+ data[i].rspd_count +'份';
		  Con +='<div class="dateP Now_p"><a href="'+data[i].url+'" name="'+rspd_counts+'" class="point '+Focus+'"></a><p>现在</p></div>';
	  }else if(i==Dl-1){
		  var rspd_count = "首次发布";
		  
		  if(Dl<11){
			 Con+='<div class="dateP history_p Dstart"><a href="javascript:;" name="'+wbtime(data[i].time)+'" class="point '+Focus+'"></a><p>'+rspd_count+'</p></div>';
		  }else{
			 Con+='<div class="dateP history_p Dstart" style="width:120px;"><a href="javascript:;" name="'+wbtime(data[i].time)+'" class="point '+Focus+'"></a><p style="textAlign:right;">'+rspd_count+'</p></div>';
		  }
		  
	  }else{
		  
		  if(Dl<11){
			 Con+='<div class="dateP history_p" style=" left:'+mz+'px;"><a href="'+data[i].url+'" name="'+time_count+'" class="point '+Focus+'"></a><p>'+rspd_count+'</p></div>';
		  }else{
			 
			 var dn = 'display:none;';
			 Focus==""?dn:dn="width:120px;position:absolute;zIndex:999;"; 
			 
			 Con+='<div class="dateP history_p" style="left:'+mz+'px;"><a href="'+data[i].url+'" name="'+time_count+'" class="point '+Focus+'"></a><p class="Tdp" style="'+dn+'">'+rspd_count+'</p></div>'; 
		  }
		  
		  
	  }
	  
  }
  $('.DateDataN').append(Con);
  
  var BarL = $('.DateDataN .dateP:eq('+FocusM[0]+') .point').offset().left-$('.DateDataN').offset().left;
  var BarW = $('.DateDataN .dateP:eq('+FocusM[1]+') .point').offset().left-$('.DateDataN').offset().left-BarL;
  $('.topBar').css({left:BarL+'px',width:BarW+'px'});  
  
  function spacingFn(){
	this.outM=0;
	this.Fn=function(m){
		if(m==1){return}
		this.outM = parseInt(this.outM/2);
		m--;
		this.Fn(m);	
	}
	this.onFn=function(Max,m){
		this.outM=Max;
		this.Fn(m);
		return this.outM;
	}
}



var tjj = new Timetjj();
tjj.event('.point');

var tl = $('.DateDataN .Pf').offset().left-3;
var tt = $('.DateDataN .Pf').offset().top-36;

tjj.addimg(tt,tl,$('.DateDataN .Pf').attr('name'),$('.DateDataN .Pf').width());
		  
}
	  
//时间处理
function wbtime(t){
	//时间格式2011-12-22 15:10:54 处理
	var ntime = new Date(t.replace(/\-/g,"/"));
	var nowtime = new Date();
	var leftsecond=parseInt((nowtime.getTime()-ntime.getTime())/1000);
	//var y= ntime.getYear();
	//y+= (y < 2000) ? 1900 : 0; 
	var d=parseInt(leftsecond/3600/24);
	var h=parseInt((leftsecond/3600)%24);
	var m=parseInt((leftsecond/60)%60);
	var s=parseInt(leftsecond%60);
	
	var toTime = new ToTime(t);
	var todayTime = new ToTime(nowtime.format("yyyy-MM-dd hh:mm:ss"));
	var cd = todayTime.d-toTime.d;
	
//	if(d>365){
		return "<span style='color:#999'>"+toTime.y+"."+toTime.m+"."+toTime.d +"  "+toTime.h+":"+toTime.mm+"</span>";
//	}else if(d>2){
//		return toTime.m+1+"."+toTime.d+" <span>"+toTime.h+":"+toTime.mm+"</span>";
//	}else if(d>0){
//		
//		if(cd==1){
//		    return "昨天 <span>"+toTime.h+":"+toTime.mm+"</span>";
//		}else{
//			return "前天 <span>"+toTime.h+":"+toTime.mm+"</span>";
//		}	
//		
//	}else if(h>3){
//		
//		if(cd==0){
//		    return "今天 <span>"+toTime.h+":"+toTime.mm+"</span>";
//		}else{
//			return "昨天 <span>"+toTime.h+":"+toTime.mm+"</span>";
//		}	
//		
//		return h+"小时前";
//		
//	}else if(h>0&&h<=3){
//		return h+"小时前";
//	}else if(m>0){
//		return m+"分钟前";
//	}else{
//		return s+"秒前";
//	}
}
//时间输出
function ToTime(timeString) {
	this.y = timeString.substring(0,4);
	this.m = timeString.substring(5,7);
	this.d = timeString.substring(8,10);
	this.h = timeString.substring(11,13);
	this.mm = timeString.substring(14,16);
	this.ss = timeString.substring(17,19);
}

//时间轴提示信息
function Timetjj(ldDiv){
	
	this.event=function(ldDiv){		 

	    var _this= this;
		$(ldDiv).live("mouseover",function(){
			
			 $(".tccTx,.Tdp").hide();
			 $('.DateDataN .Pf p').hide();
			 
			 xsimg = false;
			 var tis = $(this);
			 var id = tis.attr("id");
			 var top= tis.offset().top-36;
			 var left= tis.offset().left-3;
			 var thiss =$(this);
			 //(top<=0)?top=top-90:top;
			 //(left>=620)?left=620:left;
			 //(left<=0)?left=0:left;
			
			var uid = $(this).attr("id");
			var texts = $(this).attr("name");
			
			_this.addimg(top,left,texts,$(this).width());
			
			var Td = $(this).parent().find('p');
			if(Td.is(':hidden')){
			   $(this).parent().find('p').addClass('Tdp').show();
			   $(this).parent().find('.Tdp').css({width:'120px',position:'absolute',zIndex:'999'});
			}
			
		});
		
//		$(ldDiv).live("mouseout",function(){
//			xsimg = true;
//			var ks = setTimeout("Timegb()",800);
//		});
//		
//		$(ldDiv).live("mouseover",function(){
//			xsimg = false;
//		});
		
		$('.DateDataCon').mouseleave(function(){
			
			setTimeout(function(){
				$('.Tdp:not(:last)').hide();
				var bgtjj = new Timetjj();
				var tl = $('.DateDataN .Pf').offset().left-3;
				var tt = $('.DateDataN .Pf').offset().top-36;
				bgtjj.addimg(tt,tl,$('.DateDataN .Pf').attr('name'),$('.DateDataN .Pf').width());
				var Td = $('.DateDataN .Pf').parent().find('p');
				if(Td.is(':hidden')){
				   Td.show().css({width:'120px',position:'absolute',zIndex:'999'});
				}
			},400);
			return false;
			
		});
			
		
	}
	
	this.addimg=function(top,left,texts,this_w,max_w){
		     
			if(!max_w){max_w=100};
			var imgcom = $('.Tjj');
			//alert(imgcom.length)
			var clz=this.removeHTMLTag(texts);
			var tw = this.getByteLen(clz)*16;
			//(tw>max_w)?tw=max_w:tw=50;
			
			var tw2 = tw/2;
			(tw2<19)?tw2=19:tw2;
			
			if(imgcom.length==0){
				var tcon =$('<div class="Tjj" style="width:'+tw+'px;">'+
								 '<div class="tjjcon"></div>'+
								 '<div class="tj"></div>'+
							'</div>');			
				 tcon.find('.tjjcon').html(texts);
				 $("body").append(tcon);
				
				 var obj_h = tcon.height()-15;

				 $('.Tjj').css({"top":top-obj_h+"px","left":(left-tw2+this_w/2-5)+"px"});

				 $('.tj').css({"left":tw2-2+"px"});
				 
			}else{	
				 imgcom.find(".tjjcon").html(texts);
				 var imgcom = $('.Tjj');
				 imgcom.css({"width":tw+"px","left":(left-tw2+this_w/2-5)+"px"});
				 
				 var obj_h = imgcom.height()-15;
				 imgcom.css({"top":top-obj_h+"px"});
				 imgcom.find('.tj').css({"left":tw2-2+"px"});
				 imgcom.show();
			}
    }
	
	this.getByteLen=function(val) {
			if(!val){val=0}
			var len = 0;
			for (var i = 0; i < val.length; i++) {
				if (val.charAt(i).match(/[^\x00-\xff]/ig) != null) //全角 
					len += 2; //如果是全角，占用两个字节
				else
					len += 1; //半角占用一个字节
			}
			return len/2;
	}
	this.removeHTMLTag=function(str){
            str = str.replace(/<[^>].*?>/g,''); //去除HTML tag
            str = str.replace(/[ | ]*n/g,'n'); //去除行尾空白
            //str = str.replace(/n[s| | ]*r/g,'n'); //去除多余空行
           // str=str.replace(/&nbsp;/ig,'');//去掉&nbsp;
            return str;
    }
	//return this.event(ldDiv);
					 
}
Date.prototype.format = function(format){
var o = {
"M+" : this.getMonth()+1, //month
"d+" : this.getDate(), //day
"h+" : this.getHours(), //hour
"m+" : this.getMinutes(), //minute
"s+" : this.getSeconds(), //second
"q+" : Math.floor((this.getMonth()+3)/3), //quarter
"S" : this.getMilliseconds() //millisecond
}

if(/(y+)/.test(format)) {
format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
}

for(var k in o) {
if(new RegExp("("+ k +")").test(format)) {
format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
}
}
return format;
} 
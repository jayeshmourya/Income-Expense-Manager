// var ctx = document.getElementById("myChart").getContext("2d");
const renderChart = (data, labels) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    const getRandomType = () => {
        const types = [
          "bar",
          "horizontalBar",
          "pie",
          "line",
          "radar",
          "doughnut",
          "polarArea",
        ];
        return types[Math.floor(Math.random() * types.length)];
      };
        const type=getRandomType();      
    var myChart = new Chart(ctx, {
      type: type,
      data: {
        labels: labels,
        datasets: [
          {
              
            label: "MONTHLY EXPENSE",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Expenses in LAST 1 MONTH",
        },
      },
    });
  };
  
  const getChartData = () => {
    console.log("fetching");
    fetch("/all_of_expense")
      .then((res) => res.json())
      .then((results) => {
        console.log("results", results);
        const category_data = results.month_dict;
        const [labels, data] = [
          Object.keys(category_data),
          Object.values(category_data),
        ];
  
        renderChart(data, labels);
      });
  };
  
  document.onload = getChartData();
  

// fetch("/expense_category_summary")
// const category_data = results.expense_category_data;
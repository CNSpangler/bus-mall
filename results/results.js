const results = localStorage.getItem('BusMall Results');
const parsedResults = JSON.parse(results);

const votes = [];
const names = [];

parsedResults.forEach(item => {
    votes.push(item.votes);
    names.push(item.id);
});

const ctx = document.getElementById('results-chart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Number of Votes',
            data: votes,
            backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
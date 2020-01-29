const results = localStorage.getItem('BusMall Results');
const votes = [];
const names = [];

results.forEach = (item) => {
    votes.push(item.votes);
    names.push(item.id);
};

// document.getElementById('results-chart').textContent = JSON.stringify(results, 0, 2);

const ctx = document.getElementById('results-chart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Number of Votes',
            data: votes,
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange']
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
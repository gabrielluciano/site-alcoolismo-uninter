import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// Inicialização quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    animateCounter();
    criarGraficoIdade();
    criarGraficoEvolucao();
    criarGraficoJuventude();
    criarGraficoConsequencias();
    adicionarEventListeners();
});

// Animação do contador no header
function animateCounter() {
    const counter = document.getElementById('counter');
    const target = 58000;
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            counter.textContent = target.toLocaleString('pt-BR');
            clearInterval(timer);
        } else {
            counter.textContent = Math.floor(current).toLocaleString('pt-BR');
        }
    }, 30);
}

// Gráfico de Consumo por Idade
function criarGraficoIdade() {
    const ctx = document.getElementById('consumoIdade');
    if (!ctx) return;
    
    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['12-17 anos', '18-24 anos', '25-34 anos', '35-44 anos', '45-54 anos', '55-64 anos', '65+ anos'],
            datasets: [{
                label: 'Percentual que consome álcool (%)',
                data: [23, 67, 73, 69, 61, 52, 38],
                backgroundColor: [
                    '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'
                ],
                borderColor: [
                    '#ff5252', '#26a69a', '#2196f3', '#66bb6a', '#ffcc02', '#ba68c8', '#4db6ac'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 80,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Gráfico de Evolução das Mortes
function criarGraficoEvolucao() {
    const ctx = document.getElementById('evolucaoMortes');
    if (!ctx) return;
    
    new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Mortes relacionadas ao álcool',
                data: [52000, 53500, 54800, 55200, 56100, 59800, 57200, 57800, 58000],
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#c0392b',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString('pt-BR');
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Gráfico de Juventude e Álcool
function criarGraficoJuventude() {
    const ctx = document.getElementById('juventudeAlcool');
    if (!ctx) return;
    
    new Chart(ctx.getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Não', 'Sim'],
            datasets: [{
                label: 'Consumo de álcool entre jovens',
                data: [35, 65],
                backgroundColor: [
                    '#74b9ff',
                    '#d63031'
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Gráfico de Consequências do Álcool
function criarGraficoConsequencias() {
    const ctx = document.getElementById('consequenciasAlcool');
    if (!ctx) return;
    
    new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Acidente de trânsito', 'Doenças hepáticas', 'Câncer', 'Pancreatite', 'Depressão', 'Ansiedade', 'Outras'],
            datasets: [{
                label: 'Consequências do consumo de álcool',
                data: [25, 20, 15, 10, 5, 5, 20],
                backgroundColor: [
                    '#ffeaa7', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#dda0dd', '#98d8c8'
                ],
                borderColor: [
                    '#ffcc02', '#ff5252', '#26a69a', '#2196f3', '#66bb6a', '#ba68c8', '#4db6ac'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// Adicionar event listeners para os botões de download
function adicionarEventListeners() {
    document.getElementById('downloadPdf')?.addEventListener('click', function() {
        // Lógica para download em PDF
        alert('Função de download em PDF não implementada ainda.');
    });
    
    document.getElementById('downloadImg')?.addEventListener('click', function() {
        // Lógica para download da imagem
        alert('Função de download de imagem não implementada ainda.');
    });
}
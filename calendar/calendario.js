
    // Data atual
    let dataAtual = new Date();
    let dataSelecionada = new Date();

   let modo = "mes";

    // Eventos de exemplo
    const eventos = {

        "2026-11-10": [
            {
                titulo: "Prova de Matemática",
                horario: "08:00 - 09:30",
                local: "Sala 402",
                tipo: "prova"
            }
        ],

        "2026-11-12": [
            {
                titulo: "Feira Cultural",
                horario: "14:00 - 15:30",
                local: "Auditório",
                tipo: "evento"
            }
        ],

        "2026-11-15": [
            {
                titulo: "Entrega de trabalho",
                horario: "Até 23:59",
                local: "Plataforma",
                tipo: "tarefa"
            }
        ],
        
        "2026-11-29": [
            {
                titulo: "Prova de Fisica",
                horario: "08:00 - 10:30",
                local: "Sala 502",
                tipo: "prova"
            },

            {
                titulo: "Atividade de geografia",
                horario: "Até 23:59",
                local: "plataforma",
                tipo: "tarefa"
            }
        ]
    
        
    };

    const nomesMeses = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"
    ];

    function formatarData(data) {

        let ano = data.getFullYear();
        let mes = String(data.getMonth() + 1).padStart(2, "0");
        let dia = String(data.getDate()).padStart(2, "0");

        return `${ano}-${mes}-${dia}`;
    }

    function desenharCalendario() {

        const dias = document.getElementById("dias");

        dias.innerHTML = "";

        document.getElementById("mesAno").textContent =
            nomesMeses[dataAtual.getMonth()] + " " +
            dataAtual.getFullYear();

        let inicio;

        if (modo === "mes") {

            inicio = new Date(
                dataAtual.getFullYear(),
                dataAtual.getMonth(),
                1
            );

            inicio.setDate(inicio.getDate() - inicio.getDay());

        } else {

            inicio = new Date(dataSelecionada);

            inicio.setDate(
                inicio.getDate() - inicio.getDay()
            );

        }

        let quantidade = modo === "mes" ? 42 : 7;

        for (let i = 0; i < quantidade; i++) {

            let data = new Date(inicio);

            data.setDate(inicio.getDate() + i);

            let chave = formatarData(data);

            let eventosDoDia = eventos[chave] || [];

            let botao = document.createElement("button");

            botao.className = "dia";

            if (
                data.getMonth() !== dataAtual.getMonth() &&
                modo === "mes"
            ) {
                botao.classList.add("outro-mes");
            }

            if (chave === formatarData(dataSelecionada)) {
                botao.classList.add("selecionado");
            }

            botao.textContent = data.getDate();

            let marcadores = document.createElement("div");

            marcadores.className = "marcadores";

            eventosDoDia.forEach(evento => {

                let ponto = document.createElement("i");

                ponto.className = "ponto " + evento.tipo;

                marcadores.appendChild(ponto);

            });

            botao.appendChild(marcadores);

            botao.addEventListener("click", () => {

                dataSelecionada = new Date(data);

                if (modo === "mes") {
                    dataAtual = new Date(
                        data.getFullYear(),
                        data.getMonth(),
                        1
                    );
                }

                desenharCalendario();

            });

            dias.appendChild(botao);

        }

        mostrarEventos();

    }

    function mostrarEventos() {

        let chave = formatarData(dataSelecionada);

        let lista = eventos[chave] || [];

        let area = document.getElementById("listaEventos");

        area.innerHTML = "";

        document.getElementById("dataSelecionada").textContent =
            dataSelecionada.toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long"
            });

        if (lista.length === 0) {

            area.innerHTML =
                '<div class="vazio">Nenhum evento para esta data.</div>';

            return;

        }

        lista.forEach(evento => {

            let card = document.createElement("div");

            card.className = "card-evento";

            let nomesTipos = {
                prova: "PROVA",
                evento: "EVENTO",
                feriado: "FERIADO",
                tarefa: "TAREFA"
            };

            card.innerHTML = `
                <div class="barra ${evento.tipo}"></div>

                <div class="informacoes">
                    <h4>${evento.titulo}</h4>
                    <p>◷ ${evento.horario} · ${evento.local}</p>
                </div>

                <span class="tipo tipo-${evento.tipo}">
                    ${nomesTipos[evento.tipo]}
                </span>
            `;

            area.appendChild(card);

        });

    }

    // Navegar entre meses ou semanas
    document.getElementById("anterior").addEventListener("click", () => {

        if (modo === "mes") {
            dataAtual.setMonth(dataAtual.getMonth() - 1);
        } else {
            dataSelecionada.setDate(dataSelecionada.getDate() - 7);
            dataAtual = new Date(dataSelecionada);
        }

        desenharCalendario();

    });

    document.getElementById("proximo").addEventListener("click", () => {

        if (modo === "mes") {
            dataAtual.setMonth(dataAtual.getMonth() + 1);
        } else {
            dataSelecionada.setDate(dataSelecionada.getDate() + 7);
            dataAtual = new Date(dataSelecionada);
        }

        desenharCalendario();

    });

    // Alternar visualização
    document.getElementById("botaoMes").addEventListener("click", () => {

        modo = "mes";

        document.getElementById("botaoMes").classList.add("ativo");
        document.getElementById("botaoSemana").classList.remove("ativo");

        desenharCalendario();

    });

    document.getElementById("botaoSemana").addEventListener("click", () => {

        modo = "semana";

        document.getElementById("botaoSemana").classList.add("ativo");
        document.getElementById("botaoMes").classList.remove("ativo");

        desenharCalendario();

    });
// Iniciar calendário automaticamente
desenharCalendario();
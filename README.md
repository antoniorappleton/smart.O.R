# Smart O.R. - Gestão Inteligente de Bloco Operatório

**Smart O.R.** é uma PWA (Progressive Web App) desenhada para transformar a gestão logística do Bloco Operatório, permitindo uma agenda optimizada, tomada de decisão baseada em dados e uma coordenação eficiente da equipa cirúrgica.

## 🌟 O Conceito (Big Picture)

A gestão de um Bloco Operatório é um desafio logístico complexo que envolve a coordenação de múltiplos intervenientes (cirurgiões, anestesiologistas, enfermeiros), recursos físicos (salas, equipamentos) e tempos rigorosos (preparação, cirurgia, limpeza). 

Este projecto propõe uma solução digital **offline-first** e **mobile-ready** que:
1.  **Elimina Conflitos**: Validação automática de disponibilidades de pessoal e materiais.
2.  **Maximiza Eficiência**: Algoritmo de agendamento que prioriza ambulatório e agrupa lateralidades para reduzir tempos de *turnover*.
3.  **Digitaliza a Checklist**: Geração automática de documentação (PDF) para cada cirurgia, garantindo segurança e conformidade.
4.  **Aprende com Atrasos**: Registo estruturado de justificações para alimentar futuras melhorias assistidas por IA.

---

## 🛠️ Funcionalidades do MVP (Fase 1)

O MVP foca-se na operacionalização básica do dia-a-dia, sem necessidade de integração imediata com sistemas hospitalares complexos:

-   **Dashboard em Tempo Real**: Estado actual de cada sala (Livre, Ocupada, Em Limpeza).
-   **Configuração Dinâmica**: Definição de horários de bloco, tempos médios de anestesia e regras específicas (ex: Sala 1 para Endoscopia).
-   **Gestor de Disponibilidades**: Controlo de horários e especializações dos anestesiologistas e enfermeiros.
-   **Optimizador de Agenda**: Proposta visual de timeline baseada em prioridades (Urgente > Ambulatório > Internamento).
-   **Registo de Tempos Reais**: Monitorização de entrada do doente, início/fim de cirurgia e saída da sala para cálculo de eficiência.

---

## 🚀 Visão de Futuro (Fase 2)

Após a validação do MVP, o Smart O.R. evoluirá para:
-   **Integração Hospitalar**: Sincronização automática com sistemas como SClínico, SONHO ou Glintt.
-   **Inteligência Artificial**: Previsão de atrasos com base no histórico de procedimentos e cirurgiões.
-   **Logística Preditiva**: Sugestão automática de reposição de materiais críticos.

---

## 📂 Arquitetura Tecnológica

-   **Frontend**: HTML5, Vanilla JavaScript, CSS Puro (Foco em performance e leveza).
-   **PWA**: Service Workers para funcionamento offline e instalação como App.
-   **Algoritmo**: Heurística de agendamento proprietária (local-first).

---

© 2026 Smart O.R. Management Team

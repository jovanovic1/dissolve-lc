# Readme

## ⚡ Action assistant for e-commerce websites ⚡

Dissolve is a new way to interact with e-commerce websites, inspired by [Adept](https://www.adept.ai/). This is part of Gen AI Buildathon organised by The Product Folks.

- Team Name: Dissolve
- Problem Statement: How do you reimagine e-commerce applications using natural language interfaces instead of GUI?
- Team Leader Email: yogender.eth@gmail.com

## A Brief of the Prototype

1. This is a browser extension that uses LLMs as a reasoning agent to interact with the UI elements of an e-commerce website. 
2. The user inputs their query, which is then parsed by the AI chain to figure out the relevant action. 
3. It uses retrieval augmented generation (RAG) to provide the most relevant chunk of HTML code.

## Tech stack
- OpenAI (LLM provider)
- Langchain (LLM orchestration)
- ChromaDB (Vectorstore)
- Vanilla JS (Frontend)
- Flask (Backend)
- AWS (Hosting)

## Step-by-Step Code Execution Instructions

**Kindly note**: This prototype is currently tailored for the [Logitech](https://www.logitech.com/en-in) website since we’ve indexed their web pages and stores in our vector database. This is because creating embeddings takes time and therefore, needs a partnership with the website. However, the code is modular and can be extended to other websites through minor changes.  

1. Clone this repository to your local machine.
2. Create a `.env` file and put your `OPENAI_API_KEY`.
3. Navigate to `DissolveAgent.py` and uncomment the following lines of code.
<pre>

query = "buy a keyboard which is compatible with mac & linux"
url = "https://www.logitech.com/en-in"

</pre>
4. Run `DissolveAgent.py` to simulate the prototype in your terminal.

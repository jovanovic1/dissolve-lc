from langchain.chat_models import ChatOpenAI
from langchain.experimental.plan_and_execute import PlanAndExecute, load_agent_executor, load_chat_planner
from langchain.llms import OpenAI
from langchain import SerpAPIWrapper
from langchain.agents.tools import Tool
from langchain import LLMMathChain

#Tools
search = SerpAPIWrapper(serpapi_api_key='9792e14cdb37c51c2a8210c8d66eefdb811488b691f3f8b66da3134c515bf04d')
llm = OpenAI(openai_api_key='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',temperature=0)
llm_math_chain = LLMMathChain.from_llm(llm=llm, verbose=True)
tools = [
    Tool(
        name = "Search",
        func=search.run,
        description="useful for when you need to answer questions about current events"
    ),
    Tool(
        name="Calculator",
        func=llm_math_chain.run,
        description="useful for when you need to answer questions about math"
    ),
]

#model
model = ChatOpenAI(openai_api_key='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',temperature=0)

#planner
planner = load_chat_planner(model)

#executor
executor = load_agent_executor(model, tools, verbose=True)

#agent
agent = PlanAndExecute(planner=planner, executor=executor, verbose=True)

agent.run("Who is Leo DiCaprio's girlfriend? What is her current age raised to the 0.43 power?")
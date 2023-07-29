from langchain.experimental.plan_and_execute import PlanAndExecute
from langchain.chat_models import ChatOpenAI

class DissolveAgent(PlanAndExecute):

  def get_base_prompt(self):
    return """You're a web agent. You will be given a query and a html page. You have to provide the correct element selector query and the correct action to take on that element."""

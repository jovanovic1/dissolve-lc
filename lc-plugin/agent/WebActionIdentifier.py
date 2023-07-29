from langchain.document_loaders import UnstructuredHTMLLoader
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from pydantic import BaseModel, validator, Field
from langchain.callbacks.manager import (
    AsyncCallbackManagerForToolRun,
    CallbackManagerForToolRun,
)
from langchain.tools import BaseTool
from typing import Optional, Type

# You can provide a custom args schema to add descriptions or custom validation

llm = OpenAI(openai_api_key='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',temperature=0)

context = """
    You are an intelligent html understanding agent. You will be given a html page,
    and a query about how to click, type, or select something on the page. You have to provide the 
    correct element selector query and the correct action to take on that element.
    """

example = """
    One example is: 

    input: <a href="https://www.amazon.in/gp/css/order-history?ref_=nav_orders_first" class="nav-a nav-a-2   nav-progressive-attribute" id="nav-orders" tabindex="0">
    <span class="nav-line-1">Returns</span>
    <span class="nav-line-2">&amp; Orders<span class="nav-icon nav-arrow"></span></span></a>

    element: document.querySelector('a[href="/gp/css/order-history?ref_=nav_orders_first"][class="nav-a nav-a-2   nav-progressive-attribute"][id="nav-orders"][tabindex="0"]');
    action: click
        """ 

base_context = context + example

class WebActionSchema(BaseModel):
    query: str = Field(description="Name of the button or element to look on the html page along with any relevant additional information")
    html_code: str = Field(description="The html code of the page or html code chunk fetched by the agent to look for the element on")

class WebActionIdentifier(BaseTool):
    name = "web_action_identifier"
    description = "identify the correct element selector and action to take on a given web page"
    args_schema: Type[WebActionSchema] = WebActionSchema

    def _run(
        self, 
        query: str, 
        html_code: str,
        run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        return llm(base_context + "\n"+query + "\n" + html_code)

    async def _arun(
        self, 
        query: str,
        html_code: str, 
        # run_manager: Optional[AsyncCallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool asynchronously."""
        raise NotImplementedError("custom_search does not support async")

#todo
# get agent user input
# get html
# define my input





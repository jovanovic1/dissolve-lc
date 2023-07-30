import os
from dotenv import load_dotenv
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from pydantic import BaseModel, validator, Field
from langchain.callbacks.manager import (
    AsyncCallbackManagerForToolRun,
    CallbackManagerForToolRun,
)
from langchain.tools import BaseTool
from typing import Optional, Type
from langchain.document_loaders import UnstructuredXMLLoader

# load dotenv
load_dotenv()
openai_api_key = os.getenv('OPENAI_API_KEY')

llm = ChatOpenAI(openai_api_key=openai_api_key,model_name='gpt-3.5-turbo-16k-0613',temperature=0)

sitemap = UnstructuredXMLLoader(
    "../data/logi-sitemap.xml",
)
docs = sitemap.load()

class WebActionSchema(BaseModel):
    query: str = Field(description="base user query by the user")

class WebNavigator(BaseTool):
    name = "web_action_identifier"
    description = "identify the correct element selector and action to take on a given web page"
    args_schema: Type[WebActionSchema] = WebActionSchema

    def _run(
        self, 
        query: str,
        run_manager: Optional[CallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool."""
        return llm(query + "sitemap is: "+ docs[0].page_content)

    async def _arun(
        self, 
        query: str,
        # run_manager: Optional[AsyncCallbackManagerForToolRun] = None
    ) -> str:
        """Use the tool asynchronously."""
        raise NotImplementedError("custom_search does not support async")





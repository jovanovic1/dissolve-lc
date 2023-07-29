from langchain.llms import OpenAI
from WebActionIdentifier import WebActionIdentifier
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from DissolveChain import DissolveChain

#base template
bTemplate = """
You are an intelligent site navigator who is helping a user navigate a website. You will be given a query by
the user about what he wants to achieve on the website for example: add a product to his cart, or return their last order, or
filter the products by price. You can also use the fetch_html_code tool to fetch the html code of the page the user is currently viewing.
Your job is to provide the element of the page and the action to be taken on that element to achieve the user's goal. The output can 
be sent by using the web_action_identifier tool.

if the user's job cannot be fullfiled from the current webpage then it could be possible that you have to go through a series of 
webpages to reach the required page where the final element action needs to be taken. Your job is also to navigate the user through the
webpages.
"""


prompt = PromptTemplate(
    input_variables=["query"],
    template=bTemplate + "User query is: {query}?",
)

llm = OpenAI(openai_api_key='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',temperature=0)

chain = DissolveChain(llm=llm,prompt=prompt,verbose=True)

print(chain.run("buy a keyboard which is compatible with iPad"))



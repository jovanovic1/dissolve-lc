from langchain.llms import OpenAI
from WebActionIdentifier import WebActionIdentifier
from langchain.chains import LLMChain, SequentialChain
from langchain.prompts import PromptTemplate
from DissolveElementChain import DissolveElementChain
from DissolveNavigatorChain import DissolveNavigatorChain

# class DissolveAgent

#base template
elementSelectorTemplate = """
You are an intelligent ecommerce site navigator who is helping a user navigate a website. You will be given a query by
the user about what he wants to achieve on the website for example: add a product to his cart, or return their last order, or
filter the products by price. You can also use the fetch_html_code tool to fetch the html code of the page the user is currently viewing.
Your job is to provide the element of the page on which click action will be taken.
"""


elementSelectorPrompt = PromptTemplate(
    input_variables=["query","url"],
    template=elementSelectorTemplate + "User query is: {query}? User is currenlty on this url: {url}",
)

navigationTemplate = """
You help the user to navigate from the current webpage url to the required webpage url using the sitemap tool. You have to return the url of the page
that needs to be opened on the user browser. For example: if the current user webpage url is "https://www.logitech.com/en-in" and the user says
that they want to see keyboards which are compatible with iPad then you have to return the url of the page
"http://www.logitech.com/en-in/products/keyboards.html" so that the user can see all the keyboards available on the store.
"""

navigationPrompt = PromptTemplate(
    input_variables=["query","url"],
    template = navigationTemplate + "User query is: {query}? User is currenlty on this url: {url}",
)

llm = OpenAI(openai_api_key='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',model_name='gpt-3.5-turbo-16k-0613',temperature=0)

navigationChain = DissolveNavigatorChain(llm=llm,prompt=navigationPrompt,verbose=True)
elementSelectorChain = DissolveElementChain(llm=llm,prompt=elementSelectorPrompt,verbose=True)

# print(navigationChain.run({
#     'query':'buy a keyboard which is compatible with iPad',
#     'url':'https://www.logitech.com/en-in'
# }))

# overall_chain = SequentialChain(
#     chains=[navigationChain, elementSelectorChain],
#     input_variables=["query", "url"],
#     # Here we return multiple variables
#     output_variables=["newUrl", "elements"],
#     verbose=True)

# overall_chain({"title":"Tragedy at sunset on the beach", "era": "Victorian England"})

print(elementSelectorChain.run({
    'query':"buy a keyboard which is compatible with mac & linux",
    'url':"https://www.logitech.com/en-in"
    }))
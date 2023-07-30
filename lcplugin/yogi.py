# TODO
# Take website code
# Create embeddings //not required
# Input: HTML page
# Semantic similarity with user query
# Output: get the right div and element id


from langchain.document_loaders import UnstructuredHTMLLoader
from langchain.llms import OpenAI

llm = OpenAI(openai_api_key="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", model_name='text-davinci-003')

def listToString(s):
 
    # initialize an empty string
    str1 = ""
 
    # traverse in the string
    for ele in s:
        str1 += ele
 
    # return string
    return str1

loader = UnstructuredHTMLLoader("../data/website.html")
data = loader.load()
print(data)



print(llm(data[0].page_content + "What's the class name of the shop button?"))
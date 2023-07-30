from langchain.document_loaders import UnstructuredXMLLoader
from langchain import PromptTemplate
from langchain.llms import OpenAI
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field, validator
from typing import List
from transformers import GPT2TokenizerFast
from langchain.text_splitter import CharacterTextSplitter

tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
text_splitter = CharacterTextSplitter.from_huggingface_tokenizer(tokenizer, chunk_size=1000)

#load the sitemap
loader = UnstructuredXMLLoader('debug/sitemap.xml')
docs = loader.load()
# print(docs[0].page_content)
text_chunks = text_splitter.split_text(docs[0].page_content)

print(text_chunks[0])

#init llm
llm = OpenAI(openai_api_key="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", model_name='text-davinci-003', temperature = 0.0)

template = """\
You are an intelligent website navigator. Help the user navigate the prefixed website. You have to 
provide the user with the url to the most relevant page on the website. The user is looking for {query}
"""

prompt = PromptTemplate.from_template(template)
prompt.format(query="how do I apply for jobs")

i = 0
for chunk in text_chunks:
    print(" --- {i}" )
    print(llm(chunk + prompt.template))
    i+=1
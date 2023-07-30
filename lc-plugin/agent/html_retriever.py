from langchain.vectorstores import Chroma
from langchain.embeddings.openai import OpenAIEmbeddings
import os
from dotenv import load_dotenv

class HtmlRetrieval:
    def __init__(self, query: str, url: str):
        self.query = query
        self.url = url

    def retrieve_html(self):
        load_dotenv()
        openai_api_key = os.getenv('OPENAI_API_KEY')

        persist_directory = 'vectordb'
        embeddings = OpenAIEmbeddings()

        db = Chroma(persist_directory=persist_directory, collection_name="URL-a", embedding_function=embeddings)
        docs = db.similarity_search(self.query)

        return docs[0:3]

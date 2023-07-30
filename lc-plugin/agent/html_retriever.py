from langchain.vectorstores import Chroma
from langchain.embeddings.openai import OpenAIEmbeddings
import os
from dotenv import load_dotenv
import hashlib

class HtmlRetrieval:
    def __init__(self, query: str, url: str):
        self.query = query
        self.url = url

    def encode_url_to_int(self, url_string):
        # Using SHA-256 hash algorithm
        sha256_hash = hashlib.sha256(url_string.encode()).hexdigest()

        # Convert the hexadecimal hash to an integer
        encoded_int = int(sha256_hash, 16)

        return encoded_int

    def retrieve_html(self):
        load_dotenv()
        openai_api_key = os.getenv('OPENAI_API_KEY')

        persist_directory = 'vectordb'
        embeddings = OpenAIEmbeddings()

        encoded_url = self.encode_url_to_int(self.url)

        db = Chroma(persist_directory=persist_directory, collection_name=encoded_url, embedding_function=embeddings)
        docs = db.similarity_search(self.query)

        return docs[0:3]

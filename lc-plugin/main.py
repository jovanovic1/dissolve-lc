import nest_asyncio

nest_asyncio.apply()

from langchain.document_loaders.sitemap import SitemapLoader
from pysitemap import crawler
from pysitemap.parsers.lxml_parser import Parser
from bs4 import BeautifulSoup

#create sitemap of a website
crawler('https://news.ycombinator.com/', 'debug/sitemap.xml', parser = Parser)

with open('debug/sitemap.xml', 'r') as f:
    sitemap = f.read()

# from langchain.llms import OpenAI

# var open_ai_key = os.environ.get("OPENAI_API_KEY")

# llm = OpenAI(open_ai_key)

sitemap_loader = SitemapLoader(sitemap)

docs = sitemap_loader.load()

sitemap_loader.requests_per_second = 2
# Optional: avoid `[SSL: CERTIFICATE_VERIFY_FAILED]` issue
sitemap_loader.requests_kwargs = {"verify": False}

print(docs)

print(" ---")
print(" ---")

print(docs[0])

# docs[0]
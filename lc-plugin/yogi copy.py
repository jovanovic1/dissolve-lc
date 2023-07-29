# TODO
# Take website code
# Create embeddings //not required
# Input: HTML page
# Semantic similarity with user query
# Output: get the right div and element id


from langchain.document_loaders import UnstructuredHTMLLoader
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from pydantic import BaseModel, validator

llm = OpenAI(openai_api_key="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", model_name='text-davinci-003')

PROMPT = """\
Given the button name and html code, provide the query to click on the button.
Button name: keyboard
HTML: 2x\\" media=\\"(max-width: 719px)\\"> \\n\\t\\t\\t<img class=\\"bg\\" src=\\"https://resource.logitech.com/w_880,h_495,c_lfill,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/homepage/product-grid/desktop_grey-mice-and-keyboards.png?v=1\\" alt=\\"Mice and Keybords\\" loading=\\"lazy\\"> \\n\\t\\t</picture>\\n\\t\\n\\t\\n\\t\\n\\t<picture class=\\"carousel-image responsive-img js-responsive-img\\">\\n\\t\\t<source srcset=\\"https://resource.logitech.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/product-grid/desktop_grey-mice-and-keyboards.png?v=1\\" media=\\"(min-width: 1025px)\\">\\n\\t\\t<source srcset=\\"https://resource.logitech.com/w_1024,h_820,c_lfill,q_auto,f_auto,dpr_1.0,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/product-grid/desktop_grey-mice-and-keyboards.png?v=1\\" media=\\"(min-width: 720px)\\">\\n\\t\\t<source srcset=\\"https://resource.logitech.com/w_1024,h_820,c_lfill,q_auto,f_auto,dpr_2.0,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/product-grid/desktop_grey-mice-and-keyboards.png?v=1\\" media=\\"(min-width: 720px)\\">\\n\\t\\t<source srcset=\\"https://resource.logitech.com/w_720,h_768,c_lfill,q_auto,f_auto,dpr_1.0,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/product-grid/desktop_grey-mice-and-keyboards.png?v=1\\" media=\\"(max-width: 719px)\\">\\n\\t\\t<source srcset=\\"https://resource.logitech.com/w_720,h_768,c_lfill,q_auto,f_auto,dpr_2.0,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/product-grid/desktop_grey-mice-and-keyboards.png?v=1\\" media=\\"(max-width: 719px)\\">\\n        <img class=\\"bg\\" src=\\"https://resource.logitech.com/w_1800,h_1800,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/homepage/product-grid/desktop_grey-mice-and-keyboards.png?v=1\\" alt=\\"Mice and Keybords\\" loading=\\"lazy\\">\\n\\t</picture>\\n\\t<div class=\\"title\\">MICE &amp; KEYBOARDS</div>\\n\\n                        </a>\\n                        \\n                    \\n\\n                    \\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t<div class=\\"item i1 \\" data-item-num=\\"1\\" data-text-position=\\"top\\" data-overlay-position=\\"center\\">\\n\\n\\n                    \\n\\n                    \\n                       
"""

examples = [
    """
    <a href="https://www.amazon.in/gp/css/order-history?ref_=nav_orders_first" class="nav-a nav-a-2   nav-progressive-attribute" id="nav-orders" tabindex="0">
  <span class="nav-line-1">Returns</span>
  <span class="nav-line-2">&amp; Orders<span class="nav-icon nav-arrow"></span></span>
</a>

Give me the query to click on the Returns & Orders button here. 

Sure, here is the query:
    document.querySelector('a[href="/gp/css/order-history?ref_=nav_orders_first"][class="nav-a nav-a-2   nav-progressive-attribute"][id="nav-orders"][tabindex="0"]').click();
    """ 
]

# loader = UnstructuredHTMLLoader("./code/website.html")
# data = loader.load()

data_new = """
      <a href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart" aria-label="1 item in cart" class="nav-a nav-a-2 nav-progressive-attribute" id="nav-cart">
    <div id="nav-cart-count-container">
      <span id="nav-cart-count" aria-hidden="true" class="nav-cart-count nav-cart-1 nav-progressive-attribute nav-progressive-content">1</span>
      <span class="nav-cart-icon nav-sprite"></span>
    </div>
    <div id="nav-cart-text-container" class=" nav-progressive-attribute">
      <span aria-hidden="true" class="nav-line-1">
         
      </span>
      <span aria-hidden="true" class="nav-line-2">
        Cart
        <span class="nav-icon nav-arrow"></span>
      </span>
    </div>
  </a>
"""
# print(data)

prompt = PromptTemplate.from_template(PROMPT)
# prompt.format(PROMPT)

# print(prompt.template)
print(llm(examples[0] + PROMPT))
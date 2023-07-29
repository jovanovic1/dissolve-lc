from __future__ import annotations

from typing import Any, Dict, List, Optional

from pydantic import Extra

from langchain.schema.language_model import BaseLanguageModel
from langchain.callbacks.manager import (
    AsyncCallbackManagerForChainRun,
    CallbackManagerForChainRun,
)
from langchain.chains.base import Chain
from langchain.prompts.base import BasePromptTemplate
from WebActionIdentifier import WebActionIdentifier


class DissolveChain(Chain):
    """
    An example of a custom chain.
    """

    prompt: BasePromptTemplate
    """Prompt object to use."""
    llm: BaseLanguageModel
    output_key: str = "text"  #: :meta private:

    class Config:
        """Configuration for this pydantic object."""

        extra = Extra.forbid
        arbitrary_types_allowed = True

    @property
    def input_keys(self) -> List[str]:
        """Will be whatever keys the prompt expects.

        :meta private:
        """
        return self.prompt.input_variables

    @property
    def output_keys(self) -> List[str]:
        """Will always return text key.

        :meta private:
        """
        return [self.output_key]

    def stringInput(**inputs):
        inputs_str = str(inputs)
        print(inputs_str)

    def _call(
        self,
        inputs: Dict[str, Any],
        run_manager: Optional[CallbackManagerForChainRun] = None,
    ) -> Dict[str, str]:
        #format the prompt with given inputs
        prompt_value = self.prompt.format_prompt(**inputs)
        #get the html code relevant to the input
        html = """

            <div class="filter-wrapper-platform">
                <div class="plp-page-filters-v2 js-plp-filter-group pangea-inited" data-filter-id="platform">
                    <h2>Platform</h2>
                    <button class="toggle-visibility js-toggle-visibility" aria-label="Platform" aria-expanded="true"></button>
                    <div class="inner js-inner" style="display: block;">
                        <ul>
                            <li class="option">
                            <input name="platform-checkbox" type="checkbox" id="platform-checkbox-0" data-filter-group="platform" data-filter-val="windows" data-filter-title="Windows">
                            <label class="h6" for="platform-checkbox-0"><span class="filter-title">Windows</span>
                            </label>
                            </li>
                        
                            <li class="option">
                            <input name="platform-checkbox" type="checkbox" id="platform-checkbox-1" data-filter-group="platform" data-filter-val="mac" data-filter-title="Mac">
                            <label class="h6" for="platform-checkbox-1"><span class="filter-title">Mac</span>
                            </label>
                            </li>
                        
                            <li class="option">
                            <input name="platform-checkbox" type="checkbox" id="platform-checkbox-2" data-filter-group="platform" data-filter-val="linux" data-filter-title="Linux">
                            <label class="h6" for="platform-checkbox-2"><span class="filter-title">Linux</span>
                            </label>
                            </li>
                        
                            <li class="option">
                            <input name="platform-checkbox" type="checkbox" id="platform-checkbox-3" data-filter-group="platform" data-filter-val="chrome" data-filter-title="Chrome">
                            <label class="h6" for="platform-checkbox-3"><span class="filter-title">Chrome</span>
                            </label>
                            </li>
                        
                            <li class="option">
                            <input name="platform-checkbox" type="checkbox" id="platform-checkbox-4" data-filter-group="platform" data-filter-val="surface" data-filter-title="Surface">
                            <label class="h6" for="platform-checkbox-4"><span class="filter-title">Surface</span>
                            </label>
                            </li>
                        
                            <li class="option">
                            <input name="platform-checkbox" type="checkbox" id="platform-checkbox-5" data-filter-group="platform" data-filter-val="android" data-filter-title="Android">
                            <label class="h6" for="platform-checkbox-5"><span class="filter-title">Android</span>
                            </label>
                            </li>
                        
                            <li class="option">
                            <input name="platform-checkbox" type="checkbox" id="platform-checkbox-6" data-filter-group="platform" data-filter-val="ios" data-filter-title="iOS">
                            <label class="h6" for="platform-checkbox-6"><span class="filter-title">iOS</span>
                            </label>
                            </li>
                        
                            <li class="option">
                            <input name="platform-checkbox" type="checkbox" id="platform-checkbox-7" data-filter-group="platform" data-filter-val="ipados" data-filter-title="iPadOS">
                            <label class="h6" for="platform-checkbox-7"><span class="filter-title">iPadOS</span>
                            </label>
                            </li>
                        </ul>
                    </div>
            """
        
        #generate the output
        action_identifier = WebActionIdentifier()
        output = action_identifier._run(query=prompt_value.text, html_code=html)
        print(output)

        # response = self.llm.generate_prompt(
        #     [prompt_value], callbacks=run_manager.get_child() if run_manager else None
        # )

        # # If you want to log something about this run, you can do so by calling
        # # methods on the `run_manager`, as shown below. This will trigger any
        # # callbacks that are registered for that event.
        # if run_manager:
        #     run_manager.on_text("Log something about this run")

        return {self.output_key: output}

    async def _acall(
        self,
        inputs: Dict[str, Any],
        run_manager: Optional[AsyncCallbackManagerForChainRun] = None,
    ) -> Dict[str, str]:
        # Your custom chain logic goes here
        # This is just an example that mimics LLMChain
        prompt_value = self.prompt.format_prompt(**inputs)

        # Whenever you call a language model, or another chain, you should pass
        # a callback manager to it. This allows the inner run to be tracked by
        # any callbacks that are registered on the outer run.
        # You can always obtain a callback manager for this by calling
        # `run_manager.get_child()` as shown below.
        # response = await self.llm.agenerate_prompt(
        #     [prompt_value], callbacks=run_manager.get_child() if run_manager else None
        # )

        # If you want to log something about this run, you can do so by calling
        # methods on the `run_manager`, as shown below. This will trigger any
        # callbacks that are registered for that event.
        # if run_manager:
        #     await run_manager.on_text("Log something about this run")

        # return {self.output_key: response.generations[0][0].text}

    @property
    def _chain_type(self) -> str:
        return "dissolve_chain"
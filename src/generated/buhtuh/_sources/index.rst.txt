

Welcome to BuhTuh's documentation!
==================================

.. toctree::
   :maxdepth: 2
   :caption: Contents:
   
   api
   buhtuh
   sql_models



Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`

* :ref:`api`



.. ipython::

    In [1]: from sql_models.util import extract_format_fields

    In [2]: assert extract_format_fields('{test}') == {'test'}
    
    In [3]: assert extract_format_fields('{test} more text {test}') == {'test'}
    
    In [4]: assert extract_format_fields('text{test} more {{text}} {test2} te{x}t{test}') == {'test', 'test2', 'x'}
    Out [4]: bier
    
.. autosummary:: 
	:recursive:
	:members:
	:inherited-members:
	:toctree: api

    sql_models
    buhtuh

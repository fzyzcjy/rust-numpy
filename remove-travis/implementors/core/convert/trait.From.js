(function() {var implementors = {};
implementors["numpy"] = [{"text":"impl&lt;'a, T, D&gt; From&lt;&amp;'a PyArray&lt;T, D&gt;&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PyArrayDescr&gt; for &amp;'a PyAny","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; From&lt;&amp;'_ PyArrayDescr&gt; for Py&lt;PyArrayDescr&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;ShapeError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;FromVecError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl From&lt;NotContiguousError&gt; for PyErr","synthetic":false,"types":[]},{"text":"impl&lt;'py, T, D&gt; From&lt;&amp;'py PyArray&lt;T, D&gt;&gt; for PyReadonlyArray&lt;'py, T, D&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
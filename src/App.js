import React from "react";
import "./App.css";

import { marked } from "marked";
import { initialMarkdown } from "./lib";
import * as DOMPurify from "dompurify";

function App() {
	const [markdown, setMarkdown] = React.useState("");

	const updateMarkdown = (markdownValue) => {
		setMarkdown(markdownValue);
	};

	React.useEffect(() => {
		updateMarkdown(initialMarkdown);
	}, []);

	marked(markdown);

	return (
		<div className="App">
			<h1 className="app-header">Markdown Previewer</h1>
			<div className="container">
				<div className="editor">
					<div className="heading">
						<h4>Editor</h4>
					</div>
					<textarea
						name=""
						id="editor"
						value={markdown}
						onChange={(e) => {
							updateMarkdown(e.target.value);
						}}
					></textarea>
				</div>
				<div className="preview">
					<div className="heading">
						<h4>Markdown Preview</h4>
					</div>
					<div
						id="preview"
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(marked(markdown)),
						}}
					></div>
				</div>
			</div>
		</div>
	);
}

export default App;
